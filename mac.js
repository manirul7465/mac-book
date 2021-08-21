// best price
const bestPrice = document.getElementById("best-price");

// extra memory
const extraMemoryCost=document.getElementById("memory-cost");

// Extra storage
const extraStoregCost=document.getElementById("storeg-cost");

// Shipment cost
const shipingCost=document.getElementById("shiping-cost");

// total cost
const totalPrice = document.getElementById("total");
    // -----bonus----\\
   const finale= document.getElementById("finale-total");

document.getElementById('unfiedMemory8gb').addEventListener('click',function () {
    extraMemoryCost.innerText=0;
    calculate();
});
    document.getElementById("unfiedMemory16gb").addEventListener('click',function () {
   extraMemoryCost.innerText= 180;
   calculate();
});
// function calculate
function calculate(){
    const best = parseInt(bestPrice.innerText);
    const memoryCost = parseInt(extraMemoryCost.innerText);
    const storageCost = parseInt(extraStoregCost.innerText);
    const delivery = parseInt(shipingCost.innerText);
    const grandTotal = best + memoryCost + storageCost + delivery;
    totalPrice.innerText = grandTotal;
    finale.innerText = grandTotal;

}
// storeg
document.getElementById("storeg256").addEventListener('click',function () {
    extraStoregCost.innerText= 0;
    calculate();
});
document.getElementById("storeg512").addEventListener('click',function () {
    extraStoregCost.innerText= 100;
    calculate();
});
document.getElementById("storeg1TB").addEventListener('click',function () {
    extraStoregCost.innerText= 180;
    calculate();
});

// shipment cost
document.getElementById("free-delivery").addEventListener('click',function () {
    shipingCost.innerText= 0;
    calculate();
});

document.getElementById("delivery-charge").addEventListener('click',function () {
    shipingCost.innerText= 20;
    calculate();
});

// -------------------------bonus----------------------\\
document.getElementById("apply-buton").addEventListener('click',function () {
    const steveInput=document.getElementById('steve-input');
    const aplayButton=steveInput.value;
    steveInput.value='';
    if (aplayButton=="stevekaku"){
        const best = parseInt(bestPrice.innerText);
        const memoryCost = parseInt(extraMemoryCost.innerText);
        const storageCost = parseInt(extraStoregCost.innerText);
        const delivery = parseInt(shipingCost.innerText);
        const grandTotal = best + memoryCost + storageCost + delivery;
        finale.innerText = grandTotal - (grandTotal * 0.2);
    }
})

// --------------------------------------------------------------END--------------------------------------------------------\\