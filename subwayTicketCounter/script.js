let count = 0;
let countEl = document.getElementById("count-el");
let previousEntries = document.getElementById("previous-entries")
countEl.innerText = count;
let previousEntriesArray = []


function increment() {
  count += 1;
  countEl.innerText = count;
};

function save() {
  previousEntries.textContent += count + ' - ';
  count = 0;
  countEl.textContent = count;
}

