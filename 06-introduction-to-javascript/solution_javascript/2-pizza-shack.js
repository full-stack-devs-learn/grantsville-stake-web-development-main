/*
1.	Pizza Shack sells the best pizza in town.

	When customers are ready to order, they should
	be able to see a list of toppings that are 
	included on each type of pizza.

	getToppings("Hawaiian") => ["Ham","Pineapple","Mushroom"]
	getToppings("Cowboy") => ["Pepperoni", "Sausage", "Beef"]
	getToppings("Supreme") => ["Pepperoni", "Sausage", "Pepper", "Onion", "Black Olives"]
	getToppings("Vegetarian") => ["Spinach", "Zucchini", "Mushroom", "Artichoke", "Tomato", "Onion"]
	getToppings("Cheese") => ["Cheese"]

*/
function getToppings (name)
{
	const hawaiian = "hawaiian";
	const cowboy = "cowboy";
	const supreme = "supreme";
	const vegetarian = "vegetarian";
	const cheese = "cheese";

	const hawaiianToppings = ["Ham", "Pineapple", "Mushroom"];
	const cowboyToppings = ["Pepperoni", "Sausage", "Beef"];
	const supremeToppings = ["Pepperoni", "Sausage", "Pepper", "Onion", "Black Olives"];
	const vegetarianToppings = ["Spinach", "Zucchini", "Mushroom", "Artichoke", "Tomato", "Onion"];
	const cheeseToppings = ["Cheese"];

	switch (name.toLowerCase())
	{
		case hawaiian:
			return hawaiianToppings;
		case cowboy:
			return cowboyToppings;
		case supreme:
			return supremeToppings;
		case vegetarian:
			return vegetarianToppings;
		case cheese:
			return cheeseToppings;
		default:
			return [];
	}

}

/*
2.	Pizza Shack sells the best pizza in town.

	When a customer places an order we make the pizza.
	the makePizza function should return a 
	pizza object with a name, and the list of toppings.

	makePizza("Hawaiian") => {
								name: "Hawaiian",
								toppings: ["Ham","Pineapple","Mushroom"]
							}

*/
function makePizza (name)
{
	const toppings = getToppings(name);

	if(toppings.length == 0)
		return {};

	return {
		name: name,
		toppings: toppings
	}
}


/*
3.	Pizza Shack sells the best custom pizza in town.

	If a customer wants to order a custom pizza they
	can order up to 3 toppings. The makeCustom function
	should create the new pizza as follows...

	makeCustom("chicken") => 
					{
						name: "Custom",
						toppings: ["chicken"]
					}

	makeCustom("chicken", "mushroom") => 
					{
						name: "Custom",
						toppings: ["chicken", "mushroom"]
					}

	makeCustom("chicken", "mushroom", "artichokes") => 
					{
						name: "Custom",
						toppings: ["chicken", "mushroom", "artichokes"]
					}

	// a custom order with no toppings is not allowed an should return
	// an empty object
	makeCustom() => {}

*/
function makeCustom (topping1, topping2, topping3)
{
	const toppings = [];
	if(topping1) toppings.push(topping1);
	if(topping2) toppings.push(topping2);
	if(topping3) toppings.push(topping3);

	if(toppings.length == 0)
		return {};

	return {
		name: "Custom",
		toppings: toppings
	}
}


/*
4.	Customers may want to order multiple pizzas on a single order.

	When a customer places an order you should create an order object.
	This includes the customer name, and an array of all the pizzas
	that they have ordered.

	createOrder("Gary", true, false, false, false, false) => 
		{
			customer: "Gary",
			pizzas: [
				{
					name: "Hawaiian",
					toppings: [
						"Ham",
						"Pineapple",
						"Mushroom"
					]
				}
			]
		}
	

	createOrder("Gary", true, false, false, false, true) => 
		{
			customer: "Gary",
			pizzas: [
				{
					name: "Hawaiian",
					toppings: [
						"Ham",
						"Pineapple",
						"Mushroom"
					]
				},
				{
					name: "Cheese",
					toppings: [
						"Cheese"
					]
				}
			]
		}


*/
function createOrder (customer, hawaiian, cowboy, supreme, vegetarian, cheese)
{
	const pizzas = [];
	if(hawaiian)
		pizzas.push(makePizza("Hawaiian"));
	
	if(cowboy)
		pizzas.push(makePizza("Cowboy"));
	
	if(supreme)
		pizzas.push(makePizza("Supreme"));
	
	if(vegetarian)
		pizzas.push(makePizza("Vegetarian"));
	
	if(cheese)
		pizzas.push(makePizza("Cheese"));
	

	if(pizzas.length == 0)
		return {};

	return {
		customer: customer,
		pizzas: pizzas
	}
}
