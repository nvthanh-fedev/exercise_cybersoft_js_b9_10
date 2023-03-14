var sapXepMangTheoTknvGiamDan = false;

var mangNhanVien = [];
for (var i = 1; i <= 10; i++) {
  var nhanVien = new NhanVien();

  nhanVien.tknv = 10000 + i;
  nhanVien.name = "Nguyen Van " + String.fromCharCode(64 + i);
  nhanVien.email = "nguyenvan" + String.fromCharCode(64 + i) + "@gmail.com";
  nhanVien.password = "Nvt@123";
  nhanVien.ngayLam = randomPastDate();
  nhanVien.luongCB = getRandomInt(1000000, 20000000);
  nhanVien.chucVu = randomChucVu();
  nhanVien.gioLam = Math.floor(Math.random() * (200 - 80 + 1)) + 80;
  nhanVien.tongLuong = nhanVien.tongLuong();
  nhanVien.xepLoai = nhanVien.xepLoai();
  mangNhanVien.push(nhanVien);

  renderTableVaLuuLocal(mangNhanVien);
}

function getRandomInt(min, max) {
  min = Math.ceil(min / 100000) * 100000;
  max = Math.floor(max / 100000) * 100000;
  return Math.floor(Math.random() * ((max - min) / 100000 + 1)) * 100000 + min;
}

function randomPastDate() {
  const currentDate = moment(); // Lấy thời gian hiện tại.
  const randomPastDays = Math.floor(Math.random() * 365); // Sinh số ngày ngẫu nhiên trong quá khứ từ 0 đến 365.
  const pastDate = currentDate.subtract(randomPastDays, "days"); // Trừ số ngày ngẫu nhiên từ thời gian hiện tại.
  const formattedDate = pastDate.format("MM/DD/YYYY"); // Định dạng ngày tháng kết quả theo định dạng MM/DD/YYYY.
  return formattedDate; // Trả về giá trị đã được định dạng.
}

// Sử dụng hàm để lấy một số nguyên ngẫu nhiên trong khoảng từ 1,000,000 đến 20,000,000 có bước nhảy là 100,000
var randomInt = getRandomInt(1000000, 20000000);

function randomChucVu() {
  var random = Math.random();
  var result =
    random < 0.1 ? "Sếp" : random < 0.3 ? "Nhân viên" : "Trưởng phòng";

  return result;
}

renderTableVaLuuLocal(mangNhanVien);

function getEleByQuery(n) {
  return document.querySelector(n);
}

document.querySelector("#btnThemNV").onclick = function () {
  var check = validation();

  if (!check) {
    return;
  }

  var nv = new NhanVien();

  nv.tknv = document.getElementById("tknv").value;
  console.log("🚀 ~ file: index.js:18 ~ nv.tknv:", nv.tknv);
  nv.name = document.getElementById("name").value;
  nv.email = document.getElementById("email").value;
  nv.luongCB = document.getElementById("luongCB").value;
  nv.chucVu = document.getElementById("chucvu").value;
  nv.password = document.getElementById("password").value;
  nv.ngayLam = document.getElementById("datepicker").value;
  console.log("🚀 ~ file: index.js:86 ~ nv.ngayLam:", nv.ngayLam);

  nv.gioLam = document.getElementById("gioLam").value;
  nv.tongLuong = nv.tongLuong();
  nv.xepLoai = nv.xepLoai();

  mangNhanVien.push(nv);
  console.log("🚀 ~ file: index.js:24 ~ mangNhanVien:", mangNhanVien);
  renderTableVaLuuLocal(mangNhanVien);
};

document.querySelector("#btnThem").onclick = function () {
  document.getElementById("tknv").disabled = false;
  document.getElementById("btnCapNhat").disabled = true;
  document.getElementById("btnThemNV").disabled = false;
};

function renderTableVaLuuLocal(arrNhanVien) {
  onlyRenderTable(arrNhanVien);
  luuLocalStorage();
}

function onlyRenderTable(arrNhanVien) {
  var htmlString = "";

  for (var i = 0; i < arrNhanVien.length; i++) {
    var nv = arrNhanVien[i];

    htmlString += `
    <tbody>
        <tr>
            <td>${nv.tknv}</td>
            <td>${nv.name}</td>
            <td>${nv.email}</td>
            <td>${convertDateFormat(nv.ngayLam)}</td>
            <td>${nv.chucVu}</td>
            <td>${nv.tongLuong}</td>
            <td>${nv.xepLoai}</td>
            <td>
                <button class="btn btn-danger"  onclick="xoaNhanVien('${i}')"><i class="fa fa-trash"></i></button>
            </td>
            <td>
                <button class="btn btn-warning" data-toggle="modal" data-target="#myModal"  onclick="layThongTin('${
                  nv.tknv
                }')">
                  <i class="fa fa-cog"></i>
                </button>
            </td>
        </tr>
      </tbody>
        `;
  }

  getEleByQuery("#tableDanhSach").innerHTML = htmlString;

  return htmlString;
}

function luuLocalStorage() {
  var stringMangNhanVien = JSON.stringify(mangNhanVien);
  localStorage.setItem("mangNhanVien", stringMangNhanVien);
}

function layStorage() {
  if (localStorage.getItem("mangNhanVien")) {
    var stringMangNhanVien = localStorage.getItem("mangNhanVien");

    var jsonParseString = JSON.parse(stringMangNhanVien);
    mangNhanVien = jsonParseString;
    renderTableVaLuuLocal(jsonParseString);
    console.log(jsonParseString);
  }
}

layStorage();

function xoaNhanVien(indexDel) {
  console.log("🚀 ~ file: index.js:89 ~ xoaNhanVien ~ xoaNhanVien:");

  //Xử lý xoá object sinh viên trên mảng dựa vào index
  mangNhanVien.splice(indexDel, 1);
  //Gọi hàm tạo lại table sinh viên
  renderTableVaLuuLocal(mangNhanVien);
}

function layThongTin(tknvClick) {
  console.log("🚀 ~ file: index.js:161 ~ layThongTin ~ tknvClick:", tknvClick);
  document.getElementById("tknv").disabled = true;
  document.getElementById("btnThemNV").disabled = true;
  document.getElementById("btnCapNhat").disabled = false;

  for (var i = 0; i < mangNhanVien.length; i++) {
    if (+mangNhanVien[i].tknv === parseInt(tknvClick)) {
      //in thông tin sinh viên tìm thấy lên giao diện
      document.querySelector("#tknv").value = mangNhanVien[i].tknv;
      document.querySelector("#name").value = mangNhanVien[i].name;
      console.log(
        "🚀 ~ file: index.js:166 ~ layThongTin ~ mangNhanVien[i].name:",
        mangNhanVien[i].name
      );
      document.querySelector("#email").value = mangNhanVien[i].email;
      document.querySelector("#password").value = mangNhanVien[i].password;
      console.log(
        "🚀 ~ file: index.js:173 ~ layThongTin ~ mangNhanVien[i].password:",
        mangNhanVien[i].password
      );
      document.querySelector("#luongCB").value = mangNhanVien[i].luongCB;
      document.querySelector("#chucvu").value = mangNhanVien[i].chucVu;
      document.querySelector("#gioLam").value = mangNhanVien[i].gioLam;
      document.querySelector("#datepicker").value = mangNhanVien[i].ngayLam;
      console.log(
        "🚀 ~ file: index.js:170 ~ layThongTin ~ mangNhanVien[i].ngayLam:",
        mangNhanVien[i].ngayLam
      );
      break;
    }
  }
}

function convertStringToDate(string) {
  const parts = string.split("/"); // tách chuỗi thành mảng ['12', '03', '2023']
  const date = new Date();

  date.setFullYear(parts[2]);

  date.setMonth(parts[1] - 1); // trừ 1 vì tháng trong Date bắt đầu từ 0 (0=tháng 1)

  date.setDate(parts[0]);

  console.log(date); // Kết quả: Sun Mar 12 2023 00:00:00 GMT+0700 (Indochina Time)

  return date;
}

document.getElementById("btnCapNhat").onclick = function () {
  var check = validationCapNhat();
  if (!check) {
    return;
  }

  var nvEdit = new NhanVien();

  nvEdit.tknv = +document.getElementById("tknv").value;
  nvEdit.name = document.getElementById("name").value;
  nvEdit.email = document.getElementById("email").value;
  nvEdit.password = document.getElementById("password").value;
  nvEdit.luongCB = document.getElementById("luongCB").value;
  nvEdit.chucVu = document.getElementById("chucvu").value;
  nvEdit.ngayLam = document.getElementById("datepicker").value;
  nvEdit.gioLam = document.getElementById("gioLam").value;
  nvEdit.tongLuong = nvEdit.tongLuong();
  nvEdit.xepLoai = nvEdit.xepLoai();

  console.log("🚀 ~ file: index.js:238 ~ nvEdit:", nvEdit);

  for (var index = 0; index < mangNhanVien.length; index++) {
    if (+mangNhanVien[index].tknv === +nvEdit.tknv) {
      //Tìm thấy object sinh viên trong mảng => gán các giá trị của object trong mảng = object edit
      mangNhanVien[index].name = nvEdit.name;
      mangNhanVien[index].password = nvEdit.password;
      mangNhanVien[index].email = nvEdit.email;
      mangNhanVien[index].luongCB = nvEdit.luongCB;
      mangNhanVien[index].chucVu = nvEdit.chucVu;
      mangNhanVien[index].ngayLam = nvEdit.ngayLam;
      mangNhanVien[index].gioLam = nvEdit.gioLam;
      mangNhanVien[index].tongLuong = nvEdit.tongLuong;
      mangNhanVien[index].xepLoai = nvEdit.xepLoai;
      break;
    }
  }

  renderTableVaLuuLocal(mangNhanVien);
};

function bubbleSortNvTangDan(arr) {
  var n = arr.length;
  for (var i = 0; i < n - 1; i++) {
    for (var j = 0; j < n - i - 1; j++) {
      if (arr[j].tknv > arr[j + 1].tknv) {
        // swap arr[j] and arr[j+1]
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

function bubbleSortNvGiamDan(arr) {
  var n = arr.length;
  for (var i = 0; i < n - 1; i++) {
    for (var j = 0; j < n - i - 1; j++) {
      if (arr[j].tknv < arr[j + 1].tknv) {
        // swap arr[j] and arr[j+1]
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

document.getElementById("btnSapXep").onclick = function () {
  if (sapXepMangTheoTknvGiamDan) {
    bubbleSortNvTangDan(mangNhanVien);
    onlyRenderTable(mangNhanVien);
    sapXepMangTheoTknvGiamDan = false;
  } else {
    bubbleSortNvGiamDan(mangNhanVien);
    onlyRenderTable(mangNhanVien);
    sapXepMangTheoTknvGiamDan = true;
  }
};

function resetForm() {
  // Lấy thông tin form
  const form = document.querySelector("#myForm");

  console.log("reset");

  // Thiết lập lại giá trị của các input

  var inputs = document.querySelectorAll("#myForm .form-control");
  for (var i = 0; i < inputs.length; i++) {
    inputs[i].value = "";
  }

  var tbs = document.querySelectorAll("#myForm .sp-thongbao");
  for (var i = 0; i < tbs.length; i++) {
    tbs[i].innerHTML = "";
  }

  form.reset();
}

document.getElementById("btnDong").onclick = function () {
  resetForm();
};

// Gán sự kiện hidden cho modal
const myModal = document.querySelector("#myModal");
myModal.addEventListener("hidden.bs.modal", resetForm());

function convertDateFormat(dateString) {
  // Định dạng ngày tháng ban đầu (điều chỉnh lại sau).
  const dateFormat = [
    "DD-MM-YYYY", //dd-mm-yyyy
    "MM-DD-YYYY", //mm-dd-yyyy
    "YYYY-MM-DD", //yyyy-mm-dd
    "YYYY-DD-MM", //yyyy-dd-mm
    "DD/MM/YYYY", //dd/mm/yyyy
    "MM/DD/YYYY", //mm/dd/yyyy
    "YYYY/MM/DD", //yyyy/mm/dd
    "YYYY/DD/MM", //yyyy/dd/mm
  ];

  // Chạy vòng lặp thông qua từng định dạng ngày tháng để chuyển đổi giá trị.
  for (let i = 0; i < dateFormat.length; i++) {
    const dateObject = moment(dateString, dateFormat[i], true);
    if (dateObject.isValid()) {
      return dateObject.format("MM/DD/YYYY");
    }
  }

  // Trả về null nếu không chuyển đổi được.
  return null;
}

function timKiemNhanVien() {
  const input = stringToSlug(document.getElementById("searchBar").value);
  console.log("🚀 ~ file: index.js:314 ~ timKiemNhanVien ~ input:", input);
  let ketQuaTimKiem = [];

  for (let i = 0; i < mangNhanVien.length; i++) {
    if (
      stringToSlug(mangNhanVien[i].tknv).includes(input) ||
      stringToSlug(mangNhanVien[i].xepLoai).includes(input) ||
      stringToSlug(mangNhanVien[i].chucVu).includes(input) ||
      stringToSlug(mangNhanVien[i].name).includes(input)
    ) {
      console.log(
        "🚀 ~ file: index.js:334 ~ timKiemNhanVien ~ mangNhanVien[i].name:",
        mangNhanVien[i].name
      );
      ketQuaTimKiem.push(mangNhanVien[i]);
    }
  }

  return ketQuaTimKiem;
}

function isSubstringIncluded(str, sub) {
  return str.includes(sub);
}

document.getElementById("btnTimNV").onclick = function () {
  console.log("hello");
  onlyRenderTable(timKiemNhanVien());
};

function stringToSlug(title) {
  slug = "" + title;
  slug = slug.toLowerCase();
  slug = slug.replace(/á|à|ả|ạ|ã|ă|ắ|ằ|ẳ|ẵ|ặ|â|ấ|ầ|ẩ|ẫ|ậ/gi, "a");
  slug = slug.replace(/é|è|ẻ|ẽ|ẹ|ê|ế|ề|ể|ễ|ệ/gi, "e");
  slug = slug.replace(/i|í|ì|ỉ|ĩ|ị/gi, "i");
  slug = slug.replace(/ó|ò|ỏ|õ|ọ|ô|ố|ồ|ổ|ỗ|ộ|ơ|ớ|ờ|ở|ỡ|ợ/gi, "o");
  slug = slug.replace(/ú|ù|ủ|ũ|ụ|ư|ứ|ừ|ử|ữ|ự/gi, "u");
  slug = slug.replace(/ý|ỳ|ỷ|ỹ|ỵ/gi, "y");
  slug = slug.replace(/đ/gi, "d");
  //Xóa các ký tự đặt biệt
  slug = slug.replace(
    /\`|\~|\!|\@|\#|\||\$|\%|\^|\&|\*|\(|\)|\+|\=|\,|\.|\/|\?|\>|\<|\'|\"|\:|\;|_/gi,
    ""
  );
  //Đổi khoảng trắng thành ký tự gạch ngang
  slug = slug.replace(/ /gi, "-");
  //Đổi nhiều ký tự gạch ngang liên tiếp thành 1 ký tự gạch ngang
  //Phòng trường hợp người nhập vào quá nhiều ký tự trắng
  slug = slug.replace(/\-\-\-\-\-/gi, "-");
  slug = slug.replace(/\-\-\-\-/gi, "-");
  slug = slug.replace(/\-\-\-/gi, "-");
  slug = slug.replace(/\-\-/gi, "-");
  //Xóa các ký tự gạch ngang ở đầu và cuối
  slug = "@" + slug + "@";
  slug = slug.replace(/\@\-|\-\@|\@/gi, "");
  return slug;
}
