import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-checkbox',
  templateUrl: './card-checkbox.component.html',
  styleUrls: ['./card-checkbox.component.scss']
})
export class CardCheckboxComponent implements OnInit {

  id = Date.now();

  constructor() { }

  ngOnInit(): void {
  }

}
