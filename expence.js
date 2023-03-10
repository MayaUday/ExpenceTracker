function saveToLocalStorage(event){
    event.preventDefault();
    const ExpAmount = event.target.amount.value;
    const Description = event.target.description.value;
    const Category = event.target.categories.value;

        const myobj = {
            ExpAmount :  ExpAmount,
            Description : Description,
            Category :  Category 
        };

        localStorage.setItem(myobj.Description,JSON.stringify(myobj));

        saveOnScreen(myobj);
}

function saveOnScreen(myObj){
    const parentEle = document.getElementById('listOfItems');
    const childEle = document.createElement('li');
    childEle.textContent = myObj.ExpAmount + ' - ' + myObj.Description + ' - ' + myObj.Category;

    const deleteButton = document.createElement('input');
    deleteButton.type = "button";
    deleteButton.value = "Delete";
    deleteButton.onclick = () => {
        localStorage.removeItem(myObj.Description);
            parentEle.removeChild(childEle);
    }

    const EditButton = document.createElement('input');
    EditButton.type = "button";
    EditButton.value = "Edit";
    EditButton.onclick = () => {
        localStorage.removeItem(myObj.Description);
        parentEle.removeChild(childEle);
            document.getElementById("amount").value = myObj.ExpAmount;
            document.getElementById("description").value = myObj.Description;
            document.getElementById("categories").value = myObj.Category; 
        }

    childEle.appendChild(deleteButton);
    childEle.appendChild(EditButton);
    parentEle.appendChild(childEle);
}     
    