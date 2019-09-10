connection.connect(function (err) {
    if (err) throw err;
    displayItemsForSale();
});

function displayItemsForSale() {
    connection.query(
        "SELECT item_id, product_name, price, stock_quantity FROM products WHERE stock_quantity>0",
        function (err, res) {
            if (err) throw err;
            console.log("Id \t Name \t Price \t Quantity\n");
            for (var i = 0; i < res.length; i++) {
                console.log(
                    res[i].item_id +
                    "\t" +
                    res[i].product_name +
                    "\t" +
                    res[i].price +
                    "\t" +
                    res[i].stock_quantity +
                    "\n"
                );
            }
            promptQuestions(res.length);
        }
    );
}

function promptQuestions(length) {
    inquirer
        .prompt([{
            type: "input",
            name: "purchase_item_id",
            message: "Enter the Item Id of the product you would like to buy? 'Press C to Exit'"
        }])
        .then(function (answer) {
            var purchaseItemId = answer.purchase_item_id;
            if (purchaseItemId.toUpperCase() === "C") {
                process.exit();
            }
            inquirer
                .prompt([{
                    type: "input",
                    name: "quantity",
                    message: "How many units of the product would you like to buy?"
                }])
                .then(function (answer) {
                    if (
                        purchaseItemId > length + 1 ||
                        isNaN(purchaseItemId) ||
                        isNaN(answer.quantity)
                    ) {
                        console.log("invalid Input");
                        if (purchaseItemId > length + 1 || isNaN(purchaseItemId)) {
                            console.log("The item id is not valid.");
                        }
                        if (isNaN(answer.quantity)) {
                            console.log("Invalid quantity");
                        }
                        // connection.end();
                        displayItemsForSale();
                    } else {
                        connection.query(
                            "SELECT stock_quantity, price FROM products WHERE item_id = ?",
                            [purchaseItemId],
                            function (err, res) {
                                if (err) throw err;
                                if (answer.quantity > res[0].stock_quantity) {
                                    console.log("Insufficient quantity.");
                                } else {
                                    var updateQuantity =
                                        res[0].stock_quantity - parseFloat(answer.quantity);
                                    connection.query(
                                        "UPDATE products SET ? WHERE ?",
                                        [{
                                                stock_quantity: updateQuantity
                                            },
                                            {
                                                item_id: purchaseItemId
                                            }
                                        ],
                                        function (err, res) {
                                            if (err) throw err;
                                        }
                                    );
                                    var totalCost = res[0].price * answer.quantity;
                                    console.log(
                                        "The total price of the purchase : " + totalCost.toFixed(2)
                                    );
                                }
                                // connection.end();
                                displayItemsForSale();
                            }
                        );
                    }
                });
        });
}