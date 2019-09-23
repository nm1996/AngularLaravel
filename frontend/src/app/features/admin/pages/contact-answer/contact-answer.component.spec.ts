import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactAnswerComponent } from './contact-answer.component';

describe('ContactAnswerComponent', () => {
  let component: ContactAnswerComponent;
  let fixture: ComponentFixture<ContactAnswerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactAnswerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactAnswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
