var enterButton = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");
var item = document.getElementsByTagName("li");

function inputLenght() {
    return input.value.lenght;
}

function listLenght() {
    return item.lenght;
}

function createListElement() {
    var li = document.createElement(li);
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";
}

function crossOut() {
    li.classList.toggle("done");
}
var li;
li.addEventListener("click", crossOut);


var dbtn = document.createElement("button");
dbtn.appendChild(document.createTextNode("X"));
li.appendChild("dbtn");
dbtn.addEventListener("click", deleteListItem);

function deleteListItem() {
    li.classList.add("delete");

}

function addListAfterClick() {
    if (inputLenght() > 0) {
        createListElement();
    }
}
enterbutton.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);