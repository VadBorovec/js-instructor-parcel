// Работем с коллекцией товаров в корзине:
// - getItems()
// - add(product)
// - remove(productName)
// - clear()
// - countTotalPrice()
// - increaseQuantity(productName)
// - decreaseQuantity(productName)

// { name: 'apple', price: 50 }
// { name: 'grape', price: 70 }
// { name: 'lemon', price: 60 }
// { name: 'strawberry', price: 110 }

const cart = {
    items: [],
    getItems() {
        return this.items;
    },
    add(product) {
        for (const item of this.items) {
            if (item.name === product.name) {
                item.quantity += 1;
                return;
            }
        }

        const newProduct = {
            ...product,
            quantity: 1,
        };
        this.items.push(newProduct);
    },
    remove(productName) {
        const { items } = this;
        for (let i = 0; i < items.length; i += 1) {
            const { name} = items[i];
            if (productName === name) {
                console.log('find this product: ', productName);
                items.splice(i, 1);
            }
        }
    },
    countTotalPrice() {
        let total = 0;
        const { items } = this;
        for (const { price, quantity } of items) {
            total += price * quantity;
        }
        return total;
    },
    clear() {
        this.items = [];
    },
    increaseQuantity(productName) { },
    decreaseQuantity(productName) { },
};

console.log(cart.getItems());

cart.add({ name: 'apple', price: 50 });
cart.add({ name: 'grape', price: 60 });
cart.add({ name: 'lemon', price: 60 });
cart.add({ name: 'lemon', price: 60 });
cart.add({ name: 'strawbrry', price: 110 });
cart.add({ name: 'strawbrry', price: 110 });
cart.add({ name: 'strawbrry', price: 110 });


console.table(cart.getItems());

cart.remove('apple');
console.table(cart.getItems());

console.log('TOTAL: ', cart.countTotalPrice());

cart.clear();
console.log(cart.getItems());

console.log('TOTAL: ', cart.countTotalPrice());

// cart.increaseQuantity('apple');
// console.table(cart.getItems());

// cart.decreaseQuantity('lemon');
// cart.decreaseQuantity('lemon');
// console.table(cart.getItems());
