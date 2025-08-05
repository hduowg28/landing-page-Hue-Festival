
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

  hideBtn.addEventListener("click", function () {
    // Ẩn tất cả extra row
    for (let i = 1; i <= totalRows; i++) {
      const row = document.getElementById("extra-row-" + i);
      row.classList.add("d-none");
    }
    currentRow = 1;
    hideBtn.classList.add("d-none");
    showMoreBtn.classList.remove("d-none");
  });
