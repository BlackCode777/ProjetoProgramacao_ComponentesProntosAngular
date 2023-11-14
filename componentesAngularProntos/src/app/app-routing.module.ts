import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsAngularComponentComponent } from './tabs-angular-component/tabs-angular-component.component';

const routes: Routes = [
  { 
    path: 'tabs-angular-component',
    component: TabsAngularComponentComponent
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
