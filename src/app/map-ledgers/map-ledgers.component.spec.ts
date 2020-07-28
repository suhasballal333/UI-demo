import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapLedgersComponent } from './map-ledgers.component';

describe('MapLedgersComponent', () => {
  let component: MapLedgersComponent;
  let fixture: ComponentFixture<MapLedgersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapLedgersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapLedgersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
