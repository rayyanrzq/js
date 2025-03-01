window.addEventListener("keydown", function(e){
  let char = `${e.code}`;
    document.getElementById("keyChar").textContent = char;

    if (char === "KeyQ") {
      document.getElementById("keybQ").play();
    } if (char === "KeyW") {
      document.getElementById("keybW").play();
    } if (char === "KeyE") {
      document.getElementById("keybE").play();
    } if (char === "KeyR") {
      document.getElementById("keybR").play();
    } if (char === "KeyT") {
      document.getElementById("keybT").play();
    } if (char === "KeyY") {
      document.getElementById("keybY").play();
    }
  });