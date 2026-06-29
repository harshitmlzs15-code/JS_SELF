const card = document.createElement("div");

card.style.cssText = `
    width: 350px;
    margin: 50px auto;
    padding: 25px;
    border-radius: 15px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.2);
    background: white;
    font-family: Arial, sans-serif;
`;

card.innerHTML = `
    <h2 style="text-align:center;">Discount Calculator</h2>

    <form id="discountForm">

        <label>MRP</label><br>
        <input
            type="number"
            id="mrp"
            required
            style="
                width:100%;
                padding:10px;
                margin:8px 0 15px;
                box-sizing:border-box;
            "
        >

        <label>Discount %</label><br>
        <input
            type="number"
            id="discount"
            required
            style="
                width:100%;
                padding:10px;
                margin:8px 0 15px;
                box-sizing:border-box;
            "
        >

        <button type="submit">Discount Amount</button>
        <button type="button" id="finalBtn">Final Price</button>
        <button type="reset">Reset</button>

    </form>

    <h3 id="result"></h3>
`;

document.getElementById("app").appendChild(card);

// So appendChild() means:
// "Take this element I've created and insert it into the webpage as a child of another element."
// Without appendChild(), your card is never added to the DOM, so nothing shows up on the screen.

// Discount Amount
document
    .getElementById("discountForm")
    .addEventListener("submit", function(e) {
        e.preventDefault();

        let MRP = Number(document.getElementById("mrp").value);
        let percent = Number(document.getElementById("discount").value);

        let discount = ((percent / 100) * MRP).toFixed(2);

        document.getElementById("result").innerHTML =
            `Discount Amount: ₹${discount}`;
    });

// Final Price
document
    .getElementById("finalBtn")
    .addEventListener("click", function() {

        let MRP = Number(document.getElementById("mrp").value);
        let percent = Number(document.getElementById("discount").value);

        let discount = (percent / 100) * MRP;
        let finalPrice = (MRP - discount).toFixed(2);

        document.getElementById("result").innerHTML =
            `Final Price: ₹${finalPrice}`;
    });

// Clear result on reset
document
    .getElementById("discountForm")
    .addEventListener("reset", function() {
        document.getElementById("result").innerHTML = "";
    });