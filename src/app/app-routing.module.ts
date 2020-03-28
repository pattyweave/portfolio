import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { MoreComponent } from './components/more/more.component';


const routes: Routes = [
  {path: '', component: LandingComponent},
  {path: 'more', component: MoreComponent}
  // {path: '**', component: LandingComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
