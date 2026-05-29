import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseService } from './expense-service';

describe('ExpenseService', () => {
  let component: ExpenseService;
  let fixture: ComponentFixture<ExpenseService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExpenseService],
    }).compileComponents();

    fixture = TestBed.createComponent(ExpenseService);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
