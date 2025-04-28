let yes = 0;
let no = 0;

/* simeple js element */
function vote(choice) {
  if (choice === 'yes') {
    yes++;
    document.getElementById('yesCount').textContent = yes;
  } else if (choice === 'no') {
    no++;
    document.getElementById('noCount').textContent = no;
  }
}
