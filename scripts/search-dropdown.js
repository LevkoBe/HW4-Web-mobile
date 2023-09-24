document.addEventListener("DOMContentLoaded", function () {
  let input = document.getElementById("dropdown-input");
  let dropdownList = document.getElementById("dropdown-list");

  input.addEventListener("focus", function () {
    dropdownList.style.display = "block";
  });

  input.addEventListener("blur", function () {
    setTimeout(() => {
      dropdownList.style.display = "none";
    }, 200);
  });

  dropdownList.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
      input.value = e.target.textContent;
      dropdownList.style.display = "none";
    }
  });
});
