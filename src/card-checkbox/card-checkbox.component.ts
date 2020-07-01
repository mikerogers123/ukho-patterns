import { Component, Input, Optional, Self } from '@angular/core';
import { NgControl, ControlValueAccessor } from '@angular/forms';

let nextId = 0;

@Component({
  selector: 'app-card-checkbox',
  templateUrl: './card-checkbox.component.html',
  styleUrls: ['./card-checkbox.component.scss']
})
export class CardCheckboxComponent implements ControlValueAccessor {
  checkboxId = `ukho-radio-${++nextId}`;

  @Input() disabled = false;

  @Input() validationMessages: Record<string, string> = { required: 'This field is required' };

  /**
   * The registered callback function called when an input event occurs on the input element.
   */
  public onChange = (value: unknown) => {};

  /**
   * The registered callback function called when a blur event occurs on the input element.
   */
  public onTouch = () => {};

  constructor(@Optional() @Self() protected readonly controlDirective?: NgControl) {
    if (controlDirective) {
      controlDirective.valueAccessor = this;
    }
  }

  get valid() {
    return this.controlDirective && this.controlDirective.control.valid;
  }

  get touched() {
    return this.controlDirective && this.controlDirective.control.touched;
  }

  get error() {
    if (!(this.controlDirective && this.controlDirective.errors)) {
      return null;
    }

    const errorKeys = Object.keys(this.controlDirective.errors);
    const activeErrors = errorKeys.filter(errorKey => !!this.controlDirective.errors[errorKey]);
    return activeErrors[0];
  }
  /**
   * Registers a function called when the control value changes.
   * Used by ReactiveForms to check for changes
   */
  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouch = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  writeValue(value: unknown): void {
    this.onChange(value);

    if (this.controlDirective && this.controlDirective.control) {
      this.controlDirective.control.updateValueAndValidity();
    }
  }
}
