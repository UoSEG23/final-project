const hamburger_button = document.querySelector('.hamburger-btn');

hamburger_button.addEventListener('change', (event) => {
    document.body.setAttribute('hamburger-btn-checked', event.target.checked);
});
  
//For product.html
function product_sug() {
    let idea = prompt("Please enter your suggestion");
    if (idea != ""){
        document.getElementById("product_sug_btn").innerHTML = "Thank you for your suggestion!"
    }
}
