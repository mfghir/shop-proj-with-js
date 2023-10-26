const searchInput = document.getElementById("search-input");
const products = document.querySelectorAll(".product-item");
const buttons = document.querySelectorAll(".filter");

const searchHandler = (e) => {
  const searchValue = e.target.value.toLowerCase().trim();
  products.forEach((product) => {
    const productName = product.children[1].innerText.toLowerCase();
    if (productName.includes(searchValue)) {
        product.style.display = "block";
    }else{
        product.style.display = "none";
    }

  });
};

const filterHandler=(e)=>{
  const filter = e.target.dataset.filter
}

searchInput.addEventListener("keyup",searchHandler)
buttons.forEach(buttons=>{
  buttons.addEventListener('click',filterHandler)
})