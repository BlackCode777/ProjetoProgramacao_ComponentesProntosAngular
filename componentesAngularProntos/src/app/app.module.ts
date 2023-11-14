import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponenteComponent } from './sidebar-componente/sidebar-componente.component';
import { TabsAngularComponentComponent } from './tabs-angular-component/tabs-angular-component.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponenteComponent,
    TabsAngularComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
