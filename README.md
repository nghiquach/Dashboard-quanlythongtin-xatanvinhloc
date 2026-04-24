# 🇻🇳 CÔNG TRÌNH THANH NIÊN NÂNG CẤP CÔNG TÁC THEO DÕI HÀNH CHÍNH DÀNH CHO CÁN BỘ XÃ TÂN VĨNH LỘC, THÀNH PHỐ HỒ CHÍ MINH

[![Website](https://img.shields.io/badge/Website-Dashboard_Tân_Vĩnh_Lộc-blue?style=for-the-badge)](#)
[![Tech Stack](https://img.shields.io/badge/Tech_Stack-HTML_|_CSS_|_JS_|_PHP-orange?style=for-the-badge)](#)
[![Status](https://img.shields.io/badge/Status-Active-brightgreen?style=for-the-badge)](#)

**Hệ thống Dashboard tập trung hợp nhất dữ liệu quản lý hành chính địa phương**

---

## 📑 Mục lục
1. [Tổng quan dự án](#1-tổng-quan-dự-án)
2. [Công nghệ và Kiến trúc hệ thống](#2-công-nghệ-và-kiến-trúc-hệ-thống)
3. [Tính năng chi tiết](#3-tính-năng-chi-tiết)
4. [Hướng dẫn cài đặt & Triển khai](#4-hướng-dẫn-cài-đặt--triển-khai)
5. [Đội ngũ thực hiện](#5-đội-ngũ-thực-hiện)

---

## 1. 📌 Tổng quan dự án

Dự án xây dựng một hệ thống Dashboard tập trung nhằm hợp nhất dữ liệu từ tất cả các phòng ban địa phương thành các tab thông tin trực quan trên một giao diện duy nhất. Hệ thống bao gồm trang hiển thị chung và trang quản trị (Admin) được phân quyền nghiêm ngặt, cho phép cán bộ từng đơn vị—từ Kinh tế đến Công tác Đảng—chủ động cập nhật và chịu trách nhiệm về số liệu chuyên môn của mình.

Việc tập trung hóa dữ liệu này nhằm thúc đẩy mục tiêu chuyển đổi số và nâng cao năng lực điều hành thông qua hệ thống biểu đồ giám sát chặt chẽ tiến độ ngân sách, tỷ lệ số hóa hồ sơ và các chỉ tiêu an sinh xã hội. Bằng cách loại bỏ sự rời rạc trong báo cáo thủ công, dự án tạo ra một môi trường quản lý minh bạch, giúp lãnh đạo địa phương đưa ra các quyết định chính xác và kịp thời dựa trên dữ liệu thực tế.

---

## 2. 💻 Công nghệ và Kiến trúc hệ thống

Dự án được xây dựng với cấu trúc tối ưu cho việc xử lý và hiển thị dữ liệu quản lý hành chính một cách mượt mà và trực quan.

### Khối Front-end (Client-side)
* **HTML/CSS/JS:** Xây dựng giao diện cơ bản và quản lý các tương tác người dùng.
* **Thư viện biểu đồ:** Tích hợp các công cụ vẽ biểu đồ (như Chart.js hoặc tương đương) để trực quan hóa dữ liệu đa dạng (Pie, Bar, Line, Radar, Gauge).

### Khối Back-end & Database (Server-side)
* **PHP:** Xử lý logic hệ thống, quản lý phân quyền người dùng (phòng ban vs. admin tổng) và điều phối luồng dữ liệu.
* **MySQL:** Hệ quản trị cơ sở dữ liệu lưu trữ toàn bộ thông tin từ các phòng ban.

### Tối ưu hạ tầng (Infrastructure & Hosting)
* **Môi trường phát triển:** Sử dụng **XAMPP** (Localhost) để phát triển và kiểm thử nội bộ.
* **Triển khai thực tế:** Vận hành trên **SSD Hosting** kết hợp với **cPanel** để quản lý server và database, có áp dụng cơ chế **Failover** để đảm bảo tính sẵn sàng cao.

---

## 3. 🌟 Tính năng chi tiết

### Cơ cấu phân quyền hệ thống
* **Trang chung (Dashboard):** Hiển thị tổng quan các tab thông tin từ tất cả các phòng ban.
* **Trang Admin phòng ban:** Tài khoản được cấp quyền chỉ có thể chỉnh sửa nội dung thuộc chuyên môn, không truy cập chéo sang dữ liệu ban ngành khác.
* **Trang Admin tổng:** Tài khoản có quyền tối cao, được phép xem và chỉnh sửa toàn bộ thông tin trên hệ thống.

### Chi tiết các Tab thông tin (Mỗi mục là một tab trên Dashboard)
* **Công tác Đảng & Đoàn thể:** Quản lý số liệu đảng viên, tổ chức Đảng, chỉ tiêu kết nạp (kèm biểu đồ cột/tròn), biến động nhân sự (biểu đồ đường) và công tác đào tạo (biểu đồ cột ghép).
* **MTTQ:** *(Thông tin đang chờ xã bổ sung).*
* **Kinh tế - Ngân sách:** Giám sát tiến độ thu/chi ngân sách (biểu đồ Gauge), thống kê phát triển kinh tế, vốn đăng ký (biểu đồ cột phân tầng) và trạng thái các dự án đầu tư công (biểu đồ Donut).
* **CCHC & Chuyển đổi số:** Theo dõi lượng hồ sơ TTHC (biểu đồ Line), tỷ lệ dùng chữ ký số và số hóa hồ sơ (Thanh Progress Bar), cùng các chỉ tiêu đô thị nông thôn mới (biểu đồ Radar/Cột).
* **An ninh - Trật tự:** Thống kê vi phạm pháp luật (biểu đồ Pie), vi phạm trật tự đô thị/giao thông và báo cáo xử phạt chuyên đề theo tháng (biểu đồ cột).
* **An sinh xã hội & Văn hóa:** Quản lý ngân sách chăm lo lễ Tết, số liệu giảm nghèo (biểu đồ thanh ngang) và thống kê quy mô các sự kiện văn hóa (biểu đồ cột).
* **Công tác tuyên truyền, giáo dục:** Phân loại và tỷ trọng các hoạt động tuyên truyền (biểu đồ Pie/Donut). Đi kèm bảng thống kê chi tiết từng hoạt động (ID, văn bản, minh chứng).

---

## 4. 🚀 Hướng dẫn cài đặt & Triển khai

### Môi trường Localhost (Dành cho Developer)
1.  **Yêu cầu hệ thống:** Cài đặt `XAMPP` (hoặc nền tảng tương đương hỗ trợ PHP/MySQL).
2.  **Cài đặt mã nguồn:** Clone repository hoặc copy folder dự án vào thư mục `htdocs` của XAMPP.
3.  **Khởi tạo Database:**
    * Mở `http://localhost/phpmyadmin`.
    * Tạo cơ sở dữ liệu mới.
    * Import file `.sql` đính kèm vào cơ sở dữ liệu vừa tạo.
4.  **Cấu hình kết nối:** Mở file cấu hình database (vd: `config.php`) và cập nhật thông số Hostname, Username, Password, Database Name.
5.  **Chạy dự án:** Truy cập `http://localhost/[tên-thư-mục]`.

### Triển khai lên Production (cPanel Hosting)
1.  Nén source code thành file `.zip`.
2.  Tạo Database và User trên cPanel.
3.  Import file `.sql` qua phpMyAdmin trên host.
4.  Upload và giải nén file `.zip` vào `public_html`.
5.  Cập nhật cấu hình kết nối database trong code.

---

## 5. 👥 Đội ngũ thực hiện

| STT | Họ và Tên | Acc Github | Vai trò chính |
| :---: | :--- | :--- | :--- |
| 1 | **Đinh Viết Quân** | [@](https://github.com/) | Trưởng dự án |
| 2 | **Đặng Minh Huệ** | [@minhe517](https://github.com/minhe517) | Phó dự án |
| 3 | **Nguyễn Lê Việt Anh** | [@](https://github.com/) | UI/UX |
| 4 | **Nguyễn Thị Diệu Thảo** | [@cherry-jeeelli](https://github.com/cherry-jeeelli) | UI/UX |
| 5 | **Đỗ Trọng Khanh** | [@](https://github.com/) |  |
| 6 | **Nguyễn Đinh Thảo Nhi** | [@](https://github.com/) |  |
| 7 | **Nguyễn Quốc Phi** | [@Quoc_Phi]([https://github.com](https://github.com/QuocPhi2306)/) |  |
| 8 | **Quách Quỳnh Thục Nghi** | [@](https://github.com/) |  |
| 9 | **Hồ Minh Khang** | [@](https://github.com/) |  |
| 10 | **Dương Thúy Hiền** | [@](https://github.com/) |  |
| 11 | **Bùi Lê Anh** | [@](https://github.com/) |  |
| 12 | **Nguyễn Linh Thùy Trang** | [@](https://github.com/) |  |
| 13 | **Hà Quang Đại** | [@](https://github.com/) | Đồng hành viên |
| 14 | **Lê Viết Bảo** | [@BaoVietLe](https://github.com/BaoVietLe) | Đồng hành viên |
| 15 | **Nguyễn Võ Lan Thanh** | [@](https://github.com/) | Đồng hành viên |
| 16 | **Hồ Thị Diễm Trang** | [@](https://github.com/) | Đồng hành viên |
| 17 | **Nguyễn Lê Trúc Anh** | [@](https://github.com/) | Đồng hành viên |
