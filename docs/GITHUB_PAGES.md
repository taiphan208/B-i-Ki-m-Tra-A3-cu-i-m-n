# GIT, GITHUB VÀ GITHUB PAGES

## Trạng thái

Tên repository dự kiến: `hanoi-warriors-fc`. Tài khoản GitHub được dùng làm ví dụ: `taiphan208`. Repository và URL Pages **chưa được xác nhận đã tạo/xuất bản** trong bản tài liệu này. Không ghi URL dự kiến như một trang đang hoạt động.

## 1. Kiểm tra Git và cấu hình danh tính

Mở Terminal tại thư mục dự án:

```bash
git --version
git config --global user.name "Phan Anh Tài"
git config --global user.email "EMAIL_GITHUB_CUA_BAN"
```

Thay email bằng email GitHub mà người học sử dụng; không đưa mật khẩu hoặc token vào file dự án.

## 2. Tạo repository trên GitHub

1. Mở GitHub và tạo repository mới tên `hanoi-warriors-fc`.
2. Chọn Public nếu cần giảng viên truy cập.
3. Nếu source trên máy đã có README, không khởi tạo README trùng lặp trên GitHub.

## 3. Khởi tạo và commit

```bash
git init
git branch -M main
git status
git add .
git commit -m "A3: Revise Hanoi Warriors FC website"
```

## 4. Kết nối và push

```bash
git remote add origin https://github.com/taiphan208/hanoi-warriors-fc.git
git remote -v
git push -u origin main
```

Nếu repository được đặt tên khác, sửa URL tương ứng. Nếu `origin` đã tồn tại, dùng `git remote -v` để kiểm tra; không thêm remote lần thứ hai.

## 5. Bật GitHub Pages

1. Mở repository → **Settings → Pages**.
2. Trong **Build and deployment**, chọn **Deploy from a branch**.
3. Chọn branch `main`, folder `/(root)` rồi Save.
4. Chờ GitHub hoàn thành deployment.
5. Mở URL GitHub Pages hiển thị trên trang Settings → Pages và kiểm tra cả bốn trang.

URL dự kiến nếu repository đúng tên: `https://taiphan208.github.io/hanoi-warriors-fc/`. Đây chỉ là cấu trúc URL dự kiến; chỉ xác nhận sau khi mở thành công.

## 6. Cập nhật, ghi commit và đối chiếu

Sau mỗi lần sửa:

```bash
git status
git add .
git commit -m "Describe the change"
git push origin main
git log -1 --oneline
```

Ghi commit cuối vào `Submission/Commit_ID.txt` và URL thực tế vào `Submission/Website_URL.txt`. Đối chiếu mã commit với phiên bản source nộp. Không tạo hoặc ghi commit ID/URL giả định.
