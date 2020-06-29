import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardCheckboxComponent } from 'src/card-checkbox/card-checkbox.component';
import { ItemSelectionComponent } from 'src/item-selection/item-selection.component';

@NgModule({
  declarations: [
    AppComponent,
    CardCheckboxComponent,
    ItemSelectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
