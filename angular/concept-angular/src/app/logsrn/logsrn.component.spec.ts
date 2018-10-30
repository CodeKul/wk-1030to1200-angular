import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogsrnComponent } from './logsrn.component';

describe('LogsrnComponent', () => {
  let component: LogsrnComponent;
  let fixture: ComponentFixture<LogsrnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogsrnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogsrnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
