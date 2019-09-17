import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SportsProductComponent } from './sports-product.component';

describe('SportsProductComponent', () => {
  let component: SportsProductComponent;
  let fixture: ComponentFixture<SportsProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SportsProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SportsProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
