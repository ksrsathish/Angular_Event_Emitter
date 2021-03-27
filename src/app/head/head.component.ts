import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.scss']
})
export class HeadComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
value1=0;
responseValue = '';

  emitData(data){
    this.value1 = data;
    if(this.value1 > 100 )
      this.responseValue = 'greater than 100';
    else
    this.responseValue = 'less than 100'
}
}
