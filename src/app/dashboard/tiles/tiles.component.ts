import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-tiles',
  templateUrl: './tiles.component.html',
  styleUrls: ['./tiles.component.css']
})



export class TilesComponent implements OnInit {
  @Input() data: Object;
  @Output() LoadAssetTable: EventEmitter<any> = new EventEmitter();
  activeClass:Object= {};

  constructor() { }

  ngOnInit(): void {
    
  }
  loadAssetTableLocal(arg){
    this.activeClass = arg;
    this.LoadAssetTable.emit(arg);
  }
}
