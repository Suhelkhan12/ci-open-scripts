function triggerClickEvent(triggerElement, targetElement) {
  triggerElement.addEventListener("click", function () {
    const clickEvent = new Event("click", {
      bubbles: true,
      cancelable: true
    });

    targetElement.dispatchEvent(clickEvent);
  });
}

const triggerTarget1 = document.querySelector('[trigger="target1"]');
const triggerTarget2 = document.querySelector('[trigger="target2"]');
const triggerClick1 = document.querySelector('[trigger="click1"]');
const triggerClick2 = document.querySelector('[trigger="click2"]');

triggerClickEvent(triggerClick1, triggerTarget1);
triggerClickEvent(triggerClick2, triggerTarget2);
