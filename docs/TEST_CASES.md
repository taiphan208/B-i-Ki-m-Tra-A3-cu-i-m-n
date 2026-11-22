# KẾ HOẠCH KIỂM THỬ A3 – THỬ THẬT, GHI THẬT

**Quy tắc:** Chỉ ghi Đạt/Không đạt sau khi thao tác và quan sát kết quả trên môi trường được nêu. Không lấy rà soát source làm bằng chứng thay cho kiểm thử giao diện trên Windows. Rà soát mã nguồn tĩnh không thay thế việc mở website và kiểm thử trên trình duyệt. Gói bàn giao này không kèm báo cáo preflight nội bộ.

## A. Môi trường kiểm thử của sinh viên

| Thuộc tính | Kết quả thực tế |
|---|---|
| Hệ điều hành | Chưa xác nhận – điền theo máy thực tế |
| Trình duyệt và phiên bản | Chưa xác nhận – mở `chrome://settings/help` để ghi đúng phiên bản |
| Độ phân giải màn hình | Chưa xác nhận – ghi theo Display settings của máy |
| URL local hoặc GitHub Pages | Chưa ghi URL thực tế – bổ sung địa chỉ đã mở trên trình duyệt |
| Ngày/giờ kiểm thử | Chưa xác nhận – ghi thời điểm tự thực hiện kiểm thử |
| Người thực hiện | Phan Anh Tài |

## B. Rà soát mã nguồn

Việc đọc mã HTML/CSS/JavaScript chỉ giúp phát hiện một số lỗi cấu trúc. Kết quả hiển thị, responsive, liên kết và biểu mẫu vẫn phải được kiểm tra trực tiếp trên trình duyệt.

## C. Responsive trên trình duyệt

| ID | Mong đợi | Thao tác thử | Kết quả thực tế | Minh chứng / ghi chú |
|---|---|---|---|---|
| RS01 | Không tràn ngang toàn trang tại 375px | DevTools đặt width 375px; thử cả bốn trang | Chưa xác nhận – cần đối chiếu thao tác và ảnh thực tế | Đối chiếu ảnh tương ứng trong evidence; bổ sung kết quả sau khi tự kiểm tra |
| RS02 | Nội dung, chữ và nút dùng được tại 430px | Đặt width 430px | Chưa xác nhận – cần đối chiếu thao tác và ảnh thực tế | Đối chiếu ảnh tương ứng trong evidence; bổ sung kết quả sau khi tự kiểm tra |
| RS03 | Bố cục tablet hợp lý tại 768px | Đặt width 768px | Chưa xác nhận – cần đối chiếu thao tác và ảnh thực tế | Đối chiếu ảnh tương ứng trong evidence; bổ sung kết quả sau khi tự kiểm tra |
| RS04 | Bố cục desktop ổn định tại 1366px | Đặt width 1366px | Chưa xác nhận – cần đối chiếu thao tác và ảnh thực tế | Đối chiếu ảnh tương ứng trong evidence; bổ sung kết quả sau khi tự kiểm tra |
| RS05 | Ảnh không méo/vỡ hoặc mất | Kiểm tra các trang và ảnh | Chưa xác nhận – cần đối chiếu thao tác và ảnh thực tế | Đối chiếu ảnh tương ứng trong evidence; bổ sung kết quả sau khi tự kiểm tra |
| RS06 | Footer và phần cuối không tràn | Cuộn cuối cả bốn trang | Chưa xác nhận – cần đối chiếu thao tác và ảnh thực tế | Đối chiếu ảnh tương ứng trong evidence; bổ sung kết quả sau khi tự kiểm tra |

## D. Điều hướng và liên kết

| ID | Mong đợi | Thao tác thử | Kết quả thực tế | Minh chứng / ghi chú |
|---|---|---|---|---|
| LK01 | Logo luôn về trang chủ | Nhấn logo từ từng trang | Chưa xác nhận – cần đối chiếu thao tác và ảnh thực tế | Đối chiếu ảnh tương ứng trong evidence; bổ sung kết quả sau khi tự kiểm tra |
| LK02 | Trang chủ mở đúng | Nhấn Trang chủ | Chưa xác nhận – cần đối chiếu thao tác và ảnh thực tế | Đối chiếu ảnh tương ứng trong evidence; bổ sung kết quả sau khi tự kiểm tra |
| LK03 | Lịch thi đấu mở đúng | Nhấn Lịch thi đấu | Chưa xác nhận – cần đối chiếu thao tác và ảnh thực tế | Đối chiếu ảnh tương ứng trong evidence; bổ sung kết quả sau khi tự kiểm tra |
| LK04 | Đội hình mở đúng | Nhấn Đội hình | Chưa xác nhận – cần đối chiếu thao tác và ảnh thực tế | Đối chiếu ảnh tương ứng trong evidence; bổ sung kết quả sau khi tự kiểm tra |
| LK05 | Liên hệ mở đúng | Nhấn Liên hệ | Chưa xác nhận – cần đối chiếu thao tác và ảnh thực tế | Đối chiếu ảnh tương ứng trong evidence; bổ sung kết quả sau khi tự kiểm tra |
| LK06 | CTA khám phá đội hình hoạt động | Nhấn nút ở trang chủ | Chưa xác nhận – cần đối chiếu thao tác và ảnh thực tế | Đối chiếu ảnh tương ứng trong evidence; bổ sung kết quả sau khi tự kiểm tra |
| LK07 | CTA lịch thi đấu hoạt động | Nhấn nút ở trang chủ | Chưa xác nhận – cần đối chiếu thao tác và ảnh thực tế | Đối chiếu ảnh tương ứng trong evidence; bổ sung kết quả sau khi tự kiểm tra |

## E. Biểu mẫu

| ID | Mong đợi | Thao tác thử | Kết quả thực tế | Minh chứng / ghi chú |
|---|---|---|---|---|
| FM01 | Họ tên bắt buộc | Để trống, nhấn nút | Chưa xác nhận – cần đối chiếu thao tác và ảnh thực tế | Đối chiếu ảnh tương ứng trong evidence; bổ sung kết quả sau khi tự kiểm tra |
| FM02 | Email đúng định dạng | Nhập `abc123`, các trường khác hợp lệ | Chưa xác nhận – cần đối chiếu thao tác và ảnh thực tế | Đối chiếu ảnh tương ứng trong evidence; bổ sung kết quả sau khi tự kiểm tra |
| FM03 | Điện thoại 10–11 chữ số | Nhập `12345` | Chưa xác nhận – cần đối chiếu thao tác và ảnh thực tế | Đối chiếu ảnh tương ứng trong evidence; bổ sung kết quả sau khi tự kiểm tra |
| FM04 | Phải chọn vai trò | Bỏ trống vai trò | Chưa xác nhận – cần đối chiếu thao tác và ảnh thực tế | Đối chiếu ảnh tương ứng trong evidence; bổ sung kết quả sau khi tự kiểm tra |
| FM05 | Phải tích checkbox xác nhận | Bỏ tích checkbox | Chưa xác nhận – cần đối chiếu thao tác và ảnh thực tế | Đối chiếu ảnh tương ứng trong evidence; bổ sung kết quả sau khi tự kiểm tra |
| FM06 | Dữ liệu hợp lệ hiện thông báo demo | Điền đúng trường và nhấn nút | Chưa xác nhận – cần đối chiếu thao tác và ảnh thực tế | Đối chiếu ảnh tương ứng trong evidence; bổ sung kết quả sau khi tự kiểm tra |

**Giới hạn FM06:** thông báo chỉ xác nhận dữ liệu vượt qua validation trên trình duyệt. Không ghi đã gửi email hoặc lưu thông tin.

## F. Nội dung và tài nguyên trang

| ID | Mong đợi | Thao tác thử | Kết quả thực tế | Minh chứng / ghi chú |
|---|---|---|---|---|
| PG01 | Trang chủ có hero, tin và trận tiếp theo | Mở index.html | Chưa xác nhận – cần đối chiếu thao tác và ảnh thực tế | Đối chiếu ảnh tương ứng trong evidence; bổ sung kết quả sau khi tự kiểm tra |
| PG02 | Lịch có đủ ngày/trận/tỷ số/trạng thái | Mở schedule.html | Chưa xác nhận – cần đối chiếu thao tác và ảnh thực tế | Đối chiếu ảnh tương ứng trong evidence; bổ sung kết quả sau khi tự kiểm tra |
| PG03 | Đội hình có đủ bốn vị trí | Mở squad.html | Chưa xác nhận – cần đối chiếu thao tác và ảnh thực tế | Đối chiếu ảnh tương ứng trong evidence; bổ sung kết quả sau khi tự kiểm tra |
| PG04 | Form có trường bắt buộc | Mở contact.html | Chưa xác nhận – cần đối chiếu thao tác và ảnh thực tế | Đối chiếu ảnh tương ứng trong evidence; bổ sung kết quả sau khi tự kiểm tra |
| PG05 | CSS và ảnh nội bộ tải được trên cả bốn trang | Kiểm tra trang/Console/Network | Chưa xác nhận – cần đối chiếu thao tác và ảnh thực tế | Đối chiếu ảnh tương ứng trong evidence; bổ sung kết quả sau khi tự kiểm tra |

## G. GitHub và xuất bản

| ID | Mong đợi | Thao tác thử | Kết quả thực tế | Minh chứng / ghi chú |
|---|---|---|---|---|
| GH01 | Repository có đủ source và tài liệu | Mở GitHub Repository | Chưa xác nhận – cần đối chiếu thao tác và ảnh thực tế | Đối chiếu ảnh tương ứng trong evidence; bổ sung kết quả sau khi tự kiểm tra |
| GH02 | GitHub Pages mở được | Mở URL Pages do GitHub cung cấp | Chưa xác nhận – cần đối chiếu thao tác và ảnh thực tế | Đối chiếu ảnh tương ứng trong evidence; bổ sung kết quả sau khi tự kiểm tra |
| GH03 | URL khớp commit cuối đã nộp | Đối chiếu `git log -1 --oneline` với repository | Chưa xác nhận – cần đối chiếu thao tác và ảnh thực tế | Đối chiếu ảnh tương ứng trong evidence; bổ sung kết quả sau khi tự kiểm tra |

## H. Nhật ký sửa lỗi (điền sau khi tìm thấy lỗi thật)

| Ngày/giờ | ID test | Mô tả lỗi quan sát được | Nguyên nhân đã xác định | Cách sửa | Kết quả thử lại |
|---|---|---|---|---|---|
| Chưa ghi nhận | – | Chưa có nhật ký lỗi được xác nhận | – | Chưa có thao tác sửa lỗi được xác nhận | Chưa kiểm tra lại |

Không tự điền lỗi ví dụ như thể đã xảy ra. Khi phát hiện lỗi, thêm một dòng mới, lưu ảnh trước/sau sửa và thử lại đúng test case đó.
