import { Component, Input, OnInit   } from '@angular/core';

@Component({
  selector: 'us-toaster',
  templateUrl: './us-toaster.component.html',
  styleUrls: ['./us-toaster.component.scss']
})
export class UsToasterComponent implements OnInit {

@Input() title:string = '';
@Input() state: 'error' | 'warning' | 'success' | '' = 'success';
@Input() icon:string = '';
@Input() duration: number = 10000 ;
progress = 100;

  constructor() { }


  ngOnInit(): void {
    setTimeout(() => {
      this.title = '';
      this.state = '';
    }, this.duration);
  }

}




