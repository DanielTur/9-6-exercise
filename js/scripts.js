// scripts.js

var list = document.getElementById('list');
var add = document.getElementById('addElem');

add.addEventListener('click', function() {
	var element = document.createElement('li');
	console.log(element);
	var itemsByTagName = document.getElementsByTagName('li');
	var checkNumberLi = itemsByTagName.length; 
	element.innerHTML = 'item ' + [checkNumberLi];
	list.appendChild(element);
});
