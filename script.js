
function getpage(){
    let search = document.querySelector('.searchsection').value; 

    
    alert(search);
    if (search=="grocery"){
        window.open("grocery.html",self);
        
    }
    else if(search=="cosmetic"||search=="kajal"||search=="lipstick"||search=="foundation"){
        window.open("cosmetic.html",self);
    }
    else if(search=="electronics"||"headphone"||"watch"||"phone"){
        window.open("electronics.html",self);
    }
    else if(search=="furniture"||"bed"||"sofa"||"table"){
        window.open("furniture.html",self);
    }
    else if(search=="home appliances"||"tv"||"washingmachine"||"fridge"){
        window.open("home-appliances.html",self);
    }
    else if(search=="fashion"){
        window.open("fashion.html",self);
    }
    else{
        alert("There is nothing to search")
    }
    
}
