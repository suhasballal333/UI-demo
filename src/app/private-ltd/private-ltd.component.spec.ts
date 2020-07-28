import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateLtdComponent } from './private-ltd.component';

describe('PrivateLtdComponent', () => {
  let component: PrivateLtdComponent;
  let fixture: ComponentFixture<PrivateLtdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrivateLtdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivateLtdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
