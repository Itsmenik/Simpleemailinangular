import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyemailComponent } from './myemail.component';

describe('MyemailComponent', () => {
  let component: MyemailComponent;
  let fixture: ComponentFixture<MyemailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyemailComponent]
    });
    fixture = TestBed.createComponent(MyemailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
