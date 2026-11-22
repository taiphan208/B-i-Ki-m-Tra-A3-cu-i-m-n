# KỊCH BẢN DEMO A3 – 3 PHÚT

**Đề tài:** Hanoi Warriors FC – Website câu lạc bộ bóng đá tĩnh bằng HTML5/CSS3  
**Lưu ý:** Đây là kịch bản luyện tập. Chỉ đánh dấu đã hoàn thành sau khi người học trực tiếp trình diễn/quay video.

## 1. Phân bổ thời gian

| Thời gian | Nội dung | Thao tác cần trình diễn |
|---|---|---|
| 0:00–0:25 | Giới thiệu dự án | Nêu đối tượng, mục tiêu và phạm vi website tĩnh |
| 0:25–1:20 | Trình diễn 4 trang | Mở trang chủ, lịch thi đấu, đội hình, liên hệ; chỉ ra điều hướng và nội dung |
| 1:20–1:55 | Responsive và form | Dùng DevTools đổi 375px/768px; thử một tình huống form không hợp lệ và một tình huống hợp lệ |
| 1:55–2:25 | Giải thích kỹ thuật | Chỉ ra semantic HTML, Grid, Flexbox, Media Queries, `reportValidity()` và `preventDefault()` |
| 2:25–2:50 | GitHub và bàn giao | Mở repository, commit và Pages nếu đã triển khai; nêu README/AI_LOG |
| 2:50–3:00 | Kết luận | Nêu hạn chế form tĩnh và hướng phát triển |

## 2. Lời thoại gợi ý

“Kính thưa thầy và các bạn, em trình bày bài tập lớn A3 với đề tài xây dựng website câu lạc bộ bóng đá Hanoi Warriors FC bằng HTML5 và CSS3. Đây là câu lạc bộ giả lập, dữ liệu cầu thủ và lịch đấu là dữ liệu minh họa.

Website gồm bốn trang: Trang chủ, Lịch thi đấu, Đội hình và Liên hệ. Em chọn bố cục nhiều trang vì mỗi nhóm nội dung có mục đích riêng, giúp người xem truy cập trực tiếp và phù hợp phạm vi website tĩnh của học phần.

Về giao diện, em dùng màu navy, đỏ, vàng; Grid để chia cột nội dung; Flexbox để căn chỉnh header và các nhóm điều hướng; Media Queries tại 960px, 720px và 500px để chuyển bố cục theo màn hình.

Form liên hệ kiểm tra dữ liệu ở trình duyệt. `reportValidity()` yêu cầu trình duyệt kiểm tra các quy tắc HTML5; `preventDefault()` ngăn gửi form mặc định vì dự án chưa có backend. Thông báo thành công chỉ xác nhận dữ liệu hợp lệ, không có nghĩa đã gửi hoặc lưu dữ liệu.

Em sử dụng Git để quản lý phiên bản và dự kiến xuất bản bằng GitHub Pages. Những nội dung chưa triển khai hoặc chưa kiểm thử được em ghi rõ trong báo cáo. Em xin cảm ơn thầy và các bạn.”

## 3. Câu hỏi phản biện và gợi ý trả lời

1. **Vì sao chọn website tĩnh nhiều trang?**  Vì bốn nhóm nội dung độc lập; mỗi trang có URL rõ; không cần backend và phù hợp yêu cầu HTML5/CSS3 tĩnh.
2. **Vì sao không chọn CMS?**  CMS cần backend/cơ sở dữ liệu và yêu cầu vận hành, vượt phạm vi A3; có thể là hướng phát triển nếu cần quản trị nội dung thực tế.
3. **Grid khác Flexbox thế nào?**  Grid phù hợp bố cục hai chiều theo hàng/cột; Flexbox phù hợp căn chỉnh theo một chiều. Dự án dùng cả hai tùy thành phần.
4. **Vì sao có `minmax(0, 1fr)`?**  Số 0 cho phép track Grid co nhỏ hơn kích thước min-content; điều này hạn chế một nội dung dài đẩy rộng toàn layout.
5. **Breakpoint 720px được chọn vì sao?**  Đây là ngưỡng thiết kế tại đó hai cột và menu ngang không còn thoải mái; layout được chuyển sang một cột.
6. **`reportValidity()` làm gì?**  Kích hoạt kiểm tra các ràng buộc HTML5 và hiển thị thông báo xác thực của trình duyệt nếu không hợp lệ.
7. **Tại sao dùng `preventDefault()`?**  Ngăn hành vi submit mặc định vì form demo chưa có endpoint; JavaScript chỉ hiển thị kết quả kiểm tra cục bộ.
8. **Git commit là gì?**  Một bản ghi trạng thái mã nguồn tại một thời điểm, có mã định danh và thông điệp mô tả thay đổi.
9. **GitHub Pages làm được gì và không làm được gì?**  Nó xuất bản website tĩnh; không tự cung cấp backend/cơ sở dữ liệu cho form hoặc đăng nhập.
10. **Dữ liệu trên trang có thật không?**  Không. Câu lạc bộ, cầu thủ, đối thủ và trận đấu được ghi rõ là dữ liệu giả lập phục vụ bài tập.

## 4. Checklist trước khi demo

- [ ] Mở thử cả bốn trang trước buổi demo.
- [ ] Chuẩn bị DevTools ở 375px và 768px.
- [ ] Chuẩn bị dữ liệu form kiểm thử, không dùng dữ liệu cá nhân thật.
- [ ] Nếu có Repository/Pages, mở sẵn URL và commit cuối.
- [ ] Quay video hoặc chụp ảnh demo sau khi tự trình diễn.
