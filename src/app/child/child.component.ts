import { Component, OnInit, Output,EventEmitter, Input } from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  @Output() countData : EventEmitter<any> = new EventEmitter();
  @Input() responseValue;

  constructor() { }

  ngOnInit(): void {
  }
  val = 0;

  emitData(){
    this.countData.emit(this.val);
  }


}
