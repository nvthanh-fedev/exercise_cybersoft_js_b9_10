function NhanVien() {
  this.tknv = "";
  this.name = "";
  this.email = "";
  this.password = "";
  this.ngayLam = "";
  this.luongCB = "";
  this.chucVu = "";
  this.gioLam = "";
}

NhanVien.prototype.tongLuong = function () {
  var tongLuong = 0;

  console.log("luong cb", this.luongCB);
  if (this.chucVu === "Sếp") {
    tongLuong = this.luongCB * 3;
  } else if (this.chucVu === "Trưởng phòng") {
    tongLuong = this.luongCB * 2;
  } else if (this.chucVu === "Nhân viên") {
    tongLuong = this.luongCB;
  }

  return tongLuong;
};

NhanVien.prototype.xepLoai = function () {
  var htmlString = "";

  if (this.gioLam < 160) {
    htmlString = "Trung bình";
  } else if (this.gioLam < 176) {
    htmlString = "Khá";
  } else if (this.gioLam < 192) {
    htmlString = "Giỏi";
  } else if (this.gioLam >= 192) {
    htmlString = "Xuất sắc";
  }

  return htmlString;
};
