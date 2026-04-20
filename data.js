const dashboardData = {
    "filters": {
        "years": ["2024", "2025", "2026"],
        "months": ["Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5", "Tháng 6", "Tháng 7", "Tháng 8", "Tháng 9", "Tháng 10", "Tháng 11", "Tháng 12"]
    },
    "header": {
        "title": "TỔNG QUAN DASHBOARD",
        "updateTime": "Hệ thống tự động cập nhật"
    },
    "menus": [
        { "name": "Tổng quan", "active": true },
        { "name": "Đảng viên", "active": false },
        { "name": "Tài chính", "active": false }
    ],

    // ===============================================
    // KHU VỰC DỮ LIỆU ĐỘNG THEO NĂM - THÁNG
    // Nhãn được đặt theo cú pháp: "NĂM_THÁNG"
    // ===============================================
    "database": {
        // Dữ liệu mẫu cho Tháng 4 năm 2026
        "2026_Tháng 4": {
            "stats": [
                { "title": "Tổng Đảng viên", "number": "1.420", "desc": "Tăng 13.6% so với đầu năm", "trend": "↑ 170", "time": "Cập nhật 20/04/2026", "icon": "👥" },
                { "title": "Đảng viên chính", "number": "1.350", "desc": "Chiếm phần lớn đa số (~95%)", "trend": "↑ 160", "time": "Cập nhật 20/04/2026", "icon": "✅" },
                { "title": "Đảng viên Dự bị", "number": "70", "desc": "Tăng 9% so với đầu năm", "trend": "↑ 10", "time": "Cập nhật 20/04/2026", "icon": "🌱" },
                { "title": "Huy hiệu Đảng", "number": "125", "desc": "Số đảng viên đã nhận huy hiệu", "trend": "↑ 40", "time": "Cập nhật 15/04/2026", "icon": "🏅" }
            ],
            "charts": {
                "barChart": { "labels": ["T1", "T2", "T3", "T4"], "data": [12, 18, 25, 40] },
                "doughnutChart": { "labels": ["Đã thu", "Còn lại"], "data": [85, 15] }
            }
        },

        // Dữ liệu mẫu cho Tháng 3 năm 2026 (Số liệu thấp hơn để thấy sự thay đổi)
        "2026_Tháng 3": {
            "stats": [
                { "title": "Tổng Đảng viên", "number": "1.380", "desc": "Tăng 10.2% so với đầu năm", "trend": "↑ 130", "time": "Cập nhật 31/03/2026", "icon": "👥" },
                { "title": "Đảng viên chính", "number": "1.320", "desc": "Chiếm phần lớn đa số (~96%)", "trend": "↑ 130", "time": "Cập nhật 31/03/2026", "icon": "✅" },
                { "title": "Đảng viên Dự bị", "number": "60", "desc": "Không thay đổi", "trend": "→ 0", "time": "Cập nhật 31/03/2026", "icon": "🌱" },
                { "title": "Huy hiệu Đảng", "number": "110", "desc": "Số đảng viên đã nhận huy hiệu", "trend": "↑ 25", "time": "Cập nhật 15/03/2026", "icon": "🏅" }
            ],
            "charts": {
                "barChart": { "labels": ["T1", "T2", "T3"], "data": [12, 18, 25] },
                "doughnutChart": { "labels": ["Đã thu", "Còn lại"], "data": [60, 40] } // Tháng 3 thu được ít tiền hơn
            }
        },

        // Dữ liệu mặc định (Nếu chọn các tháng chưa nhập Data)
        "default": {
            "stats": [
                { "title": "Tổng Đảng viên", "number": "---", "desc": "Đang chờ cập nhật", "trend": "-", "time": "", "icon": "👥" },
                { "title": "Đảng viên chính", "number": "---", "desc": "Đang chờ cập nhật", "trend": "-", "time": "", "icon": "✅" },
                { "title": "Đảng viên Dự bị", "number": "---", "desc": "Đang chờ cập nhật", "trend": "-", "time": "", "icon": "🌱" },
                { "title": "Huy hiệu Đảng", "number": "---", "desc": "Đang chờ cập nhật", "trend": "-", "time": "", "icon": "🏅" }
            ],
            "charts": {
                "barChart": { "labels": ["Chưa có dữ liệu"], "data": [0] },
                "doughnutChart": { "labels": ["Trống"], "data": [100] }
            }
        }
    }
};