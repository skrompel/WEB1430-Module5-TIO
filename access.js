// Assign all elements
const demoId = document.getElementById('demo');
const demoClass = document.getElementsByClassName('demo');
const demoTag = document.getElementsByTagName('article');
const demoQuery = document.querySelector('#demo-query');
const demoQueryAll = document.querySelectorAll('.demo-query-all');

// Change border of ID demo to purple
demoId.style.border = '10px solid purple';

// Change border of class demo to red
for (i = 0; i < demoClass.length; i++) {
  demoClass[i].style.border = '10px solid red';
}

// Change border of tag demo to blue
for (i = 0; i < demoTag.length; i++) {
  demoTag[i].style.border = '10px solid blue';
}

// Change border of ID demo-query to brown
demoQuery.style.border = '10px dashed brown';

// Change border of class query-all to green
demoQueryAll.forEach(query => {
  query.style.border = '10px dotted green';
});