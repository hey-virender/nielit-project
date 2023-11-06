const products = [
    { id: 1, name: "Product 1" },
    { id: 2, name: "Product 2" },
    { id: 3, name: "Product 3" },
    // Add more product data here
  ];
  
  const searchInput = document.getElementById("searchInput");
  const productList = document.getElementById("productList");
  
  searchInput.addEventListener("input", () => {
    const searchValue = searchInput.value.toLowerCase();
    const results = products.filter(product => product.name.toLowerCase().includes(searchValue));
    displayResults(results);
  });
  
  function displayResults(results) {
    productList.innerHTML = "";
  
    if (results.length === 0) {
      productList.innerHTML = "<li>No products found</li>";
    } else {
      results.forEach(product => {
        const listItem = document.createElement("li");
        listItem.textContent = product.name;
        productList.appendChild(listItem);
      });
    }
  }