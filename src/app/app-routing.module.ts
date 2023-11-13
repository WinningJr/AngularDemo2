import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Screen1Component } from './screen1/screen1.component';

const routes: Routes = [
  { path: 'navToScreen1', component: Screen1Component},
  // { path: 'navToScreen2', component: Screen2Component},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
