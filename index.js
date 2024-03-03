const accordions = document.querySelectorAll(".faq__accordion");

accordions.forEach((accordion) => {
  accordion.addEventListener("click", () => {
    closeAccordions(accordion);

    let answer = accordion.lastElementChild;
    if (answer.style.maxHeight) {
      answer.classList.toggle("padding-top");
      answer.style.maxHeight = "";
    } else {
      answer.classList.toggle("padding-top");
      answer.style.maxHeight = answer.scrollHeight + "px";
    }

    let minus = accordion.firstElementChild.lastElementChild;
    minus.classList.toggle("display-none");

    let plus = minus.previousElementSibling;
    plus.classList.toggle("display-none");
  });
});

function closeAccordions(accordion) {
  accordions.forEach((acc) => {
    if (acc != accordion) {
      let answer = acc.lastElementChild;
      answer.style.maxHeight = null;

      answer.classList.remove("padding-top");

      let minus = acc.firstElementChild.lastElementChild;
      minus.classList.add("display-none");

      let plus = minus.previousElementSibling;
      plus.classList.remove("display-none");
    }
  });
}
