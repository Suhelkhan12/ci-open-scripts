console.log("not working");

const tabswrapper = document.querySelector("[tabs='products']");

let tabsslide = tabswrapper.querySelectorAll("[tabs='tab']");

tabsslide.forEach((tab) => {
  tab.addEventListener("click", () => {
    // Remove the is--active class from all tabs
    tabsslide.forEach((otherTab) => {
      otherTab.classList.remove("is--active");
    });

    // Add the is--active class to the clicked tab
    tab.classList.add("is--active");
  });
});
