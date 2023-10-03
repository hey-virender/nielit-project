
function getpage(){
    let s = document.querySelector('.searchsection').value; 
    let search=s.toLowerCase();
    if (search=="grocery"||search=="groceries"){
        window.open("grocery.html",self)    
    }
    else if(search=="cosmetic"||search=="comsetics"){
        window.open("cosmetic.html",self);
    }
    else if(search=="electronics"){
        window.open("electronics.html",self);
    }
    else if(search=="furniture"||search=="furnitures"){
        window.open("furniture.html",self);
    }
    else if(search=="home appliances"|| search=="homeappliances"||search=="homeappliance"||search=="home appliance"){
        window.open("home-appliances.html",self);
    }
    else if(search=="fashion"){
        window.open("fashion.html",self);
    }
    else if(search=="atta"||search=="flour"){
        window.open("Product/atta.html",self);
    }
    else if(search=="oil"){
        window.open("Product/oil.html",self);
    }
    else if(search=="grains"||search=="grain"||search=="daal"){
        window.open("Product/grains.html",self);
    }
    else if(search=="women fashion"||search=="women"||search=="woman"){
        window.open("Product/atta.html",self);
    }
    else if(search=="kids fashion"||search=="kids"||search=="kid"){
        window.open("Product/atta.html",self);
    }
    else if(search=="men"||search=="men fashion"||search=="man"){
        window.open("Product/atta.html",self);
    }
    else if(search=="phone"||search=="smartphone"){
        window.open("Product/atta.html",self);
    }
    else if(search=="atta"){
        window.open("Product/atta.html",self);
    }
    else if(search=="atta"){
        window.open("Product/atta.html",self);
    }
    else if(search=="atta"){
        window.open("Product/atta.html",self);
    }
    else if(search=="atta"){
        window.open("Product/atta.html",self);
    }
    else if(search=="atta"){
        window.open("Product/atta.html",self);
    }
    else if(search=="atta"){
        window.open("Product/atta.html",self);
    }
    else{
        alert("There is nothing to search");
    }
    
}
