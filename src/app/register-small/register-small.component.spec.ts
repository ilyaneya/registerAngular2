import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterSmallComponent } from './register-small.component';

describe('RegisterSmallComponent', () => {
  let component: RegisterSmallComponent;
  let fixture: ComponentFixture<RegisterSmallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterSmallComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterSmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
