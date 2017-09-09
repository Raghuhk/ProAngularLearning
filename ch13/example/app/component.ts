import { ApplicationRef, Component } from "@angular/core";
import { Model } from "./repository.model";

@Component({
    selector: "app",
    templateUrl: "app/template.html"
})
export class ProductComponent {
    model: Model = new Model();
	
	constructor(ref: ApplicationRef){
		(<any>window).appRef = ref;
		(<any>window).model = this.model;
	}
	
	getProductByPosition(position: number): Product{
		return this.model.getProducts()[position];
	}
	getClassesByPosition(position: number): string {
		let product = this.getProductByPosition(position);
		return this.getClassesById(product.id);
	}
	getProduct(key: number): Product {
		return this.model.getProduct(key);
	}
	getProducts(): Product[] {
		return this.model.getProducts();
	}
	getProductCount(): number {
		console.log("Entered getProductCount");
		return this.getProducts().length;
	}
	targetName: string = "Kayak";


	getClasses(): string {
		console.log("Entered getClasses");
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
	
	getKeyForTracking(id: number, product: Product) :number {
		return product.id;
	}
}