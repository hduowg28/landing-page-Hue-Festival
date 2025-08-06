let currentGroup = 1;
const totalGroups = 2;

const showMoreBtn = document.getElementById("show-more-btn");
const hideBtn = document.getElementById("hide-btn");

showMoreBtn.addEventListener("click", function () {
  const groupElements = document.querySelectorAll(".extra-group-" + currentGroup);
  groupElements.forEach(el => el.classList.remove("d-none"));

  currentGroup++;

  if (currentGroup > totalGroups) {
    showMoreBtn.classList.add("d-none");
    hideBtn.classList.remove("d-none");
  }
});
hideBtn.addEventListener("click", function () {
  // Ẩn tất cả extra-row
  document.querySelectorAll(".extra-row").forEach(el => el.classList.add("d-none"));

  // Reset về trạng thái ban đầu
  currentGroup = 1;
  showMoreBtn.classList.remove("d-none");
  hideBtn.classList.add("d-none");
});

hideBtn.addEventListener("click", function () {
  // Ẩn tất cả extra rows
  for (let i = 0; i < currentRow; i++) {
    const row = document.getElementById("extra-row-" + i);
    if (row) row.classList.add("d-none");
  }

  // Reset lại trạng thái
  currentRow = 1;
  showMoreBtn.classList.remove("d-none");
  hideBtn.classList.add("d-none");
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
    'trangmieng': 'Món Tráng miệng',
    'mam': 'Mắm Huế',
    'thucuong': 'Món Khác'
  };
  document.querySelectorAll('.btn-menu').forEach(btn => {
    if (btn.textContent.trim() === buttonIdMap[id]) {
      btn.classList.add('active');
    }
  });
}

// nút khám phá thêm 
document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll("#art-list .col-12");
  let visibleCount = 4;

  const loadMoreBtn = document.getElementById("loadMore");

  function showMore() {
    let nextVisible = visibleCount + 2;
    for (let i = visibleCount; i < nextVisible && i < elements.length; i++) {
      elements[i].classList.remove("d-none");
    }
    visibleCount = nextVisible;

    if (visibleCount >= elements.length) {
      loadMoreBtn.style.display = "none";
    }
  }

  loadMoreBtn.addEventListener("click", showMore);
});
