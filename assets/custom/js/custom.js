$(document).ready(function() {
  var cardSteps = document.querySelectorAll(".card-steps");
  var faqLink = document.querySelectorAll(".faq-list-link");

  cardSteps.forEach(function(card, idx) {
    var index = idx;
    var cardEl = card.children[1];
    var srcActive = "./assets/img/card-" + index + "-active.png";
    var srcInactive = "./assets/img/card-" + index + "-inactive.png";

    cardEl.addEventListener("click", function(e) {
      if(card.classList.contains("active")) {
        card.classList.remove("active");
        cardEl.firstElementChild.src = srcInactive;
      } else {
        card.classList.add("active");
        e.target.src = srcActive;
      }
    });
  });

  faqLink.forEach(function(link) {
    link.addEventListener("click", function(e) {
      if(e.target.classList.contains("fa-plus-square")) {
        e.target.classList.remove("fa-plus-square");
        e.target.classList.add("fa-minus-square");
      } else {
        e.target.classList.add("fa-plus-square");
      }
    });
  });
});
