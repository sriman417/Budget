import { Component } from '@angular/core';
import { BudgetService } from '../budget.service';

@Component({
  selector: 'app-add-expense',
  templateUrl: './add-expense.component.html',
  styleUrls: ['./add-expense.component.css']
})
export class AddExpenseComponent {
  description = '';
  amount = 0;
  budgetService: BudgetService;

  constructor(budgetService: BudgetService) {
    this.budgetService = budgetService;
  }

  addExpense() {
    if (this.description && this.amount) {
      const currentDate = new Date(); // Get current date and time
      const timestamp = currentDate.getTime(); // Get timestamp from current date
      this.budgetService.addItem(this.description, this.amount, timestamp);
      this.description = '';
      this.amount = 0;
    }
  }
}
