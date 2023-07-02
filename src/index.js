
import {clearContent} from "./clearContent.js"
import * as insert from "./insertContent.js"

insert.insertMenu()

document.addEventListener("click",e =>{
    if (e.target.className == "tab"){clearContent();}
    
    if (e.target.id == "mainTab"){
        insert.insertMain();        
    }else if (e.target.id == "menuTab"){
        insert.insertMenu();
    }else if (e.target.id == "contactTab"){
        insert.insertContact();
    }
    
})