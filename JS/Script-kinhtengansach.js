let charts = {}; // Lưu trữ để destroy khi đổi filter

document.addEventListener('DOMContentLoaded', () => {
    const yearSelect = document.getElementById('year-filter');
    const monthSelect = document.getElementById('month-filter');

    function loadKinhTeData() {
        // Tạo key đặc biệt để lấy đúng dữ liệu Kinh tế
        const searchKey = `${yearSelect.value}_${monthSelect.value}_KinhTe`;
        const periodData = dashboardData.database[searchKey] || dashboardData.database["2026_Tháng 4_KinhTe"];

        // 1. Render 5 thẻ thống kê
        const statsContainer = document.getElementById('dynamic-stats');
        statsContainer.innerHTML = periodData.stats.map(stat => `
            <div class="stat-card">
                <div class="card-top">
                    <span class="card-title" style="font-weight: bold;">${stat.title}</span>
                    <span class="card-icon">${stat.icon}</span> 
                </div>
                <div class="card-number" style="color: #4946ED; font-size: 28px;">${stat.number}</div>
                <div class="card-desc" style="font-size: 13px; color: #666;">${stat.desc}</div>
                <div class="card-trend" style="color: #43C32F; font-weight: bold; margin-top: 5px;">${stat.trend}</div>
                <div class="card-time" style="font-size: 11px; color: #999;">${stat.time}</div>
            </div>
        `).join('');

        // 2. Vẽ 3 Biểu đồ
        renderCharts(periodData.charts);
    }

    function renderCharts(chartData) {
        // Hủy biểu đồ cũ nếu tồn tại
        Object.values(charts).forEach(chart => chart.destroy());

        // --- Biểu đồ Đồng hồ ---
        charts.gauge = new Chart(document.getElementById('gaugeChart'), {
            type: 'doughnut',
            data: {
                datasets: [{ data: chartData.gauge.data, backgroundColor: ['#4946ED', '#E0E0E0'], borderWidth: 0 }]
            },
            options: { rotation: -90, circumference: 180, cutout: '75%', plugins: { legend: { display: false } } }
        });

        // --- Biểu đồ Cột phân tầng ---
        charts.stacked = new Chart(document.getElementById('stackedBarChart'), {
            type: 'bar',
            data: {
                labels: chartData.stackedBar.labels,
                datasets: [
                    { label: 'Hộ KD', data: chartData.stackedBar.datasets[0], backgroundColor: '#43C32F' },
                    { label: 'DN TN', data: chartData.stackedBar.datasets[1], backgroundColor: '#3F75FF' },
                    { label: 'HTX', data: chartData.stackedBar.datasets[2], backgroundColor: '#FFA500' }
                ]
            },
            options: { scales: { x: { stacked: true }, y: { stacked: true } } }
        });

        // --- Biểu đồ Tròn dự án ---
        charts.donut = new Chart(document.getElementById('donutProjectChart'), {
            type: 'doughnut',
            data: {
                labels: chartData.donut.labels,
                datasets: [{ data: chartData.donut.data, backgroundColor: ['#FFA500', '#3F75FF', '#43C32F'] }]
            },
            options: { cutout: '60%', plugins: { legend: { position: 'bottom' } } }
        });
    }

    // Khởi tạo lần đầu
    loadKinhTeData();
    yearSelect.addEventListener('change', loadKinhTeData);
    monthSelect.addEventListener('change', loadKinhTeData);
});