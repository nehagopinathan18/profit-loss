const purchaseStockPrice = document.querySelector("#stockPrice");
const stocksQuantity = document.querySelector("#quantity");
const currentStockPrice = document.querySelector("#currentStockPrice");
const checkBtn = document.querySelector("#check-btn");
const output = document.querySelector('#output');
function show() {
    output.style.display = 'block';
}
function profitandloss(initial, quantity, current) {
    initial = Number(purchaseStockPrice.value);
    quantity = Number(stocksQuantity.value);
    current = Number(currentStockPrice.value);
    if (initial > current) {
        var loss = (initial - current) * quantity;
        var losspercentage = ((loss / initial) * 100).toFixed(2);
        show();
        output.innerHTML = "The loss is " + loss +' and the percentage is ' + losspercentage + "%";
        document.body.style.backgroundColor = "#B91C1C";
        console.log(losspercentage, "loss");
    } else if (initial < current) {
        var profit = (current - initial) * quantity;
        var profitpercentage = ((profit / initial) * 100).toFixed(2);
        show();
        output.innerHTML = 'The profit is '+ profit +' and the percentage is '+ profitpercentage + '%';
        document.body.style.backgroundColor = "#10B981";
        console.log(profitpercentage, "profit");
    } else {
        show();
        output.innerHTML = "No gain, no loss";

        console.log("no gain no loss");
    }
}

checkBtn.addEventListener("click", profitandloss);

