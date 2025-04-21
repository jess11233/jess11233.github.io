let yesCount = 0;
let noCount = 0;

function vote(choice) {
  if (choice === 'yes') {
    yesCount++;
    document.getElementById('yes-count').textContent = yesCount;
  } else if (choice === 'no') {
    noCount++;
    document.getElementById('no-count').textContent = noCount;
  }
}
