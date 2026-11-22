# HANOI WARRIORS FC

**Website câu lạc bộ bóng đá – Bài tập lớn A3**  
**Học phần:** Thiết kế web và triển khai HTPM – Đại học Đại Nam  
**Sinh viên:** Phan Anh Tài · **Mã sinh viên:** 2071020166 · **Lớp:** 20-04  
**Giảng viên:** ThS. Lê Thái Bảo · **Năm:** 2026

## 1. Giới thiệu

Hanoi Warriors FC là câu lạc bộ giả lập được dùng làm chủ đề xây dựng website tĩnh nhiều trang. Dự án thực hành HTML5 ngữ nghĩa, CSS Grid/Flexbox, thiết kế responsive, JavaScript phía trình duyệt và quản lý mã nguồn bằng Git.

Website có bốn trang: trang chủ, lịch thi đấu, đội hình và liên hệ. Tông màu chính là navy – đỏ – vàng. Tên cầu thủ, đối thủ, lịch, tỷ số và tin tức đều là dữ liệu minh họa, không phải thông tin chính thức của một câu lạc bộ có thật.

## 2. Chức năng và công nghệ

- `index.html`: giới thiệu câu lạc bộ, tin nổi bật và trận tiếp theo.
- `schedule.html`: lịch thi đấu và kết quả mẫu.
- `squad.html`: cầu thủ chia theo thủ môn, hậu vệ, tiền vệ và tiền đạo.
- `contact.html`: biểu mẫu liên hệ/đăng ký demo.
- `style.css`: màu sắc, typography, Grid, Flexbox và Media Queries.
- `script.js`: kiểm tra biểu mẫu và hiển thị thông báo demo ở trình duyệt.
- `assets/images/`: logo và hình minh họa SVG nội bộ.

Biểu mẫu chỉ xác thực dữ liệu trên trình duyệt; không gửi email, không lưu dữ liệu và không kết nối máy chủ. Không dùng biểu mẫu này để thu thập thông tin cá nhân thật.

## 3. Chạy website trên máy tính

1. Giải nén gói dự án.
2. Mở thư mục chứa `index.html` bằng Visual Studio Code.
3. Mở `index.html` trực tiếp trên trình duyệt hoặc chạy bằng tiện ích Live Server.
4. Dùng menu để mở lần lượt bốn trang.

Dự án không cần cài package hoặc backend.

## 4. Thiết kế và responsive

Bố cục desktop dùng vùng nội dung chính kết hợp sidebar; trên màn hình hẹp, các vùng chuyển thành một cột. CSS hiện có các breakpoint 960px, 720px và 500px. Quyết định về màu sắc, font, tương phản, wireframe và breakpoint được trình bày trong `docs/DESIGN_DECISIONS.md`; phân tích yêu cầu nằm trong `docs/TC1_REQUIREMENTS.md`.

## 5. Cấu trúc gói bàn giao

```text
Hanoi_Warriors_FC_A3/
├── index.html
├── schedule.html
├── squad.html
├── contact.html
├── style.css
├── script.js
├── AI_LOG.md
├── README.md
├── .gitignore
├── .nojekyll
├── assets/
│   └── images/
├── docs/
│   ├── REPORT_A3.docx
│   ├── REPORT_A3.md
│   ├── TC1_REQUIREMENTS.md
│   ├── DESIGN_DECISIONS.md
│   ├── TEST_CASES.md
│   ├── DEMO_3_MINUTES.md
│   ├── GITHUB_PAGES.md
│   └── wireframes/
└── evidence/
    ├── EVIDENCE_REGISTER.md
    ├── README.md
    ├── TC1/ ... TC7/
```

## 6. Tài liệu

- `docs/REPORT_A3.docx`: báo cáo chính để nộp.
- `docs/REPORT_A3.md`: bản báo cáo dạng Markdown.
- `docs/TC1_REQUIREMENTS.md`: bốn câu hỏi, phạm vi, Acceptance Criteria và đánh giá phương án.
- `docs/DESIGN_DECISIONS.md`: wireframe, bảng màu, typography và breakpoint.
- `docs/TEST_CASES.md`: kế hoạch và kết quả kiểm thử cần ghi theo thao tác thực tế.
- `docs/DEMO_3_MINUTES.md`: kịch bản demo và câu hỏi phản biện.
- `docs/GITHUB_PAGES.md`: hướng dẫn tạo repository và xuất bản website.
- `evidence/EVIDENCE_REGISTER.md`: danh mục ảnh minh chứng hiện có và phần còn cần bổ sung.
- `AI_LOG.md`: khai báo việc sử dụng ChatGPT trong quá trình thực hiện.

## 7. Kiểm thử và trạng thái triển khai

Các ảnh trong `evidence/` được giữ theo nhóm tiêu chí. Việc có tệp ảnh không tự động xác nhận test case đã đạt; kết quả trong `docs/TEST_CASES.md` được để ở trạng thái chưa xác nhận cho đến khi người thực hiện đối chiếu thao tác và ảnh thật.

Repository và GitHub Pages chưa được xác nhận đã xuất bản trong gói này. Sau khi tạo repository, tải **nội dung bên trong thư mục dự án** lên thư mục gốc repository (nơi có `index.html`), push lên nhánh `main`, rồi vào **Settings → Pages → Deploy from a branch → main → /(root)**. Chỉ ghi URL Pages sau khi mở thử thành công.

## 8. Giới hạn và hướng phát triển

Đây là website tĩnh, chưa có đăng nhập, phân quyền, CMS, cơ sở dữ liệu, API lịch thi đấu, đặt vé hoặc thanh toán. Nếu phát triển thành sản phẩm thực tế, cần bổ sung backend, lưu trữ dữ liệu, xác thực và cơ chế bảo vệ thông tin phù hợp.
