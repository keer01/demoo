import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseRequest } from './expense-request';

describe('ExpenseRequest', () => {
  let component: ExpenseRequest;
  let fixture: ComponentFixture<ExpenseRequest>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExpenseRequest],
    }).compileComponents();

    fixture = TestBed.createComponent(ExpenseRequest);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
