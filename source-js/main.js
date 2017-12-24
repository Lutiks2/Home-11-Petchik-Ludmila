
/*------button close ------*/
var myNodelist = document.getElementsByTagName('li');
for (var i = 0; i < myNodelist.length; i++) {
  createCloseButton(myNodelist[i]);
}

/*-----------select li--------*/
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

/*-----create new element by input--------*/
function newElement() {
  var inputValue = document.getElementById("todo").value;
  if (inputValue === '') {
    alert("The field dont't be empty!");
  } else {
    //create new element
    var li = document.createElement("li");
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    document.getElementById('list').appendChild(li);

    //create close
    createCloseButton(li);

    //clean input
    document.getElementById('todo').value = "";
  }
}

function createCloseButton(node) {
  var span = document.createElement("span");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  node.appendChild(span);
  span.onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

function newElem() {
  var li = document.createElement('li'),
    inputValue = document.getElementById('input').value,
    t = document.createTextNode(inputValue);
  li.appendChild(t);

  if (inputValue === "") {
    alert('Mistake')
  } else {
    document.getElementById('ul').appendChild(li);
  }

  document.getElementById('input').value = "";

  var span = document.createElement('span'),
    txt = document.createTextNode('\u00D7');

  span.className = 'close';
  span.appendChild(txt);
  li.appendChild(span);

  for (var i = 0; i<close.length; i++) {
    close[i].onclick = function () {
      var div = this.parentElement;
      div.style.display = 'none';
    }
  }

}
