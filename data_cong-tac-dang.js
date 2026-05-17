const dataCongTacDang = {
    // 1. Thông tin cán bộ phụ trách
    "officer": {
        "name": "Đ/c Nguyễn Văn X - Phó Bí thư Thường trực",
        "phone": "0988.123.456"
    },

    // 2. Dữ liệu chạy biểu đồ
    "database": {
        "2026_Tháng 4": {
            "charts": {
                // 6.1 Tiến độ kết nạp (Đã kết nạp vs Chỉ tiêu còn lại)
                "ketNapPie": {
                    "labels": ["Đã kết nạp", "Chỉ tiêu còn lại"],
                    "data": [12, 18] // Ví dụ chỉ tiêu 30, đã nạp 12
                },
                
                // 6.2 Biến động nhân sự (Biểu đồ đường 3 dây)
                "bienDongLine": {
                    "labels": ["Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4"],
                    "chuyenDen": [1, 2, 0, 2],
                    "chuyenDi": [0, 1, 1, 0],
                    "kyLuat": [0, 0, 0, 1]
                },

                // 6.3 Công tác đào tạo (Biểu đồ cột ghép)
                "daoTaoGrouped": {
                    "labels": ["Quý 1", "Quý 2", "Quý 3", "Quý 4"],
                    "nhanThucDang": [45, 50, 0, 0],
                    "dangVienMoi": [30, 20, 0, 0]
                }
            }
        }
    }
};