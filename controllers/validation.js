function validation() {
  var valid = true;
  valid = validationTknv("tknv", "tbTKNV");
  valid = valid & validationTen("name", "tbTen");
  valid = valid & validationEmail("email", "tbEmail");
  valid = valid & validationMatKhau("password", "tbMatKhau");
  valid = valid & validationLuongCb("luongCB", "tbLuongCB");
  valid = valid & validationGioLam("gioLam", "tbGiolam");
  valid = valid & validationNgay("datepicker", "tbNgay");

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
  console.log("🚀 ~ file: validation.js:29 ~ validationTknv ~ tknv:", tknv);
  document.getElementById(idTb).classList.remove("d-block");

  if (tknv == null || tknv == "") {
    return showError(idTb, "Tài khoản nhân viên không được để trống!");
  } else if (kiemTraTknvTonTai(tknv)) {
    return showError(idTb, "Tài khoản nhân viên đã tồn tại!");
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
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

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
  console.log(
    "🚀 ~ file: validation.js:79 ~ validationLuongCb ~ luongCB:",
    luongCB
  );

  console.log(typeof luongCB);
  document.getElementById(idTb).classList.remove("d-block");

  if (luongCB == "" || luongCB == null) {
    console.log("luong cb sai 1");
    return showError(idTb, "Lương cơ bản của nhân viên không được để trống!");
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

  regex = /^(8[0-9]|9[0-9]|1[0-9]{2}|200)$/;

  if (gioLam.trim() === "") {
    return showError(idTb, "Giờ làm của nhân viên không được để trống!");
  } else if (!regex.test(gioLam)) {
    return showError(idTb, "Giờ làm phải nằm trong khoảng 80 - 200 giờ!");
  }
  return true;
}

function validationNgay(idValue, idTb) {
  var date = document.getElementById(idValue).value;
  document.getElementById(idTb).classList.remove("d-block");

  if (date.trim() === "") {
    return showError(idTb, `Ngày vào làm không được để trống!`);
  }

  return true;
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
