import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrgBrComponent } from './prg-br.component';

describe('PrgBrComponent', () => {
  let component: PrgBrComponent;
  let fixture: ComponentFixture<PrgBrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrgBrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrgBrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
