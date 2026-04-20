// Lưu trữ các biến biểu đồ toàn cục để có thể xóa (destroy) khi đổi filter
let myBarChart = null;
let myDoughnutChart = null;

document.addEventListener('DOMContentLoaded', () => {
    const data = dashboardData;

    // 1. Render Dropdown Bộ lọc
    const yearSelect = document.getElementById('year-filter');
    const monthSelect = document.getElementById('month-filter');
    
    if (data.filters) {
        data.filters.years.forEach(year => {
            yearSelect.innerHTML += `<option value="${year}">Năm ${year}</option>`;
        });
        data.filters.months.forEach(month => {
            monthSelect.innerHTML += `<option value="${month}">${month}</option>`;
        });
        
        // Cài đặt giá trị mặc định lúc mới vào web là Tháng 4 - 2026
        yearSelect.value = "2026";
        monthSelect.value = "Tháng 4";
    }

    // 2. Render Header & Menu
    document.getElementById('header-title').innerText = data.header.title;
    document.getElementById('header-time').innerText = data.header.updateTime;

    // 3. Hàm tải và vẽ dữ liệu dựa trên Tháng/Năm được chọn
    function loadDataForPeriod() {
        const selectedYear = yearSelect.value;
        const selectedMonth = monthSelect.value;
        
        // Tạo khóa tìm kiếm: ví dụ "2026_Tháng 4"
        const searchKey = `${selectedYear}_${selectedMonth}`;
        
        // Tìm dữ liệu trong database, nếu không có thì lấy cục "default"
        const periodData = data.database[searchKey] || data.database["default"];

        // 3.1: Vẽ 4 thẻ thống kê
        const statsContainer = document.getElementById('dynamic-stats');
        statsContainer.innerHTML = ''; 
        periodData.stats.forEach(stat => {
            statsContainer.innerHTML += `
                <div class="stat-card">
                    <div class="card-top">
                        <span class="card-title" style="font-weight: bold; color: #333;">${stat.title}</span>
                        <span class="card-icon">${stat.icon}</span> 
                    </div>
                    <div class="card-number" style="color: #4946ED; font-size: 30px; font-weight: bold; margin: 10px 0;">${stat.number}</div>
                    <div class="card-desc" style="font-size: 14px; color: #666;">${stat.desc}</div>
                    <div class="card-trend" style="color: #43C32F; font-size: 13px; font-weight: bold; margin-top: 5px;">${stat.trend}</div>
                    <div class="card-time" style="font-size: 12px; color: #999; margin-top: 5px;">${stat.time}</div>
                </div>
            `;
        });

        // 3.2: Vẽ Biểu đồ Cột
        if (myBarChart) myBarChart.destroy(); // Xóa biểu đồ cũ trước khi vẽ
        const ctxBar = document.getElementById('barChart').getContext('2d');
        myBarChart = new Chart(ctxBar, {
            type: 'bar',
            data: {
                labels: periodData.charts.barChart.labels,
                datasets: [{
                    label: 'Đảng viên mới',
                    data: periodData.charts.barChart.data,
                    backgroundColor: '#4946ED',
                    borderRadius: 5
                }]
            },
            options: { responsive: true, maintainAspectRatio: false, scales: { y: { beginAtZero: true } } }
        });

        // 3.3: Vẽ Biểu đồ Tròn
        if (myDoughnutChart) myDoughnutChart.destroy(); // Xóa biểu đồ cũ trước khi vẽ
        const ctxDoughnut = document.getElementById('doughnutChart').getContext('2d');
        myDoughnutChart = new Chart(ctxDoughnut, {
            type: 'doughnut',
            data: {
                labels: periodData.charts.doughnutChart.labels,
                datasets: [{
                    data: periodData.charts.doughnutChart.data,
                    backgroundColor: ['#43C32F', '#E0E0E0'],
                    borderWidth: 0
                }]
            },
            options: { responsive: true, maintainAspectRatio: false, cutout: '70%', plugins: { legend: { display: false } } }
        });
    }

    // 4. Chạy hàm load dữ liệu lần đầu tiên khi mở web
    loadDataForPeriod();

    // 5. Gắn sự kiện: Khi người dùng đổi Năm hoặc Tháng thì tự động chạy lại hàm load dữ liệu
    yearSelect.addEventListener('change', loadDataForPeriod);
    monthSelect.addEventListener('change', loadDataForPeriod);
});

// ==========================================
// CÁC HÀM XỬ LÝ MENU AVATAR (Giữ nguyên như cũ)
// ==========================================
function toggleProfileMenu() {
    const dropdown = document.getElementById('profile-dropdown');
    if(dropdown) dropdown.classList.toggle('show');
}

window.addEventListener('click', function(e) {
    const container = document.getElementById('user-profile-container');
    const dropdown = document.getElementById('profile-dropdown');
    if (container && dropdown && !container.contains(e.target)) {
        dropdown.classList.remove('show');
    }
});

function handleLogin(event) {
    event.preventDefault(); 
    const user = document.getElementById('drop-user').value.trim();
    const pass = document.getElementById('drop-pass').value.trim();
    const errorMsg = document.getElementById('drop-error');

    if (user === 'admin' && pass === '123') {
        document.getElementById('unauth-view').style.display = 'none';
        document.getElementById('auth-view').style.display = 'block';
        document.querySelector('.avatar-frame').style.border = "3px solid var(--success-green)";
        errorMsg.innerText = '';
    } else {
        errorMsg.innerText = 'Tài khoản hoặc mật khẩu không đúng!';
    }
}

function handleLogout() {
    document.getElementById('auth-view').style.display = 'none';
    document.getElementById('unauth-view').style.display = 'block';
    document.getElementById('drop-pass').value = '';
    document.querySelector('.avatar-frame').style.border = "none";
    const dropdown = document.getElementById('profile-dropdown');
    if(dropdown) dropdown.classList.remove('show');
}