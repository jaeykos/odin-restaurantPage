function clearContent(){
    
    while (content.firstChild) {
        content.firstChild.remove()
    }
    console.log("clear content worked!");
}
export{clearContent};