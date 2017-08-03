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
	public selectedPage :Number =1;
	public productsPerPage :Number = 4;
	constructor (private repository: ProductRepository){}
	
	get products(): Product[]{
		let pageStart = (this.selectedPage-1)*this.productsPerPage;
		let pageEnd = pageStart + this.productsPerPage;
		return this.repository.getProducts(this._categorySelected).slice(pageStart, pageEnd);
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
	
	changePage(newPage: number){
		this.selectedPage=newPage;
	}
	
	changePageSize(newPageSize: number){
		this.productsPerPage = newPageSize;
		this.changePage(1);
	}
	
	get pageNumbers: number[]{
		return Array(Math.ceil(this.repository.getProducts(this.selectedCategory).length/this.productsPerPage)).fill(0).map((x,i)=>i+1);
	}
}