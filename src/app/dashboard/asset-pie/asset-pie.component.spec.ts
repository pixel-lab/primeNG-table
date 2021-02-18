import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetPieComponent } from './asset-pie.component';

describe('AssetPieComponent', () => {
  let component: AssetPieComponent;
  let fixture: ComponentFixture<AssetPieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssetPieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetPieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
