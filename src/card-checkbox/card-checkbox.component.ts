import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

let nextId = 0;

@Component({
  selector: 'app-card-checkbox',
  templateUrl: './card-checkbox.component.html',
  styleUrls: ['./card-checkbox.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CardCheckboxComponent),
      multi: true
    }
  ]
})
export class CardCheckboxComponent implements ControlValueAccessor {

  @Input() name: string;
  @Input() checked = false;
  @Input() disabled = false;
  @Input() value: any;

  id = `ukho-checkbox-${++nextId}`;

  onChange = (checked: boolean) => {};

  onTouch = () => {};

  registerOnChange(fn: (checked: boolean) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouch = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  writeValue(value: any): void {
    this.checked = !!value;
  }
}
