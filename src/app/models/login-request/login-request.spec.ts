import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginRequest } from './login-request';

describe('LoginRequest', () => {
  let component: LoginRequest;
  let fixture: ComponentFixture<LoginRequest>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginRequest],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginRequest);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
