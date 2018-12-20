import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContainerComponent } from './container/container.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GridContainerComponent } from './grid-container/grid-container.component';
import { VerticalMenuComponent } from './vertical-menu/vertical-menu.component';
import { AgendaComponent } from './agenda/agenda.component';
import { AsideComponent } from './aside/aside.component';
import { ContentGridComponent } from './content-grid/content-grid.component';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    NavbarComponent,
    GridContainerComponent,
    VerticalMenuComponent,
    AgendaComponent,
    AsideComponent,
    ContentGridComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
