document.querySelectorAll(".title").forEach(item => {
  item.addEventListener("click", () => {
    let parent = item.parentElement;

    document.querySelectorAll(".dropdown").forEach(d => {
      if (d !== parent) d.classList.remove("open");
    });

    parent.classList.toggle("open");
  });
});
