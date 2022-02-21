import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { MenuComponent } from "./menu.component";

@NgModule({
    imports: [RouterModule,CommonModule],
    declarations: [MenuComponent],
    exports: [MenuComponent]
})
export class MenuModule{}