
import { Component, OnInit } from '@angular/core';

 

import { ExpenseService } from '../../services/expense-service/expense-service';

 

@Component({

  selector: 'app-expense-list',

  standalone: false,

  templateUrl: './expense-list.html',

  styleUrls: ['./expense-list.css']

})

export class ExpenseList implements OnInit {

 

  expenses: any[] = [];

 

  constructor(

    private expenseService: ExpenseService

  ) {}

 

  ngOnInit(): void {

 

    this.loadExpenses();

  }

 

  loadExpenses() {

 

    this.expenseService.getExpenses()

      .subscribe({

 

        next: (response) => {

 

          console.log(response);

 

          this.expenses = response;

        },

 

        error: (error) => {

 

          console.log(error);

        }

      });

  }

deleteExpense(id:number){
  this.expenseService.deleteExpense(id).subscribe({
    next:()=>{
      alert('Expense deleted');
      this.loadExpenses();
    },
    error:(error)=>{
      console.log(error);
      alert('Delete failed');
    }
  });
}
editExpense(expense:any){
  this.expenseService.selectedExpense={
    ...expense
  };
}



}

