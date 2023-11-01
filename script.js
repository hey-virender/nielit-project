
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

searchButton.addEventListener('click', getpage);
function getpage() {
    const search = document.getElementById('searchInput').value.toLowerCase();
    const pageMappings = {
        'grocery': 'grocery.html',
        'cosmetic': 'cosmetic.html',
        'electronic': 'electronics.html',
        'furniture': 'furniture.html',
        'fashion': 'fashion.html',
        'home appliance': 'home-appliances.html',
        'atta': 'products/atta.html',
        'grains': 'products/grains.html',
        'bed': 'products/bed.html',
        'foundation': 'products/foundation.html',
        'fridge': 'products/fridge.html',
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
        'women fashion': 'products/women-f.html'
    };

    if (search in pageMappings) {
        const url = pageMappings[search];
        window.open(url, '_self'); // Open in the same window
    } else {
        alert("Oops, Invalid search or product not available. More products will be added soon.");
    }
}

const searchInput = document.getElementById('searchInput');
const suggestions = document.getElementById('suggestions');

const suggestionList = [
    'grocery',
    'cosmetic',
    'electronic',
    'furniture',
    'fashion',
    'home appliance',
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
    'telvision',
    'washing machine',
    'watch',
    'women fashion',


];

// Listen for user input in the search bar and show suggestions
searchInput.addEventListener('input', function () {
    const search = searchInput.value.toLowerCase();
    const matchingSuggestions = suggestionList.filter(term => term.includes(search));

    // Clear suggestions before displaying new ones
    suggestions.innerHTML = '';

    if (search.length === 0) {
        suggestions.style.display = 'none';
    } else if (matchingSuggestions.length > 0) {
        suggestions.style.display = 'block';
        matchingSuggestions.forEach(term => {
            const suggestionItem = document.createElement('div');
            suggestionItem.textContent = term;
            suggestionItem.addEventListener('click', function () {
                searchInput.value = term;
                suggestions.innerHTML = '';
                suggestions.style.display = 'none'; // Hide suggestions after selection
            });
            suggestions.appendChild(suggestionItem);
        });
    } else {
        suggestions.style.display = 'none'; // Hide suggestions if there are no matches
    }
});






// }
// next js goals
// better user interaction
// client side validations
// cart functionality like add or remove item quantity of item