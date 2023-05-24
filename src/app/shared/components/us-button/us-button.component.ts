import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'us-button',
  templateUrl: './us-button.component.html',
  styleUrls: ['./us-button.component.scss']
})
export class UsButtonComponent implements OnInit {

  @Input() size = 'md';
  @Input() icon = '';
  @Input() txt = '';

  constructor() { }

  ngOnInit() {
  }

}
