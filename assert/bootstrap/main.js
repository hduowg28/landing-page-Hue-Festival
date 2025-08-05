
let currentRow = 1;
const totalRows = 2;

const showMoreBtn = document.getElementById("show-more-btn");
const hideBtn = document.getElementById("hide-btn");

showMoreBtn.addEventListener("click", function () {
  const nextRow = document.getElementById("extra-row-" + currentRow);
  if (nextRow) {
    nextRow.classList.remove("d-none");
    currentRow++;
    if (currentRow > totalRows) {
      showMoreBtn.classList.add("d-none");
      hideBtn.classList.remove("d-none");
    }
  }
});


function showSection(id) {

  document.querySelectorAll('.food-section').forEach(section => {
    section.classList.remove('active');
  });
  document.getElementById(id).classList.add('active');


  document.querySelectorAll('.btn-menu').forEach(btn => {
    btn.classList.remove('active');
  });

  const buttonIdMap = {
    'monchinh': 'Món chính truyền thống',
    'monbanh': 'Món bánh',
    'trangmieng': 'Tráng miệng',
    'thucuong': 'Đồ uống',
    'mam' : 'Mắm'
  };
  document.querySelectorAll('.btn-menu').forEach(btn => {
    if (btn.textContent.trim() === buttonIdMap[id]) {
      btn.classList.add('active');
    }
  });
}
