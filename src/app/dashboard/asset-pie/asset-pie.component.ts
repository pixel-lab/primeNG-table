import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-asset-pie',
  templateUrl: './asset-pie.component.html',
  styleUrls: ['./asset-pie.component.css']
})
export class AssetPieComponent implements OnInit {
@Input() pie : any;
  constructor() { }

  ngOnInit(): void {
  }

}
