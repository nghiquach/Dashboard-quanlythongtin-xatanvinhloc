const dashboardData = {
    "filters": {
        "years": ["2024", "2025", "2026"],
        "months": ["Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5", "Tháng 6", "Tháng 7", "Tháng 8", "Tháng 9", "Tháng 10", "Tháng 11", "Tháng 12"]
    },
    "header": {
        "title": "KINH TẾ - NGÂN SÁCH",
        "updateTime": "Cập nhật dữ liệu thời thực"
    },
    "database": {
        // DỮ LIỆU RIÊNG CHO TRANG KINH TẾ NGÂN SÁCH - THÁNG 4/2026
        "2026_Tháng 4_KinhTe": {
            "stats": [
                { "title": "Thu ngân sách", "number": "85%", "desc": "Đã thu: 8.5 tỷ / KH: 10 tỷ", "trend": "↑ Đạt tiến độ tốt", "time": "Cập nhật 09/05/2026", "icon": "💰" },
                { "title": "Chi ngân sách", "number": "6.2 tỷ", "desc": "Tổng chi / Dự toán: 8 tỷ", "trend": "Thuế SDĐPNN, NSNN", "time": "Cập nhật 09/05/2026", "icon": "📉" },
                { "title": "Phát triển kinh tế", "number": "45 Hộ", "desc": "Hộ KD mới + 12 DN mới", "trend": "↑ Tăng 15% cùng kỳ", "time": "Cập nhật 09/05/2026", "icon": "📈" },
                { "title": "Vốn đăng ký", "number": "120 tỷ", "desc": "Tổng vốn đăng ký mới", "trend": "↑ Thu hút tích cực", "time": "Cập nhật 09/05/2026", "icon": "🏦" },
                { "title": "Đầu tư công", "number": "5 Dự án", "desc": "Tổng mức đầu tư: 50 tỷ", "trend": "2 Thi công, 3 Hoàn thành", "time": "Cập nhật 09/05/2026", "icon": "🏗️" }
            ],
            "charts": {
                "gauge": { "data": [65, 35] },
                "stackedBar": {
                    "labels": ["Q1", "Q2", "Q3", "Q4"],
                    "datasets": [
                        [15, 20, 18, 25], // Hộ kinh doanh
                        [10, 15, 12, 18], // DN tư nhân
                        [5, 8, 4, 10]     // Hợp tác xã
                    ]
                },
                "donut": { "labels": ["Đang thẩm định", "Đang thi công", "Hoàn thành"], "data": [3, 5, 8] }
            }
        }
    }
};