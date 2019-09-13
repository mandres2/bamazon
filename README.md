# bamazon

## Motive:
The primary motive was to solidify my understandings of the foundational concepts utilizing both MySQL and Node.js.

## Getting Started

:black_small_square: To get started: You will need to have an updated IDE (preferably VS Code), and the latest version of Node.js, and an up-to-date version of MySQL

### Prerequisites

:black_small_square: IDE: Microsoft Visual Studios 1.37.1 (or higher).
<br>
:black_small_square: Node.js (Version: 12.9.0 or higher)
<br>
:black_small_square: MySQL (Version 8.0.12 or higher)

## Customer Interface
The customer interface allows the user to view the current inventory of store items: item IDs, descriptions, department in which the item is located and price. The user is then able to purchase one of the existing items by entering the item ID and the desired quantity. If the selected quantity is currently in stock, the user's order is fulfilled, displaying the total purchase price and updating the store database. If the desired quantity is not available, the user is prompted to modify their order.

:black_small_square: To run the customer interface please follow the steps below:

* git clone git@github.com:mandres2/bamazon.git
* cd bamazon
* npm init -y
* node customer.js

## Manager Interface
The manager interface presents a list of four options, as below:

? Please select an option: (Use arrow keys)
❯ View Products for Sale
  View Low Inventory
  Add to Inventory
  Add New Product
The View Products for Sale option allows the user to view the current inventory of store items: item IDs, descriptions, department in which the item is located, price, and the quantity available in stock.

The View Low Inventory option shows the user the items which currently have fewer than 100 units available.

The Add to Inventory option allows the user to select a given item ID and add additional inventory to the target item.

The Add New Product option allows the user to enter details about a new product which will be entered into the database upon completion of the form.

:black_small_square: To run the manager interface please follow the steps below:

* git clone git@github.com:mandres2/bamazon.git
* cd bamazon
* npm init -y
* node manager.js

## Deployment

<b>'git push' the files into GitHub Profile and link repository to BCS.</b>

## Built With:

<br>
:black_small_square: Microsoft Studios Visual Code (v1.37.1)
<br>
:black_small_square: MySQL (Version 8.0.12)
<br>
:black_small_square: Google Chrome
<br>
:black_small_square: Node.js v12.9.0
<br>
:black_small_square: ShareX v12.4.1 - Screen Record User Functionality and converts to GIFs
<br>

## npm Packages Used:
:black_small_square: inquirer v7.0.0
<br>
:black_small_square: mysql

## Author

**Micah Andres** - [mandres2](https://github.com/mandres2)

## License

<b>This project is licensed under the MIT License</b>

## Acknowledgments
* <b>TAs</b>- Catherine Pham, Benjamin Vaagen
<br>

* <b>Teacher</b>- Arron Linton

## Progress Log:
<br>
:heavy_check_mark: 9.9 - Review requirements. Established repository, files, and began markdown on README.md
<br>
:heavy_check_mark: 9.10 - Started working on bamazon.sql database, and customer.js
<br>
:heavy_check_mark: 9.11 - 12 - Worked on manager.js and debugging
<br>
:heavy_check_mark: 9.13 - Final polishing of application, screenshare, and deployed application.


