(() => {
  "use strict";
  const random = (i) => i[Math.floor(Math.random() * i.length)];
  const colors = [
    "bg-fotf-green",
    // "bg-fotf-yellow",
    "bg-fotf-red",
    // "bg-fotf-pink",
    "bg-fotf-blue",
  ];
  document.body.classList.remove("bg-fotf-gray");
  document.body.classList.add(random(colors));
})();
