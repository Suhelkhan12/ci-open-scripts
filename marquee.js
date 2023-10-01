const init = () => {
  const marquees = document.querySelectorAll('[wb-data="marquee"]');
  if (!marquees) {
    return;
  }
  marquees.forEach((marquee) => {
    const duration = parseInt(marquee.getAttribute("duration"), 10) || 5;
    const marqueeContent = marquee.firstChild;
    if (!marqueeContent) {
      return;
    }

    const marqueeContentClone = marqueeContent.cloneNode(true);
    marquee.append(marqueeContentClone);

    let tween;
    let reverseDirection = duration < 0; // Flag to reverse marquee direction

    const playMarquee = () => {
      let progress = tween ? tween.progress() : 0;
      tween && tween.progress(0).kill();
      const width = parseInt(
        getComputedStyle(marqueeContent).getPropertyValue("width"),
        10
      );
      const gap = parseInt(
        getComputedStyle(marqueeContent).getPropertyValue("column-gap"),
        10
      );
      let distanceToTranslate;

      if (reverseDirection) {
        distanceToTranslate = gap + width; // Reverse the distance for negative duration
      } else {
        distanceToTranslate = -1 * (gap + width);
      }

      tween = gsap.fromTo(
        marquee.children,
        { x: reverseDirection ? -distanceToTranslate : 0 },
        {
          x: reverseDirection ? 0 : distanceToTranslate,
          duration: Math.abs(duration),
          ease: "none",
          repeat: -1
        }
      );
      tween.progress(progress);
      console.log({ width });
    };

    playMarquee();

    function debounce(func) {
      var timer;
      return function (event) {
        if (timer) clearTimeout(timer);
        timer = setTimeout(
          () => {
            func();
          },
          500,
          event
        );
      };
    }

    window.addEventListener("resize", debounce(playMarquee));
  });
};

// Call the init function when the document is ready
document.addEventListener("DOMContentLoaded", init);

let tabbuttons = document.querySelectorAll('[homeseven="tab"]');

document.addEventListener("DOMContentLoaded", init);

function initTwiceWithDelay() {
  setTimeout(init, 250); // Call init after a 1 second delay
}

tabbuttons.forEach((button) => {
  button.addEventListener("click", initTwiceWithDelay);
});

// product code

/// Get all parent containers
const parentContainers = document.querySelectorAll(
  ".home-five-tab-contain-pointers"
);

// Loop through each parent container
parentContainers.forEach((parentContainer) => {
  // Find tab elements within the current parent container
  const tabElements = parentContainer.querySelectorAll(
    ".home-five-tab-contain-second"
  );

  // Loop through each tab element within the current parent container
  tabElements.forEach((tabElement) => {
    tabElement.addEventListener("click", () => {
      // Remove the 'is--active' class from all tab elements within the current parent container
      tabElements.forEach((tab) => {
        tab.classList.remove("is--active");
      });

      // Add the 'is--active' class to the clicked tab element
      tabElement.classList.add("is--active");
    });
  });
});

$(".home-five-tab-link").on("click", function () {
  $(".home-five-tab-link, .home-five-tab--content").removeClass("is--active");
  $(this).addClass("is--active");
  $(this).next().addClass("is--active");
});
