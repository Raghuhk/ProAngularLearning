import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule  } from "@angular/forms";
import { ProductComponent } from "./component";
import {PaAttrDirective, PaSmallestIdentifierDirective} from "./attr.directive"
@NgModule({
	imports: [BrowserModule, FormsModule , ReactiveFormsModule],
	declarations: [ProductComponent, PaAttrDirective, PaSmallestIdentifierDirective],
	bootstrap: [ProductComponent]
})
export class AppModule {}
