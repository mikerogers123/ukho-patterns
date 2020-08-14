import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardCheckboxComponent } from './card-checkbox.component';

@NgModule({
  declarations: [CardCheckboxComponent],
  exports: [CardCheckboxComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule]
})
export class CardCheckboxModule {}
