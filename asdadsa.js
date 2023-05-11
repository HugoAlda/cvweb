const myDiv = document.getElementById('myDiv');
const expandButton = document.getElementById('expandButton');

expandButton.addEventListener('click', function() {
  myDiv.classList.toggle('expanded');
});
