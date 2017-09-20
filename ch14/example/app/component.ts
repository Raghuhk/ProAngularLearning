import { ApplicationRef, Component } from "@angular/core";
import { Model } from "./repository.model";
import {Product} from "./product.model";

@Component({
    selector: "app",
    templateUrl: "app/template.html"
})
export class ProductComponent {
    model: Model = new Model();
	
	selectedProduct: String;
	
	getProduct(key: number): Product {
		return this.model.getProduct(key);
	}
	getProducts(): Product[] {
		return this.model.getProducts();
	}
	
	newProduct:Product = new Product();
	
	getJsonRepresentation(product: Product):String {
		return JSON.stringify(product);
	}
	
	addProduct(product: Product){
		console.log("new product added:"+this.getJsonRepresentation(this.newProduct));
	}
}