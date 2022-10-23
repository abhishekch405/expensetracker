let stringified, detailsOfPeople;
var keys = Object.keys(localStorage);
keys.forEach((key) => {
    if (key.match(/userDetails/g)) {
        stringified = localStorage.getItem(key);
        console.log(localStorage.getItem(key))
        detailsOfPeople = JSON.parse(stringified);
        addNewLineElement(detailsOfPeople);
    }
});
var form = document.getElementById('addForm');
form.addEventListener('submit', addItem);
function addItem(e) {
    e.preventDefault()

    var expense = document.getElementById('expense').value;
    var description = document.getElementById('description').value;
    var email = document.getElementById('email').value;

    if (expense > 0 && description.length > 0 && email.length > 0) {
        var object = {
            expense: expense,
            email: email,
            description: description
        }
        localStorage.setItem("userDetails" + email + expense + description, JSON.stringify(object))
        addNewLineElement(object)
    }
}

function addNewLineElement(object) {
    var itemList = document.getElementById('items');
    //itemList.addEventListener('click', removeItem);
    var li = document.createElement('li')
    li.className = 'list-group-item'
    li.appendChild(document.createTextNode(object.expense + " " + object.description + " " + object.email))
    var nbtn = document.createElement('button')
    nbtn.className = "btn btn-danger btn-sm float-right delete"
    nbtn.appendChild(document.createTextNode('del'))
    li.append(nbtn)
    itemList.append(li)

    //nbtn.addEventListener('click', removeItem)

    nbtn.addEventListener("click", () => {
        // console.log("userDetails" + object.email);
        // console.log(keys)
        var username = "userDetails" + object.email + object.expense + object.description
        // console.log(username)
        // console.log(localStorage.getItem(username))
        localStorage.removeItem(username);
        //console.log(keys)
        li.remove();
        //console.log('deleted'+object.email)

    });

    var edit = document.createElement('button')
    edit.className = "btn btn-danger btn-sm float-right ";
    edit.appendChild(document.createTextNode('edit'));
    edit.style.background = 'green'
    li.appendChild(edit)
    edit.addEventListener('click', editItem)

    function editItem(e) {
        var username = "userDetails" + object.email + object.expense + object.description

        localStorage.removeItem(username);


        li.remove()


    }

}





