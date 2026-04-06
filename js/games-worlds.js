(() => {
  const oddBrick = document.getElementById("oddBrick");
  const secretPanel = document.getElementById("secretPanel");
  const footerLine = document.getElementById("footerLine");

  const showSecret = () => {
    secretPanel.classList.remove("hidden");
    footerLine.textContent = "You notice a lantern glow behind the wall…";
  };

  const hideSecret = () => {
    secretPanel.classList.add("hidden");
    footerLine.textContent = "Keep exploring. The dungeon remembers.";
  };

  // Toggle secret on brick click
  oddBrick.addEventListener("click", () => {
    const isHidden = secretPanel.classList.contains("hidden");
    if (isHidden) showSecret();
    else hideSecret();
  });

  // Konami code easter egg
  const konami = [
    "ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown",
    "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight",
    "KeyB", "KeyA"
  ];

  let buffer = [];

  window.addEventListener("keydown", (e) => {
    buffer.push(e.code);
    buffer = buffer.slice(-konami.length);

    if (buffer.join("|") === konami.join("|")) {
      showSecret();
      // tiny “warp” vibe
      document.body.style.transition = "filter 200ms ease";
      document.body.style.filter = "brightness(1.15) contrast(1.05)";
      setTimeout(() => {
        document.body.style.filter = "";
      }, 220);
    }
  });
})();
