document.addEventListener('DOMContentLoaded', function() {
    const menu = {
        "mainDish": [
            { name: "Steak", price: 20 },
            { name: "Salmon", price: 18 },
            { name: "Pasta", price: 15 }
        ],
        "sideItems": [
            { name: "Fries", price: 5 },
            { name: "Salad", price: 6 },
            { name: "Soup", price: 4 }
        ],
        "drinks": [
            { name: "Soda", price: 2 },
            { name: "Water", price: 0 },
            { name: "Wine", price: 8 }
        ],
        "desserts": [
            { name: "Cake", price: 7 },
            { name: "Ice Cream", price: 4 },
            { name: "Pie", price: 6 }
        ],
        "soupSalad": [
            { name: "Soup", price: 4 },
            { name: "Salad", price: 6 }
        ]
    };

    const menuContainer = document.getElementById('menu');

    function displayMenu(category) {
        const categoryContainer = document.getElementById(category);
        menu[category].forEach(item => {
            const menuItem = document.createElement('div');
            menuItem.classList.add('menu-item');
            menuItem.innerHTML = `<input type="checkbox" name="${category}" value="${item.price}">${item.name} - $${item.price.toFixed(2)}`;
            categoryContainer.appendChild(menuItem);
        });
    }

    displayMenu('mainDish');
    displayMenu('sideItems');
    displayMenu('drinks');
    displayMenu('desserts');
    displayMenu('soupSalad');

    function calculateTotal() {
        const salesTaxRate = parseFloat(document.getElementById('sales-tax-rate').value);
        const tipAmount = parseFloat(document.getElementById('tip-amount').value);

        let total = 0;

        const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
        checkboxes.forEach(checkbox => {
            total += parseFloat(checkbox.value);
        });

        const salesTax = total * (salesTaxRate / 100);
        total += salesTax;

        if (!isNaN(tipAmount)) {
            total += tipAmount;
        }

        const totalDisplay = document.getElementById('total');
        totalDisplay.textContent = `Total: $${total.toFixed(2)}`;
    }
});
