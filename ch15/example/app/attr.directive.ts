import {Directive, ElementRef, Attribute, Input, SimpleChange, Output, EventEmitter} from "@angular/core";
import {Product} from "./product.model";

@Directive({
    selector:"[pa-attr]"
})
export class PaAttrDirective{
    private inputAttribute : string;
    constructor(private element: ElementRef){
      this.element.nativeElement.addEventListener("click",e=>{
         // if(this.product!=null){
              this.customClick.emit(e);
          //}
      })  
    }

    @Input("pa-attr")
    bgClass : string;
    
    @Input("pa-product")
    product: Product;
    
    @Output("pa-category")
    customClick = new EventEmitter<Event>();

    ngOnInit(){
        console.log("Input attribute value is :"+this.inputAttribute);
        console.log("Input expression input is :"+this.bgClass);
        this.element.nativeElement.classList.add(this.bgClass ||'bg-warning');
    }
    
    
}

@Directive({
    selector:"[pa-smallest]"
})export class PaSmallestIdentifierDirective{
    constructor (private element:ElementRef){
                
    }
    
    @Input("pa-smallest")
    isSmallest: boolean;
    
    ngOnInit(){
       console.log("smallest :"+this.isSmallest);
        if(this.isSmallest){
            this.element.nativeElement.classList.add('bg-warning');
        }
    }
    
    ngOnChanges(updates: {string:SimpleChange}){
        let change = updates["isSmallest"];
        console.log("ngOnChanges of pa-smallest calledPrevious val:"+change.previousValue+" and current val:"+change.currentValue);
        if(change.currentValue==true){
            this.element.nativeElement.classList.add('bg-warning');
        }
        else{
            this.element.nativeElement.classList.remove('bg-warning');
        }
    }
}