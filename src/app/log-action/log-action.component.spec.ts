import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogActionComponent } from './log-action.component';

describe('LogActionComponent', () => {
  let component: LogActionComponent;
  let fixture: ComponentFixture<LogActionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogActionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
