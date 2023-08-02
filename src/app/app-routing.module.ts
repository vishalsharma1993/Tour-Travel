import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForntpageComponent } from './forntpage/forntpage.component';

const routes: Routes = [
  {path:'',component:ForntpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
