import { ApplicationRef, Component } from "@angular/core";
import { Model } from "./repository.model";

@Component({
    selector: "app",
    templateUrl: "app/template.html"
})
export class ProductComponent {
    model: Model = new Model();
	
	
	
	getProduct(key: number): Product {
		return this.model.getProduct(key);
	}
	getProducts(): Product[] {
		return this.model.getProducts();
	}
}