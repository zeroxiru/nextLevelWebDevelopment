{// Problem 6:
    // Description: Define an interface Product and create a function to find the product with the highest price in an array. If the array is empty, return null.

    // Interface & Function Signature:

    interface Product {
        name: string;
        price: number;
    }

    const getMostExpensiveProduct = (products: Product[]): Product | null => {
        if (!products || products.length === 0) {
            return null;
        }

        let expensiveProduct = products[0];
        for (let i = 1; i < products.length; i++) {
            if (products[i].price > expensiveProduct.price) {
                expensiveProduct = products[i];
            }
        }

        return expensiveProduct;
    }
    const products = [
        { name: "Pen", price: 100 },
        { name: "Notebook", price: 25 },
        { name: "Bag", price: 50 }
    ];
    console.log(getMostExpensiveProduct(products));
    console.log(getMostExpensiveProduct([]));
    //const result1 = getMostExpensiveProduct();

    //console.log(result);

}