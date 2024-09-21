import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
import { MyemailComponent } from './myemail/myemail.component';

const routes: Routes = [ 
  { path: 'email', component: MyemailComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
