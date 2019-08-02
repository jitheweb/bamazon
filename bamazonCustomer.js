
var mysql = require('mysql');
var inquirer = require('inquirer');
var Table = require("cli-table2");


var connection = mysql.createConnection({
    host: "localhost",

    port: 8889,

    user: "root",

    password: "root",
    database: "bamazon"
});

connection.connect();

var displayTable = function() {
   var query = "SELECT * FROM products";
   connection.query(query, function(err, res){
       if(err) throw err;
        
       var table = new Table({
        head: ['item ID', 'product name', 'department', 'price', 'stock'],
        colWidths: [12, 50, 8],
        colAligns: ["center", "left", "right"],
        style: {
            head : ["blue"],
            compact: true}
    });
    for(var i = 0; i < res.length; i++){
        table.push([res[i].item_id, res[i].product_name, res[i].department_name, res[i].price, res[i].stock_quantity]);
    }
	console.log(table.toString());
	shoppingPrompt();
   });
  
    
};

 function shoppingPrompt(){
	inquirer.prompt([
	{
		name: "ID",
		type: "input",
		message:"Please enter Item ID you like to purhcase.",
		filter:Number
	},
	{
		name:"Quantity",
		type:"input",
		message:"How many items do you wish to purchase?",
		filter:Number
	},

 ]).then(function(answers){
 	var quantityNeeded = answers.Quantity;
 	var IDrequested = answers.ID;
 	purchaseOrder(IDrequested, quantityNeeded);
 });
};

function purchaseOrder(ID, amtNeeded){
	connection.query('Select * FROM products WHERE item_id = ' + ID, function(err,res){
		if(err){console.log(err)};
		if(amtNeeded <= res[0].stock_quantity){
			var totalCost = res[0].price * amtNeeded;
			console.log("Good news your order is in stock!");
			console.log("Your total cost for " + amtNeeded + " " +res[0].product_name + " is " + totalCost + " Thank you!");

			connection.query("UPDATE products SET stock_quantity = stock_quantity - " + amtNeeded + " WHERE item_id = " + res[0].item_id);
		} else{
			console.log("Insufficient quantity, sorry we do not have enough " + res[0].product_name + "to complete your order.");
		};
		displayTable();
	});
};

 displayTable(); 




