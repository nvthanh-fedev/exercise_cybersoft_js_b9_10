# Javascript - Cybersoft Academy

Bài tập JS 7 - 8 - Xử lý mảng

## Yêu cầu bài toán

https://apicrm.cybersoft.edu.vn/files/30-01-2023-10-45-20-baitap_js_buoi_7-8.pdf

## Tác giả

- [@nvthanh-fedev](https://www.github.com/nvthanh-fedev)

  ![Logo](https://cybersoft.edu.vn/wp-content/uploads/2017/04/MAX-OP1.png)

## Link demo

exercise.js.b9.cybersoft.academy.nguyenvanthanh.bc43.surge.sh

## Mô tả bài tập

Cho người dùng nhập vào các số nguyên và lưu trữ trong mảng.
Thiết kế layout cho người dùng chọn thực hiện các chức năng bên dưới:

1. In ra table danh sách nhân viên
2. Thêm nhân viên mới
3. Tạo đối tượng nhân viên với thông tin lấy từ form người dùng nhập vào.
   Đối tượng nhân viên bao gồm các thuộc tính sau:
   +Tài khoản
   +Họ tên
   +Email
   +Mật khẩu
   +Ngày làm
   +Lương cơ bản
   +Chức vụ gồm: Giám đốc, Trưởng Phòng, Nhân Viên
   +Giờ làm trong tháng
   +Tổng lương
   +Loại nhân viên
4. Validation

- Tài khoản tối đa 4 - 6 ký số, không để trống
- Tên nhân viên phải là chữ, không để trống
- Email phải đúng định dạng, không để trống
- mật Khẩu từ 6-10 ký tự (chứa ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt), không để trống
- Ngày làm không để trống, định dạng mm/dd/yyyy
- Lương cơ bản 1 000 000 - 20 000 000, không để trống
- Chức vụ phải chọn chức vụ hợp lệ (Giám đốc, Trưởng Phòng, Nhân Viên)
- Số giờ làm trong tháng 80 - 200 giờ, không để trống

5. Xây dựng phương thức tính tổng lương cho đối tượng nhân viên
   +nếu chức vụ là giám đốc: tổng lương = lương cơ bản _ 3
   +nếu chức vụ là trưởng phòng: tổng lương = lương cơ bản _ 2
   +nếu chức vụ là nhân viên: tổng lương = lương cơ bản \* 1
6. Xây dựng phương thức xếp loại cho đối tượng nhân viên:
   +nếu nhân viên có giờ làm trên 192h (>=192): nhân viên xuất sắc
   +nếu nhân viên có giờ làm trên 176h (>=176): nhân viên giỏi
   +nếu nhân viên có giờ làm trên 160h (>=160): nhân viên khá
   +nếu nhân viên có giờ làm dưới 160h: nhân viên trung bình
7. Xóa nhân viên
8. Cập nhật nhân viên (có validation)
9. Tìm Nhân Viên theo loại (xuất săc, giỏi, khá...) và hiển thị
