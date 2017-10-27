import { Product } from "./product.model";
import { SimpleDataSource } from "./datasource.model";

export class Model {
    private dataSource: SimpleDataSource;
    private products: Product[];
    private locator = (p: Product, id: number) => p.id == id;

    constructor() {
        this.dataSource = new SimpleDataSource();
        this.products = new Array<Product>();
        this.dataSource.getData().forEach(p => this.products.push(p));
        this.populateSmallestAmount();
    }

    getProducts(): Product[] {
        return this.products;
    }

    getProduct(id: number): Product {
        return this.products.find(p => this.locator(p, id));
    }
    
    populateSmallestAmount(){
        let isSmallest: boolean;
        let priceArray: number[] = new Array ();
        for(let i=0;i<this.products.length;i++){
            priceArray.push(this.products[i].price);            
        }
        
        let smallestPrice : number;
        smallestPrice = Math.min.apply(null,priceArray);
        for(let i=0;i<this.products.length;i++){
            if(this.products[i].price==smallestPrice){
                this.products[i].smallest=true;
                console.log("populateSmallestAmount: smallest is "+this.products[i].name)
            }
            else{ 
                this.products[i].smallest=false;
            }
        }
    }

    saveProduct(product: Product) {
        if (product.id == 0 || product.id == null) {
            product.id = this.generateID();
            this.products.push(product);
        } else {
            let index = this.products
                .findIndex(p => this.locator(p, product.id));
            this.products.splice(index, 1, product);
        }
    }

    deleteProduct(id: number) {
        let index = this.products.findIndex(p => this.locator(p, id));
        if (index > -1) {
            this.products.splice(index, 1);
        }
    }

    private generateID(): number {
        let candidate = 100;
        while (this.getProduct(candidate) != null) {
            candidate++;
        }
        return candidate;
    }
	
	swapProducts(){
		let p = this.products.shift();
		this.products.push(new Product(p.id,'New Kayak', p.category,p.price));
	}
}