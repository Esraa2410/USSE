import { Component, Input, OnInit , Output , EventEmitter  } from '@angular/core';

@Component({
  selector: 'us-button',
  templateUrl: './sr-button.component.html',
  styleUrls: ['./sr-button.component.scss']
})
export class UsButtonComponent implements OnInit {

  @Input() label:string = '';
  @Input() size:string = '';
  @Input() loading:boolean = true;
  @Input() disabled:boolean = false;
  @Input() fill:boolean =true

  @Output() clicked = new EventEmitter<any>();
  setClick(clickInfo:Event) {
    console.log(clickInfo);
   this.clicked.emit(clickInfo);
  }




  constructor() { }


  ngOnInit() {

    }
  }
