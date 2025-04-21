function addComment() {
    const input = document.getElementById('comment-input');
    const commentText = input.value.trim();
  
    if (commentText !== "") {
      const commentDisplay = document.getElementById('comment-display');
      const newComment = document.createElement('div');
      newComment.className = 'comment';
      newComment.textContent = commentText;
      commentDisplay.appendChild(newComment);
      input.value = "";
    }
  }
  