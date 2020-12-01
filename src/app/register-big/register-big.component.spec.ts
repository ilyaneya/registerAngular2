import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterBigComponent } from './register-big.component';

describe('RegisterBigComponent', () => {
  let component: RegisterBigComponent;
  let fixture: ComponentFixture<RegisterBigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterBigComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterBigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
