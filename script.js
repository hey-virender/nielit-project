
// searchbar functionality added by virender chauhan
// function getpage(){
//     let s = document.querySelector('.searchsection').value; 
//     let search=s.toLowerCase();
//     if (search=="grocery"||search=="groceries"){
//         window.open("grocery.html",self)    
//     }
//     else if(search=="cosmetic"||search=="comsetics"){
//         window.open("cosmetic.html",self);
//     }
//     else if(search=="electronics"){
//         window.open("electronics.html",self);
//     }
//     else if(search=="furniture"||search=="furnitures"){
//         window.open("furniture.html",self);
//     }
//     else if(search=="home appliances"|| search=="homeappliances"||search=="homeappliance"||search=="home appliance"){
//         window.open("home-appliances.html",self);
//     }
//     else if(search=="fashion"){
//         window.open("fashion.html",self);
//     }
//     else if(search=="atta"||search=="flour"){
//         window.open("Product/atta.html",self);
//     }
//     else if(search=="bed"){
//         window.open("Product/atta.html",self);
//     }
//     else if(search=="foundation"){
//         window.open("Product/atta.html",self);
//     }
//     else if(search=="fridge" || search == "refridgerator"){
//         window.open("Product/atta.html",self);
//     }
//     else if(search=="grains" || search == "grain" || search == "daal"){
//         window.open("Product/atta.html",self);
//     }
//     else if(search=="headphone" || search == "headphones"){
//         window.open("Product/atta.html",self);
//     }
//     else if(search=="kajal" || search == "eyeliner"){
//         window.open("Product/atta.html",self);
//     }
//     else if(search=="kids fashion"||search=="kids"||search=="kid"){
//         window.open("Product/atta.html",self);
//     }
//     else if(search=="lipstick"||search=="lipsticks"){
//         window.open("Product/atta.html",self);
//     }
//     else if(search=="men"||search=="men fashion"||search=="man"){
//         window.open("Product/atta.html",self);
//     }
//     else if(search=="oil"){
//         window.open("Product/oil.html",self);
//     }
//     else if(search=="phone"||search=="smartphone"){
//         window.open("Product/atta.html",self);
//     }
//     else if(search=="sofa" || search === "sofaset" || search == "sofa set"){
//         window.open("Product/atta.html",self);
//     }
//     else if(search=="table"){
//         window.open("Product/atta.html",self);
//     }
//     else if(search=="tv" || search == "television"){
//         window.open("Product/atta.html",self);
//     }
//     else if(search=="washing machine"){
//         window.open("Product/atta.html",self);
//     }
//     else if(search=="watch" || search=="smartwatch"){
//         window.open("Product/atta.html",self);
//     }
//     else if(search=="women fashion"||search=="women"||search=="woman"){
//         window.open("Product/atta.html",self);
//     }
//     else{
//         alert("Oops, Invalid search or product not available. More products will be added soon.");
//     }


//new and shorter code for searchbar
function getpage() {
    let search = document.querySelector('.searchsection').value.toLowerCase();
    const pageMappings = {
        'grocery': 'grocery.html',
        'groceries': 'grocery.html',
        'cosmetic': 'cosmetic.html',
        'cosmetics': 'cosmetic.html',
        'electronics': 'electronics.html',
        'electronic': 'electronics.html',
        'fashion': 'fashion.html',
        'furniture': 'funriture.html',
        'home appliances': 'home-appliances.html',
        'atta': 'products/atta.html',
        'flour': "products/att.html",
        'bed': 'products/bed.html',
        'foundation': 'products/foundation.html',
        'fridge': 'products/fridge.html',
        'grains': 'products/grains.html',
        'headphone': 'products/headphone.html',
        'kajal': 'products/kajal.html',
        'kids fashion': 'products/kids-f.html',
        'lipstick': 'products/lipstick.html',
        'men fashion': 'products/men-f.html',
        'oil': 'products/oil.html',
        'phone': 'products/phone.html',
        'sofa': 'products/sofa.html',
        'table': 'products/table.html',
        'television': 'products/tv.html',
        'washing machine': 'products/washing-machine.html',
        'watch': 'products/watch.html',

    };

    if (search in pageMappings) {
        try {
            window.open(pageMappings[search], self);
        } catch {
            var basedirectory = "products/" + pageMappings[search];
            window.open(basedirectory, self);
        }

        finally {
            var basedirectory = "../" + pageMappings[search];
            window.open(basedirectory, self);


        };
    }
    else {
        alert("Oops, Invalid search or product not available. More products will be added soon.");
    }
}
const searchInput = document.getElementById('searchInput');
const suggestions = document.getElementById('suggestions');

const suggestionList = [
    'grocery',
    'cosmetic',
    'electronics',
    'furniture',
    'fashion',
    'home appliances',
    'atta',
    'grains',
    'bed',
    'foundation',
    'fridge',
    'headphone',
    'kajal',
    'kids fashion',
    'lipstick',
    'men fashion',
    'oil',
    'phone',
    'sofa',
    'table',
    'tv',
    'washing machine',
    'watch',
    'women fashion',


];

// Listen for user input in the search bar
searchInput.addEventListener('input', function () {
    const search = searchInput.value.toLowerCase();
    suggestions.innerHTML = ''; // Clear previous suggestions

    if (search.length === 0) {
        return; // If the search input is empty, don't display suggestions.
    }

    const matchingSuggestions = suggestionList.filter(term => term.includes(search));
    if (matchingSuggestions.length > 0) {
        matchingSuggestions.forEach(term => {
            const suggestionItem = document.createElement('div');
            suggestionItem.textContent = term;
            suggestionItem.addEventListener('click', () => {
                // When a suggestion is clicked, populate the search input with the suggestion.
                searchInput.value = term;
                suggestions.innerHTML = ''; // Clear suggestions.
            });
            suggestions.appendChild(suggestionItem);
        });
    }
});


// }
// next js goals
// better user interaction
// client side validations
// cart functionality like add or remove item quantity of item