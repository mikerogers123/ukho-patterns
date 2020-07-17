import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardCheckboxComponent } from 'src/card-checkbox/card-checkbox.component';
import { ItemSelectionComponent } from 'src/item-selection/item-selection.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PageDividerComponent } from '../page-divider/page-divider.component';
import { ButtonModule } from '@ukho/components';

@NgModule({
  declarations: [
    AppComponent,
    CardCheckboxComponent,
    ItemSelectionComponent,
    PageDividerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
