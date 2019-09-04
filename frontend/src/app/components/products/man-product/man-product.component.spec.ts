import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManProductComponent } from './man-product.component';

describe('ManProductComponent', () => {
  let component: ManProductComponent;
  let fixture: ComponentFixture<ManProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
