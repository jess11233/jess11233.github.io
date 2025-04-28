function moveUp(btn) {
    const li = btn.parentElement;
    const prev = li.previousElementSibling;
    if (prev) {
      li.parentElement.insertBefore(li, prev);
    }
  }
  
  function moveDown(btn) {
    const li = btn.parentElement;
    const next = li.nextElementSibling;
    if (next) {
      li.parentElement.insertBefore(next, li);
    }
  }
  
  function showRanking() {
    const items = document.querySelectorAll("#rankList li");
    let result = "<h4>Your Ranking:</h4><ol>";
  
    items.forEach((item) => {
      const clone = item.cloneNode(true);
      clone.querySelectorAll("button").forEach((btn) => btn.remove());
      const text = clone.textContent.trim();
  
      result += `<li>${text}</li>`;
    });
  
    result += "</ol>";
    document.getElementById("rankingResult").innerHTML = result;
  }
  