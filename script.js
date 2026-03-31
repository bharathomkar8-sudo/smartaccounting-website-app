document.querySelectorAll(".title").forEach(item => {
  item.addEventListener("click", () => {
    let parent = item.parentElement;

    // Close others
    document.querySelectorAll(".dropdown").forEach(d => {
      if (d !== parent) d.classList.remove("open");
    });

    // Remove active from all titles
    document.querySelectorAll(".title").forEach(t => {
      t.classList.remove("active");
    });

    // Open clicked
    parent.classList.toggle("open");

    // Add active style
    item.classList.add("active");
  });
});
