# TC2 – THIẾT KẾ, WIREFRAME VÀ LÝ DO BỐ TRÍ

## 1. Nguyên tắc thiết kế

Giao diện dùng phong cách thể thao hiện đại, tương phản rõ, ưu tiên thông tin mà cổ động viên thường tìm: trận tiếp theo, tin tức, lịch và đội hình. Header và menu dùng chung trên bốn trang để người xem không phải học lại cách điều hướng.

## 2. Wireframe Desktop

Tệp hình: `wireframes/desktop-wireframe.svg` (bản PNG xem nhanh cùng tên).

Bố cục desktop gồm:

1. Header chứa logo và tên câu lạc bộ.
2. Navigation nằm trong header, hiển thị ngang để chuyển trang bằng một lần nhấn.
3. Hero/banner ngay đầu trang tạo nhận diện, nêu thông điệp và đặt CTA.
4. Main Content ở cột chính, hiển thị tin tức và trận tiếp theo theo thứ tự ưu tiên.
5. Sidebar ở cột phải, chứa giới thiệu/giá trị CLB; thông tin này có ích nhưng ít ưu tiên hơn lịch và nội dung chính.
6. Footer đặt ở cuối để chứa tên dự án và liên kết lên đầu trang.

**Lý do:** Màn hình rộng cho phép trình bày Main và Sidebar song song. Người dùng có thể quét tin và lịch ở vùng chính trong khi thông tin phụ không chiếm mất dòng đọc. Hero giúp xác định chủ đề trước khi vào nội dung.

## 3. Wireframe Mobile

Tệp hình: `wireframes/mobile-wireframe.svg` (bản PNG xem nhanh cùng tên).

Bố cục mobile chuyển thành một cột: logo; menu; banner; nội dung chính; các thẻ tin; trận tiếp theo; sidebar; footer. Các thẻ và trường form xếp dọc. Bảng lịch giữ độ rộng nội dung và cuộn ngang bên trong vùng bảng, không làm toàn trang tràn ngang.

**Lý do:** Chiều ngang điện thoại hạn chế. Xếp một cột duy trì thứ tự đọc tự nhiên, tránh chữ và nút bị ép quá hẹp. Sidebar chuyển xuống dưới nội dung chính vì nó có mức ưu tiên thấp hơn.

## 4. Quy chuẩn màu sắc

| Vai trò | Màu | HEX | Cách dùng |
|---|---|---|---|
| Navy | Xanh đậm | `#101A32` | Header, nền phụ, tiêu đề |
| Red | Đỏ | `#D92736` | CTA và điểm nhấn; chữ trắng trên màu này |
| Gold | Vàng | `#E9B949` | Điểm nhấn trên nền navy; không dùng làm chữ nhỏ trên nền đỏ |
| Paper | Xám rất nhạt | `#F4F6F9` | Nền tổng thể |
| White | Trắng | `#FFFFFF` | Card và nội dung |
| Ink | Xanh đen | `#202B40` | Nội dung chính |
| Muted | Xám xanh đậm | `#536075` | Mô tả và thông tin phụ |

## 5. Kiểm tra tương phản màu

Tỷ lệ được tính theo công thức độ chói tương đối của WCAG. Mốc áp dụng cho chữ thường là 4.5:1.

| Cặp chữ/nền | Tỷ lệ tương phản | Kết luận |
|---|---:|---|
| Muted `#536075` / Paper `#F4F6F9` | 5.88:1 | Đạt AA |
| Muted `#536075` / White `#FFFFFF` | 6.37:1 | Đạt AA |
| White `#FFFFFF` / Red `#D92736` | 4.89:1 | Đạt AA |
| White `#FFFFFF` / Navy `#101A32` | 17.27:1 | Đạt AA |
| Gold `#E9B949` / Navy `#101A32` | 9.46:1 | Đạt AA |
| Dark gold `#79530A` / Pale gold `#FFF4D9` | 6.28:1 | Đạt AA |

Ghi chú: tỷ lệ được tính cho các cặp màu cụ thể nêu trong bảng; không có nghĩa mọi tổ hợp màu tùy ý trong trang đều tự động đạt chuẩn. Các trạng thái màu và vùng nội dung khác cần kiểm tra khi thay đổi theme.

## 6. Kiểu chữ và khả năng đọc

Dùng `Arial, Helvetica, sans-serif` cho cả văn bản và tiêu đề để tránh phụ thuộc font Impact/Arial Narrow có thể thiếu hoặc hiển thị không nhất quán một số glyph tiếng Việt có dấu. Cỡ chữ phụ được nâng tối thiểu 12px; nội dung chính đặt khoảng 14–16px; tiêu đề dùng `clamp()` để co giãn theo viewport.

## 7. Breakpoint và lý do

| Breakpoint | Thay đổi | Lý do |
|---|---|---|
| 960px | Giảm độ rộng sidebar, chuyển thẻ cầu thủ từ 3 xuống 2 cột | Giữ nội dung đọc được ở tablet và cửa sổ trình duyệt hẹp |
| 720px | Main/Sidebar chuyển một cột; header xếp dọc; menu chuyển xuống dưới logo | Đây là điểm bố cục hai cột không còn đủ không gian thoải mái |
| 500px | Tin tức, sidebar, thẻ cầu thủ và form chuyển hẳn một cột; giảm padding | Tránh ép các thẻ và trường nhập liệu trên điện thoại nhỏ |

Các breakpoint là quyết định thiết kế của dự án, không phải giới hạn thiết bị bắt buộc. Cần thử trên trình duyệt ở các độ rộng đại diện.

## 8. Kết luận TC2

Wireframe desktop/mobile được tạo trước mã nguồn và lưu trong `docs/wireframes/`. Bố cục, màu sắc, font và breakpoint có lý do gắn với hành vi người dùng. Khi thay đổi kích thước, nội dung chính được giữ thứ tự; bảng lịch được cuộn trong wrapper riêng để hạn chế tràn ngang toàn trang.