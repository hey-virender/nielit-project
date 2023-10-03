
function getpage(){
    let search = document.querySelector('.searchsection').value; 

    
    alert(search);
    if (search=="grocery"||"aata"||"oil"||"grains"){
        window.open("grocery.html",self);
        
    }
    else if(search=="cosmetic"){
        window.open("cosmetic.html",self);
    }
    else if(search=="electronics"){
        window.open("electronics.html",self);
    }
    else if(search=="furniture"){
        window.open("furniture.html",self);
    }
    else if(search=="home appliances"){
        window.open("home-appliances.html",self);
    }
    else if(search=="fashion"){
        window.open("fashion.html",self);
    }
    else{
        alert("There is nothing to search")
    }
    
}
