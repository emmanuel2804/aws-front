import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import {DatabaseComponent} from "./database/database.component";
import {FormsComponent} from "./forms/forms.component";


const routes: Routes = [
  { path: '', component: FormsComponent },
  { path: 'forms', component: FormsComponent } ,
  { path: 'database', component: DatabaseComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

//----------------------------------------------------------------
