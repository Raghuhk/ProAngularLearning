import { Component } from "@angular/core";
import { Model } from "./repository.model";

@Component({
    selector: "app",
    templateUrl: "app/template.html"
})
export class AppComponent {
    model: Model = new Model();
	getClasses(): string {
		return this.model.getProducts().length == 5 ? "bg-success" : "bg-warning";
	}
	
	getClassesById(key: number):string{
		let product = this.model.getProduct(key);
		let backgroundClass = "";
		
		if(product.price > 200){
			backgroundClass = "bg-warning";
		}
		else if (product.price >50){
			backgroundClass = "bg-info";
		}
		else{
			backgroundClass = "bg-success";
		}
		
		let returnClass = "p-a-1 "+backgroundClass;
		return returnClass;
	}
}