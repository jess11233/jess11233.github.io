/* super simple comments */
function addComment() {
    const input = document.getElementById('cInput');
    const cText = input.value.trim();
  
    if (cText !== "") {
      const commentDisplay = document.getElementById('commentDisplay');
      const newComment = document.createElement('div');
      newComment.className = 'comment';
      newComment.textContent = cText;
      commentDisplay.appendChild(newComment);
      input.value = "";
    }
  }
  