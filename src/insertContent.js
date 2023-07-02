function insertMain(){
    
    insertElementToContent("h1","Welcome to the page!")

    let node = document.createElement("img");
    node.src = "./src/mainImg.jpg";
    node.style.width = "30rem"
    content.appendChild(node);
}

function insertMenu(){
    insertElementToContent("h2", "Appetizer")
    insertElementToContent("p","French Fries")
    insertElementToContent("p","Tacos")
    insertElementToContent("p","Salad")

    insertElementToContent("h2","Main")
    insertElementToContent("p","Steak")
    insertElementToContent("p","Buger")
    insertElementToContent("p","Ribs")

    insertElementToContent("h2","Dessert")
    insertElementToContent("p","Cheesecake")
    insertElementToContent("p","Brownie")
}


function insertContact(){
    insertElementToContent("p","Phone number: 232-34x-34xx")
    insertElementToContent("p","Email: Restaurant@restaurant.com")
}

function insertElementToContent(elementType, text){
    let node = document.createElement(elementType);
    node.innerHTML = text
    content.appendChild(node);
}

export{insertMain, insertMenu, insertContact}