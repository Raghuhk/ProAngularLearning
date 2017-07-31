import { Injectable } from "@angular/core";
import { Product } from "./product.model";
import { StaticDataSource } from "./static.datasource";

@Injectable()
export class ProductRepository {
	private products : Product[] = [];
	private categories: string[] = []; 
	
	constructor (private datasource: StaticDataSource){
		datasource.getProducts().subscribe(
			data => {
				this.products=data;
				this.categories = data.map(p => p.category).filter((currVal, index, array)=>array.indexOf(currVal)==index).sort();
			}
		);
	}
	
	getProducts (category:string =null):Product[]{
		return this.products.filter(p=> category==null || p.category==category);
	}
	
	getProduct( id: number):Product{
		return this.products.filter(p=> p.id==id);
	}
	
	getCategories(): string[]{
		return this.categories;
	}

}