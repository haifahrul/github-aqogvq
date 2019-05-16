import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtrLayoutComponent } from './extr-layout.component';

describe('ExtrLayoutComponent', () => {
  let component: ExtrLayoutComponent;
  let fixture: ComponentFixture<ExtrLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExtrLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtrLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
