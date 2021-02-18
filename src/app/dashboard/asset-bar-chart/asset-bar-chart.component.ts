import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-asset-bar-chart',
  templateUrl: './asset-bar-chart.component.html',
  styleUrls: ['./asset-bar-chart.component.css']
})
export class AssetBarChartComponent implements OnInit {
@Input() bar : any;
  constructor() { }

  ngOnInit(): void {
  }

}
