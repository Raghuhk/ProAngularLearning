import { Component } from "@angular/core";
import { Product } from "../model/product.model";
import { ProductRepository } from "../model/product.repository";


@Component({
	selector: "store",
	moduleId: module.id,
	templateUrl: "store.component.html"
})
export class StoreComponent{
	private _categorySelected: string=null;
	constructor (private repository: ProductRepository){}
	
	get products(): Product[]{
		return this.repository.getProducts(this._categorySelected);
	}
	
	get categories(): string[]{
		return this.repository.getCategories();
	}
	
	set selectedCategory(category){
		this._categorySelected = category;
	}
	
	get selectedCategory(){
		return this._categorySelected;
	}
	
	changeCategory(newCategory?:string){
		this.selectedCategory=newCategory;
	}
}