const danhSachSan = [
  { ma: "DV10-01", ten: "Thay dầu động cơ", gia: 450000 }
  { ma: "DV10-02", ten: "Kiểm tra phanh", gia: 300000 }
  { ma: "DV10-03", ten: "Vệ sinh điều hòa", gia: 280000 }
  { ma: "DV10-04", ten: "Thay lọc gió", gia: 190000 }
];

function renderCatalog() {
  const bang = document.getElementById("bang-gia");
  for (const item of danhSachSan) {
    const row = bang.insertRow();
    row.insertCell().textContent = item.ma;
    row.insertCell().textContent = item.ten;
    row.insertCell().textContent = item.gia.toLocaleString("vi-VN");
  }
}

showGarageServices();
