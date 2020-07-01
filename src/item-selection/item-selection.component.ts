import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-item-selection',
  templateUrl: './item-selection.component.html',
  styleUrls: ['./item-selection.component.scss']
})
export class ItemSelectionComponent {
  form: FormGroup;

  constructor() {
    this.form = new FormGroup({
      isChecked1: new FormControl(true),
      isChecked2: new FormControl(false),
    });
  }

  onSubmit() {
    const val = this.form.value;
  }
}
