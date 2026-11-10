# BÀI LÀM – HACKATHON 02

- **Mã đề:10** 01
- **Họ tên:Le Hồng Minh**
- **Lớp:**
- **Link repository:**
- **Hệ điều hành (Windows/macOS):windows**

## 4.2. Thao tác máy tính cơ bản bằng CLI

### Các lệnh đã chạy

```shell
pwd
ls -Recurse
mv .\ghi_chu_ban_giao.txt .\docs\
mkdir backup
Cp .\data\giao_dich_thang_10.xlsx .\backup\
rm .\temp_002.tmp

```

### Kết quả liệt kê toàn bộ dự án (Windows: Get-ChildItem -Recurse -Force; macOS: ls -aR)

```text
    Directory:
    C:\Users\LeMinhHP\Downloads\Luyen_Tap_10\Luyen_Tap_10\starter-kit\garage-minh-phat


Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
d-----        11/10/2026   9:19 PM                backup
d-----        11/10/2026   9:13 PM                data
d-----        11/10/2026   9:18 PM                docs
d-----        11/10/2026   9:11 PM                evidence
d-----        11/10/2026   9:13 PM                logs
d-----        11/10/2026   9:07 PM                web
-a----        11/10/2026   9:02 PM             71 .env
-a----        11/10/2026   9:02 PM           2411 bai_lam.md


    Directory: C:\Users\LeMinhHP\Downloads\Luyen_Tap_10\Luyen_Tap_10\starter-kit\garage-
    minh-phat\backup


Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
-a----        11/10/2026   9:02 PM           6211 giao_dich_thang_10.xlsx


    Directory: C:\Users\LeMinhHP\Downloads\Luyen_Tap_10\Luyen_Tap_10\starter-kit\garage-
    minh-phat\data


Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
-a----        11/10/2026   9:02 PM           6211 giao_dich_thang_10.xlsx


    Directory: C:\Users\LeMinhHP\Downloads\Luyen_Tap_10\Luyen_Tap_10\starter-kit\garage-
    minh-phat\docs


Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
-a----        11/10/2026   9:02 PM            154 ghi_chu_ban_giao.txt


    Directory: C:\Users\LeMinhHP\Downloads\Luyen_Tap_10\Luyen_Tap_10\starter-kit\garage-
    minh-phat\logs


Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
-a----        11/10/2026   9:02 PM            979 access.log


    Directory: C:\Users\LeMinhHP\Downloads\Luyen_Tap_10\Luyen_Tap_10\starter-kit\garage-
    minh-phat\web


Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
d-----        11/10/2026   9:07 PM                images
-a----        11/10/2026   9:02 PM            623 app.js
-a----        11/10/2026   9:02 PM            582 index.html
-a----         11/4/2026   4:11 PM            460 style.css


    Directory: C:\Users\LeMinhHP\Downloads\Luyen_Tap_10\Luyen_Tap_10\starter-kit\garage-
    minh-phat\web\images


Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
-a----         11/4/2026   4:11 PM           3101 logo-garage-minh-phat.png

```

## 4.3. Lọc log truy cập website

### a) Lệnh lọc các dòng status=500

```shell
sls "status=500" .\logs\access.log

```

### 2 dòng đầu tiên trong logs/loi_500.txt

```text
logs\access.log:4:2026-10-24 08:51:49 POST /images/garage.jpg status=500
logs\access.log:6:2026-10-26 09:05:15 POST /chi-nhanh status=500

```

### b) Lệnh đếm số dòng status=404 và kết quả

```shell
sls "status=404" .\logs\access.log | Measure-Object -Line

```

```text
Lines Words Characters Property
----- ----- ---------- --------
    5

```

## 4.4. Chạy script tong_hop (.ps1 hoặc .sh)

### Lệnh chạy (Windows: nếu dùng Phụ lục 2 thì ghi cả 2 lệnh)

```shell
.\tong_hop.ps1

```

### Nội dung file logs/tong_hop.txt

```text
=== BAO CAO SU CO WEBSITE ===

2026-10-22 08:37:23 GET /lich-bao-duong status=404
2026-10-27 09:12:28 GET /dich-vu status=404
2026-10-01 10:40:20 GET /phu-tung status=404
2026-10-06 11:15:25 GET /bang-gia status=404
2026-10-10 11:43:17 GET /images/garage.jpg status=404




Count    : 6
Average  : 
Sum      : 
Maximum  : 
Minimum  : 
Property : 


```

## 4.5. README.md và bảo vệ thông tin bí mật

> README.md, .gitignore và .env.example được chấm trực tiếp trên file ở gốc dự án. Đánh dấu `[x]` vào các mục đã làm để tự kiểm tra.

- [x] README.md: Heading 1, mô tả có **in đậm** và *in nghiêng*, bảng, code block, task list, blockquote
- [x] .gitignore có dòng `.env` (tên file đúng, không có đuôi .txt)
- [x] .env.example có đủ tên biến, giá trị để trống (tên file đúng, không có đuôi .txt)

## 4.6. Kiểm tra trang web bằng DevTools (F12) và báo cáo lỗi

### Bảng lỗi

| STT | Tab DevTools phát hiện lỗi | Tên file hoặc thông báo lỗi | Cách khắc phục |
| --- | --- | --- | --- |
| 1 |  |  |  |
| 2 |  |  |  |

> Ảnh chụp màn hình lưu trong thư mục `evidence/` (network.png, console.png).

### Báo cáo lỗi gửi trưởng nhóm

- **Context:** 
- **Expected:** 
- **Actual:** 
- **Log:** 

### Câu tìm kiếm Google

```text
(Ghi câu tìm kiếm vào đây – xoá dòng này)

```

## 4.7. Excel

> Phần Excel được chấm trực tiếp trên file `data/giao_dich_thang_10.xlsx`, không cần ghi vào đây.
