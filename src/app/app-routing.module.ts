import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ReactiveApproachComponent } from "./reactive-approach/reactive-approach.component";
import { TemplateDrivenApproachComponent } from "./template-driven-approach/template-driven-approach.component";

const routes: Routes = [
  { path: '', redirectTo: 'reactive', pathMatch: 'full' },
    { path: 'reactive', component: ReactiveApproachComponent },
    { path: 'template-driven', component: TemplateDrivenApproachComponent }
  
  ];


  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }