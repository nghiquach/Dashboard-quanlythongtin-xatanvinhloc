document.addEventListener('DOMContentLoaded', () => {
    // Gọi dữ liệu từ file data.json
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            // 1. Cập nhật Tiêu đề Header
            document.getElementById('header-title').innerText = data.header.title;
            document.getElementById('header-time').innerText = data.header.updateTime;

            // 2. Cập nhật Menu
            const menuContainer = document.getElementById('dynamic-menu');
            menuContainer.innerHTML = ''; // Xóa HTML cũ
            data.menus.forEach(menu => {
                const li = document.createElement('li');
                li.innerHTML = `<a href="#" class="menu-item ${menu.active ? 'active' : ''}">${menu.name}</a>`;
                menuContainer.appendChild(li);
            });

            // 3. Cập nhật 4 thẻ thống kê
            const statsContainer = document.getElementById('dynamic-stats');
            statsContainer.innerHTML = ''; // Xóa HTML cũ
            data.stats.forEach(stat => {
                const cardHTML = `
                    <div class="stat-card">
                        <div class="card-top">
                            <span class="card-title">${stat.title}</span>
                            <span class="card-icon">${stat.icon}</span> 
                        </div>
                        <div class="card-number">${stat.number}</div>
                        <div class="card-desc">${stat.desc}</div>
                        <div class="card-trend">${stat.trend}</div>
                        <div class="card-time">${stat.time}</div>
                    </div>
                `;
                statsContainer.innerHTML += cardHTML;
            });

            // 4. Vẽ Biểu đồ Cột (Bar Chart)
            const ctxBar = document.getElementById('barChart').getContext('2d');
            new Chart(ctxBar, {
                type: 'bar',
                data: {
                    labels: data.charts.barChart.labels,
                    datasets: [{
                        label: 'Đảng viên mới',
                        data: data.charts.barChart.data,
                        backgroundColor: '#4946ED',
                        borderRadius: 5
                    }]
                },
                options: {
                    responsive: true,
                    scales: { y: { beginAtZero: true } }
                }
            });

            // 5. Vẽ Biểu đồ Tròn (Doughnut Chart)
            const ctxDoughnut = document.getElementById('doughnutChart').getContext('2d');
            new Chart(ctxDoughnut, {
                type: 'doughnut',
                data: {
                    labels: data.charts.doughnutChart.labels,
                    datasets: [{
                        data: data.charts.doughnutChart.data,
                        backgroundColor: ['#43C32F', '#E0E0E0'],
                        borderWidth: 0
                    }]
                },
                options: {
                    cutout: '70%',
                    plugins: { legend: { display: false } }
                }
            });
        })
        .catch(error => console.error('Lỗi khi tải JSON:', error));
});