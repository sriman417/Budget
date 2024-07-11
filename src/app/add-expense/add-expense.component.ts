import { Component } from '@angular/core';
import { BudgetService, BudgetItem } from '../budget.service';

@Component({
  selector: 'app-add-expense',
  templateUrl: './add-expense.component.html',
  styleUrls: ['./add-expense.component.css']
})
export class AddExpenseComponent {
  description = '';
  amount = 0;
  datetime: string = '';
  budgetService: BudgetService;

  constructor(budgetService: BudgetService) {
    this.budgetService = budgetService;
  }

  addExpense() {
    if (this.description && this.amount) {
      const newItem: BudgetItem = {
        id: Date.now(),
        description: this.description,
        amount: this.amount,
        datetime: this.datetime
      };
      this.budgetService.addItem(newItem);
      this.description = '';
      this.amount = 0;
      this.datetime = '';
    }
  }
}
