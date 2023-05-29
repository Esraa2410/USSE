import { Component, Input, OnInit , Output , EventEmitter  } from '@angular/core';

@Component({
  selector: 'sr-button',
  templateUrl: './sr-button.component.html',
  styleUrls: ['./sr-button.component.scss']
})
export class SrButtonComponent implements OnInit {

  @Input() label:string = '';
  @Input() icon:boolean= true;
  @Input() size:string = '';
  @Input() loading:boolean = true;
  @Input() disabled:boolean = false;

  @Output() clicked = new EventEmitter<any>();
  setClick(clickInfo:Event) {
    console.log(clickInfo);
   this.clicked.emit(clickInfo);
  }




  constructor() { }


  ngOnInit() {

    }
  }
