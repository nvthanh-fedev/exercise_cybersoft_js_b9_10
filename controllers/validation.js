function validation() {
  var valid = true;
  valid = validationTknv("tknv", "tbTKNV");
  valid = valid & validationTen("name", "tbTen");
  valid = valid & validationEmail("email", "tbEmail");
  valid = valid & validationMatKhau("password", "tbMatKhau");
  valid = valid & validationLuongCb("luongCB", "tbLuongCB");
  valid = valid & validationGioLam("gioLam", "tbGiolam");
  valid = valid & validationNgay();

  if (valid) {
    return true;
  }
  return false;
}

function validationCapNhat() {
  var valid = true;
  valid = validationTknvRongVaChieuDai("tknv", "tbTKNV");
  valid = valid & validationTen("name", "tbTen");
  valid = valid & validationEmail("email", "tbEmail");
  valid = valid & validationMatKhau("password", "tbMatKhau");
  valid = valid & validationLuongCb("luongCB", "tbLuongCB");
  valid = valid & validationGioLam("gioLam", "tbGiolam");
  valid = valid & validationNgay();

  if (valid) {
    return true;
  }
  return false;
}

function kiemTraTknvTonTai(tknv) {
  for (var i = 0; i < mangNhanVien.length; i++) {
    if (tknv === +mangNhanVien[i].tknv) {
      return true;
    }
  }

  return false;
}

function validationTknv(idValue, idTb) {
  var tknv = +document.getElementById(idValue).value;
  document.getElementById(idTb).classList.remove("d-block");

  var regex = /^\d{4,6}$/;

  if (tknv == null || tknv == "") {
    return showError(idTb, "Tài khoản nhân viên không được để trống!");
  } else if (kiemTraTknvTonTai(tknv)) {
    return showError(idTb, "Tài khoản nhân viên đã tồn tại!");
  } else if (!regex.test(tknv)) {
    return showError(idTb, "Tài khoản nhân viên có 4 đến 6 ký số!");
  }
  return true;
}

function validationTknvRongVaChieuDai(idValue, idTb) {
  var tknv = +document.getElementById(idValue).value;
  document.getElementById(idTb).classList.remove("d-block");

  if (tknv == null || tknv == "") {
    return showError(idTb, "Tài khoản nhân viên không được để trống!");
  } else if (tknv.length < 4 || tknv.length > 6) {
    return showError(idTb, "Tài khoản nhân viên có 4 đến 6 ký tự!");
  }
  return true;
}

function validationTen(idValue, idTb) {
  var name = document.getElementById(idValue).value;
  document.getElementById(idTb).classList.remove("d-block");

  var regName = /^[\p{L}\p{M}\s.'-]+$/u;

  if (name.trim() === "") {
    return showError(idTb, "Tên nhân viên không được để trống!");
  } else if (!regName.test(name)) {
    return showError(idTb, "Tên nhân viên phải là ký tự chữ! ");
  }
  return true;
}

function validationEmail(idValue, idTb) {
  var email = document.getElementById(idValue).value;
  document.getElementById(idTb).classList.remove("d-block");

  var validRegex =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  if (email.trim() === "") {
    return showError(idTb, "Email nhân viên không được để trống!");
  } else if (!validRegex.test(email)) {
    return showError(idTb, "Sai định dạng email!");
  }
  return true;
}

function validationMatKhau(idValue, idTb) {
  var password = document.getElementById(idValue).value;
  document.getElementById(idTb).classList.remove("d-block");

  regex =
    /^(?=.*\d)(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])[^\s]{6,10}$/;

  if (password.trim() === "") {
    return showError(idTb, "Mật khẩu nhân viên không được để trống!");
  } else if (!regex.test(password)) {
    return showError(
      idTb,
      "Mật khẩu phải có từ 6 đến 10 ký tự và chứa ít nhất một ký tự số, một ký tự viết hoa và một ký tự đặc biệt."
    );
  }

  return true;
}

function validationLuongCb(idValue, idTb) {
  var luongCB = +document.getElementById(idValue).value;

  var regexNumber = /^[0-9]+$/;

  document.getElementById(idTb).classList.remove("d-block");

  if (luongCB == "" || luongCB == null) {
    return showError(idTb, "Lương cơ bản của nhân viên không được để trống!");
  } else if (!regexNumber.test(luongCB)) {
    return showError(idTb, "Lương cơ bản sai định dạng số!");
  } else if (luongCB < 1000000 || luongCB > 20000000) {
    return showError(
      idTb,
      "Lương cơ bản phải nằm trong khoảng từ 1 000 000 đến 20 000 000!"
    );
  }

  return true;
}

function validationGioLam(idValue, idTb) {
  var gioLam = document.getElementById(idValue).value;
  document.getElementById(idTb).classList.remove("d-block");

  regex = /^[0-9.]+$/;

  if (gioLam.trim() === "") {
    return showError(idTb, "Giờ làm của nhân viên không được để trống!");
  } else if (!regex.test(gioLam)) {
    return showError(idTb, "Giờ làm không đúng định dạng!");
  } else if (gioLam < 80 || gioLam > 200)
    return showError(idTb, "Giờ làm phải nằm trong khoảng 80 - 200 giờ!");
  return true;
}

function validationNgay() {
  // Get the selected date value
  var date = document.getElementById("datepicker").value;
  document.getElementById("tb-ngay").classList.remove("d-block");

  // Chạy vòng lặp thông qua từng định dạng ngày tháng để xác nhận tính hợp lệ.
  if (moment(date, "MM/DD/YYYY", true).isValid()) {
    return true;
  }

  // Trả về false nếu không hợp lệ.
  return showError("tb-ngay", "Sai định dạng MM/DD/YYYY!");
}

function dayToString(date) {
  var month = date.getMonth() + 1;
  var day = date.getDate();
  var year = date.getFullYear();
  return `${month.toString().padStart(2, "0")}/${day
    .toString()
    .padStart(2, "0")}/${year.toString()}`;
}

function showError(idTb, message) {
  document.getElementById(idTb).classList.add("d-block");
  document.getElementById(idTb).innerHTML = message;
  return false;
}

function showMessage(idTb, message) {
  document.getElementById(idTb).classList.add("d-block");
  document.getElementById(idTb).innerHTML = message;
  return true;
}
