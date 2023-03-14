var sapXepMangTheoTknvGiamDan = false;

var mangNhanVien = [];
for (var i = 1; i <= 2; i++) {
  var nhanVien = new NhanVien();

  nhanVien.tknv = 10000 + i;
  nhanVien.name = "Nguyen Van " + String.fromCharCode(64 + i);
  nhanVien.email = "nguyenvan" + String.fromCharCode(64 + i) + "@gmail.com";
  nhanVien.password = "Nvt@123";
  nhanVien.ngayLam = randomDayInThePast();
  nhanVien.luongCB = getRandomInt(1000000, 20000000);
  nhanVien.chucVu = randomChucVu();
  nhanVien.gioLam = Math.floor(Math.random() * (200 - 80 + 1)) + 80;
  nhanVien.tongLuong = nhanVien.tongLuong();
  nhanVien.xepLoai = nhanVien.xepLoai();

  console.log("🚀 ~ file: index.js:4 ~ nhanVien:", nhanVien);

  mangNhanVien.push(nhanVien);
}

function getRandomInt(min, max) {
  min = Math.ceil(min / 100000) * 100000;
  max = Math.floor(max / 100000) * 100000;
  return Math.floor(Math.random() * ((max - min) / 100000 + 1)) * 100000 + min;
}

function randomDayInThePast() {
  var today = new Date();
  var daysAgo = Math.floor(Math.random() * 365) + 1; // random từ 1 đến 365 ngày
  var pastDate = new Date(today.getTime() - daysAgo * 24 * 60 * 60 * 1000);
  var formattedDate =
    pastDate.getFullYear() +
    "/" +
    (pastDate.getMonth() + 1) +
    "/" +
    pastDate.getDate();

  console.log(formattedDate); // ví dụ: 2022/01/15

  return formattedDate;
}

// Sử dụng hàm để lấy một số nguyên ngẫu nhiên trong khoảng từ 1,000,000 đến 20,000,000 có bước nhảy là 100,000
var randomInt = getRandomInt(1000000, 20000000);

// In ra số nguyên ngẫu nhiên
console.log(randomInt);

function randomChucVu() {
  var random = Math.random();
  var result =
    random < 0.1 ? "Sếp" : random < 0.3 ? "Nhân viên" : "Trưởng phòng";

  return result;
}

renderTableVaLuuLocal(mangNhanVien);

// In mảng nhân viên ra để kiểm tra
// console.log(mangNhanVien);

// Tiếp tục tạo các đối tượng nhân viên khác và thêm vào mảng tương tự
// ...

// In mảng nhân viên ra để kiểm tra
// console.log(mangNhanVien);

function getEleByQuery(n) {
  return document.querySelector(n);
}

document.querySelector("#btnThemNV").onclick = function () {
  var check = validation();
  console.log("🚀 ~ file: index.js:13 ~ check:", check);

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

// function dinhDangNgayThangNam(stringDate) {
//   const [year, month, day] = stringDate.split("-");
//   console.log(month);
//   console.log(day);
//   console.log(year);

//   return month + "/" + day + "/" + year;
// }

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
            <td>${nv.ngayLam}</td>
            <td>${nv.chucVu}</td>
            <td>${nv.tongLuong}</td>
            <td>${nv.xepLoai}</td>
            <td>
                <button class="btn btn-danger"  onclick="xoaNhanVien('${i}')"><i class="fa fa-trash"></i></button>
            </td>
            <td>
                <button class="btn btn-warning" data-toggle="modal" data-target="#myModal"  onclick="layThongTin('${nv.tknv}')">
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

function capNhatNhanVien(tknv) {
  console.log(
    "🚀 ~ file: index.js:136 ~ capNhatNhanVien ~ capNhatNhanVien (tknv):"
  );
  console.log(tknv);
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
  document.getElementById("tknv").disabled = true;
  document.getElementById("btnThemNV").disabled = true;
  document.getElementById("btnCapNhat").disabled = false;

  for (var i = 0; i < mangNhanVien.length; i++) {
    if (mangNhanVien[i].tknv === parseInt(tknvClick)) {
      //in thông tin sinh viên tìm thấy lên giao diện
      document.querySelector("#tknv").value = mangNhanVien[i].tknv;
      document.querySelector("#name").value = mangNhanVien[i].name;
      document.querySelector("#email").value = mangNhanVien[i].email;
      document.querySelector("#password").value = mangNhanVien[i].password;
      document.querySelector("#luongCB").value = mangNhanVien[i].luongCB;
      document.querySelector("#chucvu").value = mangNhanVien[i].chucVu;
      document.querySelector("#gioLam").value = mangNhanVien[i].gioLam;
      document.querySelector("#datepicker").value = convertStringToDate(
        mangNhanVien[i].ngayLam
      );
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

function stringToSlug(title) {
  //Đổi chữ hoa thành chữ thường
  slug = title.toLowerCase();

  //Đổi ký tự có dấu thành không dấu
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

document.getElementById("btnCapNhat").onclick = function () {
  var check = validationCapNhat();
  console.log("🚀 ~ file: index.js:13 ~ check:", check);

  if (!check) {
    return;
  }

  var nvEdit = new NhanVien();

  nvEdit.tknv = +document.getElementById("tknv").value;
  nvEdit.name = document.getElementById("name").value;
  nvEdit.email = document.getElementById("email").value;
  nvEdit.luongCB = document.getElementById("luongCB").value;
  nvEdit.chucVu = document.getElementById("chucvu").value;
  nvEdit.ngayLam = document.getElementById("datepicker").value;
  nvEdit.gioLam = document.getElementById("gioLam").value;
  nvEdit.tongLuong = nvEdit.tongLuong();
  nvEdit.xepLoai = nvEdit.xepLoai();

  for (var index = 0; index < mangNhanVien.length; index++) {
    if (mangNhanVien[index].tknv === nvEdit.tknv) {
      //Tìm thấy object sinh viên trong mảng => gán các giá trị của object trong mảng = object edit
      mangNhanVien[index].name = nvEdit.name;
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
    console.log("🚀 tang dan", mangNhanVien);
    bubbleSortNvTangDan(mangNhanVien);
    onlyRenderTable(mangNhanVien);
    sapXepMangTheoTknvGiamDan = false;
  } else {
    console.log("🚀 giam dan", mangNhanVien);
    bubbleSortNvGiamDan(mangNhanVien);
    onlyRenderTable(mangNhanVien);
    sapXepMangTheoTknvGiamDan = true;
  }
};

// hàm reset

function reset() {
  console.log("🚀 ~ file: index.js:364 ~ reset ~ reset():", "reset");
  console.log('Modal with id "myModalForm" has been hidden');
  document.getElementById("tknv").innerHTML = "";
  document.getElementById("name").innerHTML = "";
  document.getElementById("email").innerHTML = "";
  document.getElementById("password").innerHTML = "";
  document.getElementById("datepicker").innerHTML = "";
  document.getElementById("luongCB").innerHTML = "";
  document.getElementById("chucvu").selectedIndex = 0;
  document.getElementById("gioLam").innerHTML = "";

  // Xóa các thông báo lỗi đã được hiển thị
  var errorSpans = document.querySelectorAll(".sp-thongbao");
  for (var i = 0; i < errorSpans.length; i++) {
    errorSpans[i].innerHTML = "";
  }
}

document.getElementById("btnDong").addEventListener("click", function () {
  reset();
});
