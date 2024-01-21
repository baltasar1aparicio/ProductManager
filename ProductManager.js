import crypto from 'crypto';

console.log(crypto.randomBytes(5).toString('hex'));
class ProductManager {
    constructor() {
        this.products = [];
    }

    addProduct(product) {
        if (!product.title || !product.description || !product.price || !product.thumbnail || !product.code || !product.stock) {
            return "Todos los campos son obligatorios";
        }

        const exists = this.products.some((prod) => prod.code === product.code);
        if (exists) {
            return "Producto ya existente";
        } else {
            product.id = crypto.randomBytes(10).toString('hex');
            this.products.push(product);
            return "Producto agregado con éxito";
        }
    }

    getProducts() {
        return this.products;
    }

    getProductById(id) {
        const product = this.products.find(prod => prod.id === id);
        if (product) {
            return product;
        } else {
            console.error("Not found");
            return null;
        }
    }
}

const productManager = new ProductManager

const visualizeProducts = productManager.getProducts();
console.log(visualizeProducts)

const product1 = {
    title: "Producto de prueba",
    description: "Este es un producto de prueba",
    price: 200,
    thumbnail: "Sin imagen",
    code: "abc123",
    stock: 25
}

const addProduct1 = productManager.addProduct(product1)
console.log(addProduct1)

console.log("Productos agregados:", productManager.getProducts())

const product2 = {
    title: "Producto de prueba",
    description: "Este es un producto de prueba",
    price: 200,
    thumbnail: "Sin imagen",
    code: "abc123",
    stock: 25
}

const addProduct2 = productManager.addProduct(product2)
console.log(addProduct2)

const productIdFind = productManager.getProducts()[0].id;

const foundProduct = productManager.getProductById(productIdFind);
console.log(foundProduct)



