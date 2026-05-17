let myKetNapChart = null;
let myBienDongChart = null;
let myDaoTaoChart = null;

document.addEventListener('DOMContentLoaded', () => {
    // Gọi hàm vẽ biểu đồ khi trang web vừa load xong
    loadChartsCongTacDang();
});

function loadChartsCongTacDang() {
    // Kiểm tra xem có đang ở trang Công tác đảng không (tránh lỗi nếu đang ở trang khác)
    if (!document.getElementById('ketNapPieChart')) return;

    // Lấy dữ liệu Tháng 4/2026 từ file data_congtacdang.js
    const chartData = dataCongTacDang.database["2026_Tháng 4"].charts;

    // ----------------------------------------------------
    // 6.1 Biểu đồ Tròn (Doughnut): Tiến độ kết nạp
    // ----------------------------------------------------
    const ctx1 = document.getElementById('ketNapPieChart').getContext('2d');
    if (myKetNapChart) myKetNapChart.destroy();
    myKetNapChart = new Chart(ctx1, {
        type: 'doughnut',
        data: {
            labels: chartData.ketNapPie.labels,
            datasets: [{
                data: chartData.ketNapPie.data,
                backgroundColor: ['#43C32F', '#E0E0E0'], // Màu xanh lá cho phần đã đạt
                borderWidth: 0
            }]
        },
        options: { 
            responsive: true, 
            maintainAspectRatio: false, 
            cutout: '70%',
            plugins: {
                legend: { position: 'bottom' }
            }
        }
    });

    // ----------------------------------------------------
    // 6.2 Biểu đồ Đường (Line): Biến động nhân sự
    // ----------------------------------------------------
    const ctx2 = document.getElementById('bienDongLineChart').getContext('2d');
    if (myBienDongChart) myBienDongChart.destroy();
    myBienDongChart = new Chart(ctx2, {
        type: 'line',
        data: {
            labels: chartData.bienDongLine.labels,
            datasets: [
                {
                    label: 'Chuyển đến',
                    data: chartData.bienDongLine.chuyenDen,
                    borderColor: '#4946ED', // Xanh dương
                    backgroundColor: '#4946ED',
                    tension: 0.3
                },
                {
                    label: 'Chuyển đi',
                    data: chartData.bienDongLine.chuyenDi,
                    borderColor: '#F5A623', // Cam
                    backgroundColor: '#F5A623',
                    tension: 0.3
                },
                {
                    label: 'Kỷ luật/Từ trần',
                    data: chartData.bienDongLine.kyLuat,
                    borderColor: '#D32F2F', // Đỏ
                    backgroundColor: '#D32F2F',
                    tension: 0.3
                }
            ]
        },
        options: { 
            responsive: true, 
            maintainAspectRatio: false,
            plugins: { legend: { position: 'bottom' } }
        }
    });

    // ----------------------------------------------------
    // 6.3 Biểu đồ Cột ghép (Grouped Bar): Công tác đào tạo
    // ----------------------------------------------------
    const ctx3 = document.getElementById('daoTaoGroupedBarChart').getContext('2d');
    if (myDaoTaoChart) myDaoTaoChart.destroy();
    myDaoTaoChart = new Chart(ctx3, {
        type: 'bar',
        data: {
            labels: chartData.daoTaoGrouped.labels,
            datasets: [
                {
                    label: 'Lớp Nhận thức về Đảng',
                    data: chartData.daoTaoGrouped.nhanThucDang,
                    backgroundColor: '#4946ED', // Xanh dương
                    borderRadius: 4
                },
                {
                    label: 'Lớp Đảng viên mới',
                    data: chartData.daoTaoGrouped.dangVienMoi,
                    backgroundColor: '#43C32F', // Xanh lá
                    borderRadius: 4
                }
            ]
        },
        options: { 
            responsive: true, 
            maintainAspectRatio: false,
            plugins: { legend: { position: 'bottom' } },
            scales: {
                y: { beginAtZero: true }
            }
        }
    });
}