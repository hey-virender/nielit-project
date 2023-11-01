searchButton.addEventListener('click', getproduct);
function getproduct() {
    let search = document.querySelector('.searchsection').value.toLowerCase();
    const pageMappings = {
        'grocery': '../grocery.html',
        'cosmetic': '../cosmetic.html',
        'electronic': '../electronics.html',
        'fashion': '../fashion.html',
        'furniture': '../furniture.html',
        'home appliance': '../home-appliances.html',
        'atta': 'atta.html',
        'flour': "atta.html",
        'bed': 'bed.html',
        'foundation': 'foundation.html',
        'fridge': 'fridge.html',
        'grains': 'grains.html',
        'headphone': 'headphone.html',
        'kajal': 'kajal.html',
        'kids fashion': 'kids-f.html',
        'lipstick': 'lipstick.html',
        'men fashion': 'men-f.html',
        'oil': 'oil.html',
        'phone': 'phone.html',
        'sofa': 'sofa.html',
        'table': 'table.html',
        'television': 'tv.html',
        'washing machine': 'washing-machine.html',
        'watch': 'watch.html',
        'women fashion':'products/women-f.html'

    };

    if (search in pageMappings) {
        const url = pageMappings[search];
        window.open(url,'_self');
    }
 else{ 
        alert("Oops, Invalid search or product not available. More products will be added soon.");
    }
}
  // Listen for user input in the search bar and show suggestions
  const searchInput = document.getElementById('searchInput');
  const suggestions = document.getElementById('suggestions');
  
  const suggestionList = [
      'grocery',
      'cosmetic',
      'electronic',
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
  
