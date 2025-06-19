


function calculateTotal()
{
    // get the DOM elements
    const priceInput = document.getElementById("priceInput");
    const quantityIput = document.getElementById("quantityInput");
    const totalContainer = document.getElementById("totalContainer");

    // perform calculations from user input
    const price = parseFloat(priceInput.value);
    const quantity = parseInt(quantityIput.value);
    let total = price * quantity;

    if(isNaN(total)) {
        total = "Enter some REAL numbers please";
    }
    else{
        total = `$ ${parseFloat(total.toFixed(2)).toLocaleString()}`; 
    }

    // display the result
    totalContainer.innerText = total;

}
