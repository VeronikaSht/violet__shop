var plantRadio = document.getElementsByName('plant');
var price = document.getElementsByClassName('products__item--buy--price')[0];
var productsWrapper = document.getElementsByClassName('products')[0];
var productItems = document.getElementsByClassName('products__item')[0];
var childPrice = 25;
var leafPrice = 10;
var clickCounterOne = 0;
var clickCounterTwo = 0;

console.log(plantRadio);

plantRadio[0].addEventListener('click', function(e) {
    clickCounterTwo = 0;
    clickCounterOne++;

    // removing checked radio when clicked 2 times and changing price
    if (e.currentTarget.checked && clickCounterOne == 2) {
        e.currentTarget.checked = false;
        price.innerHTML = 0 + ' грн';
        clickCounterOne = 0;
    }
    else {
        price.innerHTML = childPrice + ' грн';
        e.currentTarget.checked = true;
    }
});

plantRadio[1].addEventListener('click', function(e) {
    clickCounterOne = 0;
    clickCounterTwo++;

    // removing checked radio when clicked 2 times and changing price
    if (e.currentTarget.checked && clickCounterTwo == 2) {
        e.currentTarget.checked = false;
        price.innerHTML = 0 + ' грн';
        clickCounterTwo = 0;
    }
    else {
        price.innerHTML = leafPrice + ' грн'
        e.currentTarget.checked = true;
    }
});

// Window.addEventListener('load', function() {
//     productsWrapper.appendChild(productItems);
// });

