const hamburger_button = document.querySelector('.hamburger-btn');

hamburger_button.addEventListener('change', (event) => {
    window.scrollTo(0, 0);
    document.documentElement.setAttribute('hamburger-btn-checked', event.target.checked);
});
  
//For product.html
function product_sug() {
    let idea = prompt("Please enter your suggestion");
    if (idea != "" && idea != null){
        document.getElementById("product_sug_btn").innerHTML = "Thank you for your suggestion!"
    }
}
