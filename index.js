//  tạo một mảng và lưu trữ thông tin số nguyên theo dữ liệu dùng nhập
var arrSoNguyen = [];
//nên thêm arrNhanVien ở bên ngoài function để có thể thêm dữ liệu vào
function getNumberFromUser() {
  var soNguyen = document.getElementById("txt-soNguyen").value * 1;
  arrSoNguyen.push(soNguyen);
  document.getElementById("kq1").innerHTML = arrSoNguyen.join(",");
}

document.getElementById("btn1").onclick = getNumberFromUser;
//--------------------------------------

// 1 TÍNH TỔNG CÁC SỐ DƯƠNG
// - tạo mảng tinhTong
// - So sánh các phần tử trong mảng, lớn hơn 0 thì cộng dồn vào nhau
// - xuất ra màn hình kết quả
function tinhTong() {
  var tongCacSoNguyen = 0;
  for (var i = 0; i < arrSoNguyen.length; i++) {
    if (arrSoNguyen[i] > 0) {
      tongCacSoNguyen += arrSoNguyen[i];
    }
  }

  console.log(tongCacSoNguyen);
  document.getElementById("kq2").innerHTML = tongCacSoNguyen;
}
document.getElementById("btn2").onclick = tinhTong;
//--------------------------------------

// bài 2 ĐẾM SỐ PHẦN TỬ DƯƠNG
// - tạo mảng Counting chứa các số dương và biến count
// - lọc các số dương trong mảng cho đến cuối mảng
// - nếu có thì đưa vào biến count và xuất ra màn hình
function Couting() {
  var count = 0;
  for (var i = 0; i < arrSoNguyen.length; i++) {
    if (arrSoNguyen[i] > 0) {
      count ++  
    }  
  console.log(count);
  document.getElementById("kq3").innerHTML = count;
  }
}   
document.getElementById("btn3").onclick = Couting;

//--------------------------------------
// BÀI 3 TÌM SỐ NHỎ NHẤT TRONG MẢNG
// - sử dụng dử liệu trong mảng arrSoNguyen tạp mảng minNumber
// - tạo vòng lặp và hàm math.min để lọc số nhỏ nhất trong mảng
// - xuất ra màn hình
var arrSoNguyen = [];

// Tìm số nhỏ nhất trong mảng
function minNumber() {
  var soNhoNhat = 0;
  for (var i = 0; i < arrSoNguyen.length; i++) {
    if (arrSoNguyen[i] > 0) {
      soNhoNhat = Math.min(...arrSoNguyen);
    }
  }
  console.log(soNhoNhat);
  document.getElementById("kq4").innerHTML = soNhoNhat;
}
document.getElementById("btn4").onclick = minNumber;

//--------------------------------------
// BÀI 4 TÌM SỐ DƯƠNG NHỎ NHẤT
// - tạo chuỗi soDuong chứa các số dương lọc được trong mảng
// - tạo mảng arrSoDuong và tạo vòng lặp điều kiện
// -  xuất ra màn hình
var soDuong = [];

function ArrSoDuong() {
  for (var i = 0; i < arrSoNguyen.length; i++) {
    if (arrSoNguyen[i] > 0) {
      soDuong.push(arrSoNguyen[i]);
    }
  }

  console.log(soDuong);

  if (soDuong.length > 0) {
    var soDuongNhoNhat = Math.min(...soDuong);
    console.log(soDuongNhoNhat);
    document.getElementById("kq5").innerHTML = soDuongNhoNhat;
  } else {
    console.log("Không có số dương nào");
    document.getElementById("kq5").innerHTML =
      "Không có số dương nào trong mảng";
  }
}

document.getElementById("btn5").onclick = ArrSoDuong;

//--------------------------------------
// BÀI 5 TÌM SỐ CHẴN CUỐI CÙNG

// - tạo mảng soChan và hàm soChanCuoiCung
// - tạo vòng lặp for lọc ra các số chẵn và truyền vào mảng
// - tạo câu lệnh điều kiện if tìm số chẵn cuối cùng
var soChan = [];

function soChanCuoiCung() {
    for (var i = 0; i < arrSoNguyen.length; i++) {
        if (arrSoNguyen[i] % 2 === 0) {
         
            soChan = [arrSoNguyen[i]];
        }
    }

    console.log(soChan);
    
    if (soChan.length > 0) {
        document.getElementById("kq6").innerHTML = soChan[0];
    } else {
        document.getElementById("kq6").innerHTML = "Không có số chẵn nào";
    }
}

document.getElementById("btn6").onclick = soChanCuoiCung;


// BÀI 6 ĐỔI VỊ TRÍ 2 SỐ 
 // - tạo hàm và các biến cần trao đổi vị trí
 // - tạo vòng lặp for dùng để tráo đổi vị trí các biến trong chuỗi arrSoNguyen
 // - tạo biến trung gian và các giá trị cần tráo đổi, xuất ra màn hình
function doiHaiSo() {
  var soA = parseInt(document.getElementById("txt-soNguyen1").value);
  var soB = parseInt(document.getElementById("txt-soNguyen2").value);

  
  if (soA < 0 || soA >= arrSoNguyen.length || soB < 0 || soB >= arrSoNguyen.length) {
    document.getElementById('kq7').innerHTML = "sai rồi nha cưng";
    return;
  }

  var trungGian = arrSoNguyen[soA];
  arrSoNguyen[soA] = arrSoNguyen[soB];
  arrSoNguyen[soB] = trungGian;

  document.getElementById('kq7').innerHTML = arrSoNguyen.join(",");
}

document.getElementById('btn7').onclick = doiHaiSo;
// //--------------------------------------
// BÀI 7 SẮP XẾP THEO THỨ TỰ TĂNG DẦN 
// - tạo 1 hàm sapXepTangDan
// - tạo bản sao cảu mảng gốc và sắp xếp theo thứ tự tăng dần
// - xuất ra màn hình


function sapXepTangDan() {
   
  var soTangDan = arrSoNguyen.slice();  // Tạo một bản sao của mảng để tránh ảnh hưởng đến mảng gốc
  soTangDan.sort(function (a, b) {
    return a - b;
  });

  // Hiển thị kết quả
  document.getElementById('kq8').innerHTML = soTangDan.join(", ");
}

document.getElementById('btn8').onclick = sapXepTangDan;

//--------------------------------------
// - tạo 1 hàm soNguyenToDauTien
// - tạo vòng lặp for lọc các giá trị sô nguyên tố bên trong mảng gốc arrSoNguyen
// - xuất ra màn hình giá trị số nguyên tố đầu tiên
// BÀI 8 TÌM SỐ NGUYÊN TỐ ĐẦU TIÊN 
function soNguyenDauTien() {
  for (var i = 0; i < arrSoNguyen.length; i++) {
    console.log(arrSoNguyen[0])
  document.getElementById('kq9').innerHTML = arrSoNguyen[0];
}
}
 
document.getElementById('btn9').onclick = soNguyenDauTien;

//--------------------------------------
// BÀI 9 ĐẾM SỐ NGUYÊN TỐ

// - tạo 1  Hàm kiểm tra xem một số có phải là số nguyên tố không. Nó trả về true nếu số đó là số nguyên tố và false nếu không phải.

// - demSoNguyen(): Hàm này duyệt qua mảng arrSoNguyen và tăng biến demSoNguyenTo lên mỗi khi gặp một số nguyên tố trong mảng. 
//  - Đưa kết quả ra màn hình
var demSoNguyenTo = 0;

function isPrime(number) {
  if (number < 2) {
    return false;
  }
  for (var i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

function demSoNguyen() {
  demSoNguyenTo = 0; 
  for (var i = 0; i < arrSoNguyen.length; i++) {
    if (Number.isInteger(arrSoNguyen[i]) && isPrime(arrSoNguyen[i])) {
      demSoNguyenTo++;
    }
  }
  document.getElementById('kq10').innerHTML = demSoNguyenTo;
}

document.getElementById('btn10').onclick = demSoNguyen;
//--------------------------------------


// BÀI 10 SO SÁNH  SỐ ÂM DƯƠNG 
// - tạo mảng chứa số âm và số dương, tạo hàm để lọc số nguyên và đưa vào mảng
// - dùng câu lệnh điều kiện if so sánh sô lượng số âm và số dương
// - xuất ra màn hình 
function demSoAmDuong(arrSoNguyen) {
  var soNguyenAm = 0;
  var soNguyenDuong = 0;

  for (var i = 0; i < arrSoNguyen.length; i++) {
    if (arrSoNguyen[i] > 0) {
      soNguyenDuong++;
    } else if (arrSoNguyen[i] < 0) {
      soNguyenAm++;
    }
  }

  var soSanhAmDuong = '';

  if (soNguyenDuong > soNguyenAm) {
    soSanhAmDuong = 'Số nguyên dương nhiều hơn số nguyên âm';
  } else if (soNguyenDuong < soNguyenAm) {
    soSanhAmDuong = 'Số nguyên âm nhiều hơn số nguyên dương';
  } else {
    soSanhAmDuong = 'Âm dương hoà hợp';
  }

  console.log(soSanhAmDuong);
  document.getElementById('kq11').innerHTML = soSanhAmDuong;
}

document.getElementById('btn11').onclick = function () {
  demSoAmDuong(arrSoNguyen);
};


//--------------------------------------
