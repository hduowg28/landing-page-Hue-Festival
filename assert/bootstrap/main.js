let currentGroup = 1;
const totalGroups = 5;

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

const scrollTopBtn = document.getElementById("scrollTopBtn");
  const carousel = document.getElementById("carouselExampleDark");

  window.addEventListener("scroll", () => {
    const carouselBottom = carousel.offsetTop + carousel.offsetHeight;
    if (window.scrollY > carouselBottom) {
      scrollTopBtn.style.display = "block";
    } else {
      scrollTopBtn.style.display = "none";
    }
  });

  scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });