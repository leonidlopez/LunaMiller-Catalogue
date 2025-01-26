const gramPrice10k = 35.57;
const gramPrice14k = 49.30;

const goldLabor = 1.3;
const italianGoldLabor = 1.8;

const gold10k = "10k";
const gold14k = "14k";

const goldTypeItalian = "italian gold";
const goldTypeRegular = "gold"; 


// adjust the prices on load.
window.onload = (event) => {
for (var i=0; i < document.querySelectorAll(".price").length; i++) {
    
    document.querySelectorAll(".price")[i].innerHTML = calculatePrice(
        document.querySelectorAll(".karats")[i].innerHTML.toLowerCase().trim(),
        document.querySelectorAll(".avg-weight")[i].innerHTML.trim(),
        document.querySelectorAll(".gold-type")[i].innerHTML.toLowerCase().trim()
    );
}};

// calculate the price of gold based on the karats and weight.
function calculatePrice(karats, weight, goldType) {
    // defines the price for gold
    if (goldType === goldTypeRegular) {
        if (karats === gold10k) {
            return (gramPrice10k * weight).toFixed(2);
        }
        if (karats === gold14k) {
            return (gramPrice14k * weight).toFixed(2);
        }
        else {
            return "Price not available";
        }
    }
    // defines the price for Italian Gold
    else if (goldType === goldTypeItalian) {
        if (karats === gold10k) {
            return ((gramPrice10k * weight) * 1.2).toFixed(2);
        }
        if (karats === gold14k) {
            return ((gramPrice14k * weight) * 1.2).toFixed(2);
        }
        else {
            return "Price not available";
        }
    } else {
        return "Price not available";
    }
}