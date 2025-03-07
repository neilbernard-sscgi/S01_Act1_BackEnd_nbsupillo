let products = [
  { name: "banana", price: 1, stockQuantity: 1, category: "fruits" },
  {
    name: "apple",
    price: 1,
    stockQuantity: 1,
    category: "fruits",
  },
];

let stop = false;
while (stop == false) {
  let operations = prompt(
    "1 if add\n2 if update\n3 if delete\n4 if display all\n5 if display one\n6 if stop"
  );
  //console.log(typeof operations);

  if (operations == 6) {
    stop = true;
  } else if (operations == 1) {
    let name = prompt("name");
    let price = prompt("price");
    let stock = prompt("stock");
    let category = prompt("category");

    let product = {
      name: name,
      price: price,
      stockQuantity: stock,
      category: category,
    };
    products[products.length] = product;
    console.log("Added new product");
  } else if (operations == 2) {
    let index = prompt("input the index");
    if (index >= products.length || index < 0) {
      console.log("Products don't exist");
    } else {
      let name = prompt("index" + index + "name");
      let price = prompt("index" + index + "price");
      let stock = prompt("index" + index + "stock");
      let category = prompt("index" + index + "category");

      let product = {
        name: name != "" ? name : products[index].name,
        price: price != "" ? price : products[index].price,
        stockQuantity: stock != "" ? stock : products[index].stockQuantity,
        category: category != "" ? category : products[index].category,
      };
      products[index] = product;
      console.log("Updated Index " + index + " products");
    }
  } else if (operations == 3) {
    let index = prompt("input the index");

    if (index >= products.length || index < 0) {
      console.log("Products don't exist");
    } else {
      products.splice(index, 1);
      console.log("Deleted Index " + index + " product");
    }
  } else if (operations == 4) {
    products.forEach((pr) => {
      if (pr.name)
        console.log(
          pr.name +
            ", " +
            pr.price +
            ", " +
            pr.stockQuantity +
            ", " +
            pr.category
        );
    });
  } else if (operations == 5) {
    let index = prompt("input the index");

    if (index >= products.length || index < 0) {
      console.log("Products don't exist");
    } else {
      console.log(products[index]);
    }
  } else {
    console.log("pick between 1 - 6");
  }
  console.log("----------------------------");
}
