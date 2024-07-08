# Profile Github V2

Dự án này hiển thị hồ sơ GitHub, kho lưu trữ code cùng với các liên kết mạng xã hội trên một trang web đẹp mắt. Nó sử dụng GitHub API để lấy và hiển thị hồ sơ GitHub và các kho lưu trữ của bạn, và bao gồm các biểu tượng mạng xã hội để dễ dàng truy cập vào các hồ sơ khác của bạn.

## Tính Năng

- Hiển thị thông tin hồ sơ GitHub (ảnh đại diện, tên, tiểu sử, số lượng người theo dõi, số lượng đang theo dõi)
- Hiển thị danh sách các kho lưu trữ code với chi tiết (tên, mô tả, số sao, số nhánh)
- Bao gồm các biểu tượng mạng xã hội liên kết đến các hồ sơ của bạn trên Facebook, Instagram, Discord, YouTube, Spotify, Steam, và Epic Games
- Hình nền động đẹp mắt sử dụng Particles.js
- Thiết kế đáp ứng sử dụng Skeleton.css

## Demo

Bạn có thể xem bản demo trực tuyến của dự án [tại đây](#).

## Công Nghệ Sử Dụng

- HTML5
- CSS3
- JavaScript
- [Skeleton.css](http://getskeleton.com/)
- [Font Awesome](https://fontawesome.com/)
- [Particles.js](https://vincentgarreau.com/particles.js/)

## Cài Đặt

1. **Clone kho lưu trữ:**
   ```bash
   git clone https://github.com/vngctcreative/vngctcreative.github.io.git
   ```

2. **Điều hướng đến thư mục dự án:**
   ```bash
   cd https://github.com/vngctcreative/vngctcreative.github.io.git
   ```

3. **Mở `index.html` trong trình duyệt web yêu thích của bạn:**

   Chỉ cần nhấp đúp vào tệp `index.html` hoặc mở nó bằng tùy chọn mở tệp của trình duyệt của bạn.

## Cách Sử Dụng

1. **Cập Nhật Tên Người Dùng GitHub:**

   Trong tệp `index.js`, thay thế biến `your-github-username` bằng tên người dùng GitHub của bạn.
   ```javascript
   const username = 'your-github-username';
   ```

2. **Cập Nhật Các Liên Kết Mạng Xã Hội:**

   Trong tệp `index.js`, cập nhật các liên kết mạng xã hội với các hồ sơ của riêng bạn.
   ```javascript
   <a href="https://facebook.com/yourprofile" target="_blank"><i class="fab fa-facebook"></i></a>
   <a href="https://instagram.com/yourprofile" target="_blank"><i class="fab fa-instagram"></i></a>
   <a href="https://discord.com/invite/yourprofile" target="_blank"><i class="fab fa-discord"></i></a>
   <a href="https://youtube.com/yourprofile" target="_blank"><i class="fab fa-youtube"></i></a>
   <a href="https://spotify.com/yourprofile" target="_blank"><i class="fab fa-spotify"></i></a>
   <a href="https://steamcommunity.com/id/yourprofile" target="_blank"><i class="fab fa-steam"></i></a>
   <a href="https://epicgames.com/id/yourprofile" target="_blank"><i class="fab fa-epic-games"></i></a>
   ```

## Cấu Trúc Tệp

```
.
├── index.html          # Tệp HTML chính
├── index.js            # Tệp JavaScript để lấy và hiển thị hồ sơ và kho lưu trữ GitHub
├── style.css           # Tệp CSS để tạo kiểu cho trang
├── README.md           # Tài liệu dự án
```
