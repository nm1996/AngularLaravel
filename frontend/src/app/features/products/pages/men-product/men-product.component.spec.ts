import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenProductComponent } from './men-product.component';

describe('MenProductComponent', () => {
  let component: MenProductComponent;
  let fixture: ComponentFixture<MenProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
