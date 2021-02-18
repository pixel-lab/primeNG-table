import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';
import { ChartModule } from 'primeng/chart';

import { AppComponent }   from './app.component';
import { ProductService } from './productservice';
import { AssetService } from './dashboard/productservice';
import {TableModule} from 'primeng/table';
import {ToastModule} from 'primeng/toast';
import {CalendarModule} from 'primeng/calendar';
import {SliderModule} from 'primeng/slider';
import {MultiSelectModule} from 'primeng/multiselect';
import {ContextMenuModule} from 'primeng/contextmenu';
import {DialogModule} from 'primeng/dialog';
import {ButtonModule} from 'primeng/button';
import {DropdownModule} from 'primeng/dropdown';
import {ProgressBarModule} from 'primeng/progressbar';
import {InputTextModule} from 'primeng/inputtext';
import {RatingModule} from 'primeng/rating';
import {ToolbarModule} from 'primeng/toolbar';
import {RadioButtonModule} from 'primeng/radiobutton';
import {InputNumberModule} from 'primeng/inputnumber';
import { MessageService } from 'primeng/api';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TilesComponent } from './dashboard/tiles/tiles.component';
import { CardModule, } from 'primeng/card';
import { AssetTableComponent } from './dashboard/asset-table/asset-table.component';
import { AssetPieComponent } from './dashboard/asset-pie/asset-pie.component';
import { AssetBarChartComponent } from './dashboard/asset-bar-chart/asset-bar-chart.component';
import { TimelineComponent } from './dashboard/timeline/timeline.component';
import { TimelineModule } from "primeng/timeline";




@NgModule({
  imports: [
    TimelineModule,
    InputTextareaModule,    
    InputNumberModule,
    RadioButtonModule,
    BrowserAnimationsModule,
    TableModule,
    CalendarModule,
		SliderModule,
		DialogModule,
		MultiSelectModule,
		ContextMenuModule,
		DropdownModule,
		ButtonModule,
		ToastModule,
    InputTextModule,
    ProgressBarModule,
    HttpClientModule,
    FormsModule,
    RatingModule,
    ToolbarModule,
    CardModule,
    ChartModule,
    RouterModule.forRoot([
      {path:'',component: AppComponent}

		])
  ],
  declarations: [ AppComponent, DashboardComponent, TilesComponent, AssetTableComponent, AssetPieComponent, AssetBarChartComponent, TimelineComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ProductService,AssetService]
})

export class AppModule { }
