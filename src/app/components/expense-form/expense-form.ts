
import { Component, DoCheck } from '@angular/core';

 

import { ExpenseRequest } from '../../models/expense-request/expense-request';

 

import { ExpenseService } from '../../services/expense-service/expense-service';

 

@Component({

  selector: 'app-expense-form',

  standalone: false,

  templateUrl: './expense-form.html',

  styleUrls: ['./expense-form.css']

})

export class ExpenseForm implements DoCheck {

 

  expenseRequest: ExpenseRequest = {

 

    amount: 0,

    category: '',

    description: ''

  };

 

  editingId: number | null = null;

 

  constructor(

    public expenseService: ExpenseService

  ) {}

 

  ngDoCheck(): void {

 

    if(this.expenseService.selectedExpense) {

 

      const expense = this.expenseService.selectedExpense;

 

      this.editingId = expense.id;

 

      this.expenseRequest = {

 

        amount: expense.amount,

        category: expense.category,

        description: expense.description

      };

 

      this.expenseService.selectedExpense = null;

    }

  }

 

  addExpense() {

 

    // UPDATE FLOW

    if(this.editingId) {

 

      this.expenseService

        .updateExpense(

          this.editingId,

          this.expenseRequest

        )

        .subscribe({

 

          next: () => {

 

            alert('Expense updated');

 

            window.location.reload();

 

            this.resetForm();

          },

 

          error: (error) => {

 

            console.log(error);

 

            alert('Update failed');

          }

        });

 

      return;

    }

 

    // ADD FLOW

    this.expenseService

      .addExpense(this.expenseRequest)

      .subscribe({

 

        next: () => {

 

          alert('Expense added');

 

          window.location.reload();

 

          this.resetForm();

        },

 

        error: (error) => {

 

          console.log(error);

 

          alert('Failed');

        }

      });

  }

 

  resetForm() {

 

    this.expenseRequest = {

 

      amount: 0,

      category: '',

      description: ''

    };

 

    this.editingId = null;

  }

}

