import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoclRefComponent } from './locl-ref.component';

describe('LoclRefComponent', () => {
  let component: LoclRefComponent;
  let fixture: ComponentFixture<LoclRefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoclRefComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoclRefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
