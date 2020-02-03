import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustSubNavComponent } from './cust-sub-nav.component';

describe('CustSubNavComponent', () => {
  let component: CustSubNavComponent;
  let fixture: ComponentFixture<CustSubNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustSubNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustSubNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
