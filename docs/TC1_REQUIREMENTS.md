# TC1 – PHÂN TÍCH YÊU CẦU VÀ ĐÁNH GIÁ PHƯƠNG ÁN

**Dự án:** Hanoi Warriors FC – Website câu lạc bộ bóng đá tĩnh bằng HTML5/CSS3  
**Học phần:** Thiết kế web và triển khai HTPM  
**Tiêu chí:** TC1 – Yêu cầu và đánh giá phương án (15%)

> Hanoi Warriors FC là câu lạc bộ giả lập được xây dựng cho bài tập A3. Tên cầu thủ, đối thủ, lịch và tỷ số trong website là dữ liệu minh họa, không phải thông tin của một đội bóng có thật.

## 1. Bốn câu hỏi trước khi lập trình

### 1.1. Ai sẽ xem website?

Website hướng đến bốn nhóm người dùng:

| Nhóm người dùng | Nhu cầu thông tin | Mức độ ưu tiên |
|---|---|---|
| Cổ động viên | Xem tin tức, lịch thi đấu, kết quả và đội hình | Chính |
| Hội viên/người muốn tham gia | Tìm hiểu hoạt động và gửi thông tin đăng ký | Cao |
| Ban quản trị câu lạc bộ | Giới thiệu hình ảnh, hoạt động và thông tin chung của CLB | Cao |
| Đối tác/nhà tài trợ | Tìm hiểu CLB và kênh liên hệ | Trung bình |

**Kết luận:** Cổ động viên là nhóm người dùng trọng tâm. Vì vậy, trang chủ ưu tiên thông tin giới thiệu, tin nổi bật và trận đấu tiếp theo; thanh điều hướng đặt ở vị trí dễ nhận biết trên tất cả các trang.

### 1.2. Họ cần làm gì?

Các tác vụ được xác định từ nhu cầu của từng nhóm:

1. Xem phần giới thiệu và giá trị của câu lạc bộ.
2. Xem lịch thi đấu, ngày thi đấu, cặp đấu, tỷ số và trạng thái trận.
3. Xem danh sách cầu thủ, được phân nhóm thành thủ môn, hậu vệ, tiền vệ và tiền đạo.
4. Đọc tin tức/ thông báo mẫu của câu lạc bộ.
5. Mở trang liên hệ, nhập họ tên, email, số điện thoại, vai trò và lời nhắn.
6. Di chuyển giữa bốn trang bằng logo, menu và các nút điều hướng trên trang chủ.

**Giới hạn của form:** Form hiện kiểm tra dữ liệu ở trình duyệt và hiển thị thông báo demo. Form chưa gửi email, chưa lưu dữ liệu và không phải hệ thống đăng ký thành viên thật.

### 1.3. Website có gì?

| Trang | Tệp | Nội dung và thành phần chính | Tác vụ chính |
|---|---|---|---|
| Trang chủ | `index.html` | Hero/banner, giới thiệu, tin nổi bật, trận tiếp theo, sidebar | Đi đến đội hình/lịch đấu/liên hệ |
| Lịch thi đấu | `schedule.html` | Bảng ngày đấu, cặp đấu, tỷ số và trạng thái | Theo dõi lịch/kết quả mẫu |
| Đội hình | `squad.html` | Bốn nhóm vị trí và thẻ cầu thủ | Tra cứu cầu thủ theo vị trí |
| Liên hệ | `contact.html` | Form HTML5 và thông tin liên hệ minh họa | Kiểm tra dữ liệu form demo |

Các trang dùng chung Header, Navigation và Footer; stylesheet dùng chung là `style.css`. Trang liên hệ nạp thêm `script.js` để xử lý tương tác form phía trình duyệt.

### 1.4. Kiểm tra bằng cách nào?

| Nhóm kiểm thử | Cách kiểm tra | Tiêu chí đạt |
|---|---|---|
| Nội dung/trang | Mở từng tệp HTML trên trình duyệt | Đúng tiêu đề, nội dung chính và cấu trúc |
| Điều hướng | Nhấn logo, bốn mục menu và CTA | Mở đúng đích, không gặp trang 404 |
| Responsive | Dùng DevTools ở 375, 430, 768, 1366px | Không tràn ngang toàn trang; nội dung và điều hướng dùng được |
| Biểu mẫu | Thử bỏ trống, email sai, điện thoại sai, thiếu vai trò/xác nhận và dữ liệu hợp lệ | Trình duyệt chặn dữ liệu không hợp lệ; dữ liệu hợp lệ hiện thông báo demo |
| Tài nguyên | Kiểm tra ảnh, favicon, CSS và JavaScript | Tài nguyên nội bộ tải được |
| Triển khai | Mở URL GitHub Pages sau khi xuất bản | Trang chủ và các trang con truy cập được |
| Phiên bản | Đối chiếu commit local, Repository và URL | Bản chạy khớp commit bàn giao |

## 2. Phân định phạm vi

| Hạng mục | Trong phạm vi A3 | Ngoài phạm vi A3 |
|---|---|---|
| Website nhiều trang HTML5 | Có | – |
| Giao diện CSS3, Grid, Flexbox, responsive | Có | – |
| Trang chủ, lịch thi đấu, đội hình, liên hệ | Có | – |
| Dữ liệu đội bóng và lịch đấu | Dữ liệu giả lập tĩnh | Đồng bộ dữ liệu trận đấu trực tiếp |
| Form | Xác thực phía trình duyệt, thông báo demo | Gửi/lưu thông tin, quản trị hồ sơ |
| Đặt vé/thanh toán | – | Có |
| Đăng nhập/phân quyền | – | Có |
| CMS/cơ sở dữ liệu/backend | – | Có |
| Git/GitHub/GitHub Pages | Hướng dẫn và chuẩn bị mã nguồn; cần người học thực hiện xuất bản | Backend riêng |

## 3. Acceptance Criteria – Tiêu chí chấp nhận

| ID | Tiêu chí có thể kiểm chứng | Phương pháp nghiệm thu | Kết quả mong đợi |
|---|---|---|---|
| AC01 | Có đủ bốn trang HTML đúng tên | Kiểm tra thư mục dự án | Có `index.html`, `schedule.html`, `squad.html`, `contact.html` |
| AC02 | Mỗi trang có tiêu đề, mô tả, header, nav, main và footer | Kiểm tra HTML và trình duyệt | Thành phần có mặt, nội dung hợp lý |
| AC03 | Menu và logo điều hướng đúng | Nhấn từng liên kết từ các trang | Mở đúng tệp đích |
| AC04 | Trang chủ có giới thiệu, tin nổi bật và trận tiếp theo | Mở `index.html` | Hiển thị đủ ba khối nội dung |
| AC05 | Bảng lịch hiển thị ngày, trận đấu, tỷ số, trạng thái | Mở `schedule.html` | Có đủ bốn cột, cuộn ngang bên trong vùng bảng nếu màn hình hẹp |
| AC06 | Đội hình có đủ bốn nhóm vị trí | Mở `squad.html` | Có thủ môn, hậu vệ, tiền vệ, tiền đạo |
| AC07 | Form có các trường bắt buộc và quy tắc kiểm tra | Thử dữ liệu hợp lệ/không hợp lệ | Dữ liệu không hợp lệ bị chặn; dữ liệu hợp lệ hiện thông báo demo |
| AC08 | Form không tuyên bố gửi/lưu dữ liệu khi chưa có backend | Kiểm tra thông báo và mã JS | Nêu rõ đây chỉ là kiểm tra tại trình duyệt |
| AC09 | Không tràn ngang toàn trang tại 375/430/768/1366px | Chrome DevTools/kiểm tra tự động | `document.documentElement.scrollWidth` không lớn hơn viewport, ngoại trừ cuộn riêng bảng |
| AC10 | Văn bản nội dung dễ đọc | Kiểm tra CSS và hiển thị | Cỡ chữ phụ tối thiểu 12px; nội dung chính từ 14–16px |
| AC11 | Màu chữ nội dung đạt tương phản WCAG AA cho chữ thường | Tính tỷ lệ tương phản các cặp màu chính | Tối thiểu 4.5:1 |
| AC12 | Trang dùng chung CSS và tải đủ tài nguyên nội bộ | Kiểm tra Network/Console | Không thiếu CSS, JS, ảnh, favicon |
| AC13 | Repository chứa mã nguồn và tài liệu | Kiểm tra GitHub sau khi người học push | Đủ file, có lịch sử commit |
| AC14 | GitHub Pages truy cập và khớp commit nộp | Mở URL và đối chiếu commit | URL mở được, nội dung đúng phiên bản |

## 4. Đánh giá và lựa chọn phương án

Ba phương án được cân nhắc:

| Phương án | Ưu điểm | Hạn chế đối với đề tài | Đánh giá |
|---|---|---|---|
| Website một trang (one-page) | Ít tệp, điều hướng bằng anchor, dựng nhanh | Nội dung lịch, đội hình, tin và liên hệ dài; người dùng phải cuộn nhiều; khó phân tách chức năng | Có thể dùng cho landing page ngắn, không phải lựa chọn tối ưu ở đây |
| Website tĩnh nhiều trang HTML/CSS | Mỗi nhóm nội dung có URL và tệp riêng; dễ dùng liên kết HTML; dễ kiểm tra; không cần server; triển khai phù hợp GitHub Pages | Nội dung và lịch đấu cập nhật thủ công; không có quản trị dữ liệu | **Được chọn** vì khớp yêu cầu học phần, phạm vi và chức năng |
| Website dùng CMS/backend | Có thể quản trị tin tức, tài khoản, lịch và form có lưu dữ liệu | Cần backend, cơ sở dữ liệu, cấu hình bảo mật và vận hành; vượt phạm vi website tĩnh HTML5/CSS3 | Không chọn cho phiên bản A3; là hướng phát triển sau này |

**Lý do quyết định:** Phương án nhiều trang tĩnh đáp ứng bốn nhóm thông tin độc lập, thể hiện rõ kỹ năng HTML5/CSS3, Grid/Flexbox và responsive; đồng thời không tạo yêu cầu backend ngoài mục tiêu A3. Nếu dự án thực tế cần cập nhật tin/lịch thường xuyên hoặc nhận đăng ký thật thì cần đánh giá lại và bổ sung CMS/backend.

## 5. Rủi ro và giả định

- Dữ liệu cầu thủ, trận đấu và tỷ số đang là dữ liệu giả lập; không dùng làm thông tin chính thức.
- Người xem có thể dùng điện thoại; do đó giao diện cần co giãn ở màn hình hẹp.
- Website tĩnh không có lưu trữ phía máy chủ; không yêu cầu người dùng gửi dữ liệu cá nhân thật qua bản demo.
- Việc GitHub Pages hoạt động chỉ được xác nhận sau khi repository được tạo, push và kiểm tra URL thực tế.

## 6. Kết luận TC1

Yêu cầu dự án đã được xác định theo bốn câu hỏi trước khi code, có phạm vi, Acceptance Criteria có thể nghiệm thu và phân tích lựa chọn giữa website một trang, website tĩnh nhiều trang và CMS/backend. Phương án được chọn là website tĩnh nhiều trang vì phù hợp trực tiếp với mục tiêu bài tập A3. Kết quả nghiệm thu từng Acceptance Criteria sẽ được cập nhật trong `docs/TEST_CASES.md` sau khi thực hiện kiểm thử thực tế.
