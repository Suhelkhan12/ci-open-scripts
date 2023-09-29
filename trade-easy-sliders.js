const slides = document.querySelectorAll(“.trade--easy--slide”);
const paginationItems = document.querySelectorAll(
  “.trade--easy--slider--pagination__list-item”
);
let currentIndex = 0;
let interval;
function showSlide(index) {
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove(“active”, “first”, “second”);
    paginationItems[i].classList.remove(“active”);
  }
  slides[index].classList.add(“active”);
  const nextIndex = (index + 1) % slides.length;
  slides[nextIndex].classList.add(“first”);
  const nextNextIndex = (nextIndex + 1) % slides.length;
  slides[nextNextIndex].classList.add(“second”);
  paginationItems[index].classList.add(“active”);
  console.log(`Current Slide: ${index + 1}`);
}
function autoSlide() {
  showSlide(currentIndex);
  currentIndex = (currentIndex + 1) % slides.length;
}
// Set the interval for automatic sliding (adjust the duration as needed)
interval = setInterval(autoSlide, 3000); // Change slide every 3 seconds (adjust as needed)
// Stop the automatic sliding when the page loses focus (e.g., user switches tabs)
document.addEventListener(“visibilitychange”, () => {
  if (document.hidden) {
    clearInterval(interval);
  } else {
    // Restart the automatic sliding when the page regains focus
    interval = setInterval(autoSlide, 3000); // Change slide every 3 seconds (adjust as needed)
  }
});
// Add click event listeners to pagination items
paginationItems.forEach((item, index) => {
  item.addEventListener(“click”, () => {
    if (index !== currentIndex) {
      clearInterval(interval); // Stop auto sliding
      currentIndex = index; // Update current index
      showSlide(currentIndex); // Show the selected slide
      interval = setInterval(autoSlide, 3000); // Restart auto sliding
    }
  });
});
// Initialize with the first slide and pagination item as active
showSlide(currentIndex);
