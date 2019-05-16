import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTabButtonComponent } from './new-tab-button.component';

describe('NewTabButtonComponent', () => {
  let component: NewTabButtonComponent;
  let fixture: ComponentFixture<NewTabButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewTabButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewTabButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
