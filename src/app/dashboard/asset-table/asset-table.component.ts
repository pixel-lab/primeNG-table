import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-asset-table',
  templateUrl: './asset-table.component.html',
  styleUrls: ['./asset-table.component.css']
})
export class AssetTableComponent implements OnInit {
  @Input() asset: Object[];
  @Output() timeLine: EventEmitter<any> = new EventEmitter();

  constructor() { }
  ngOnInit() {     
  }
  showTimeline(arg){
    this.timeLine.emit(arg);
  }
}
