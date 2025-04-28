/* making the arrows go up and then down*/
function up(btn) {
    const li = btn.parentElement;
    const past = li.previousElementSibling;
    if (past) {
      li.parentElement.insertBefore(li, past);
    }
  }
  
  function down(btn) {
    const li = btn.parentElement;
    const next = li.nextElementSibling;
    if (next) {
      li.parentElement.insertBefore(next, li);
    }
  }
  
  /*showing the users its ranking*/
  function showRanking() {
    const items = document.querySelectorAll("#rankList li");
    let result = "<h4> Thanks for the feedback </h4><ol>";
  
    items.forEach((item) => {
      const clone = item.cloneNode(true);
      clone.querySelectorAll("button").forEach((btn) => btn.remove());
      const text = clone.textContent.trim();
  
      result += `<li>${text}</li>`;
    });
  
    result += "</ol>";
    document.getElementById("rankingResult").innerHTML = result;
  }
  