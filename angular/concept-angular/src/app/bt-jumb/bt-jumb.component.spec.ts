import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtJumbComponent } from './bt-jumb.component';

describe('BtJumbComponent', () => {
  let component: BtJumbComponent;
  let fixture: ComponentFixture<BtJumbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtJumbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtJumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
