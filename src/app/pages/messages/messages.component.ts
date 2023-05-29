import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {
  eventInfo:any;

  onClick(event:any){
    console.log(event);
  }

  constructor() { }

  ngOnInit() {
  }

}
