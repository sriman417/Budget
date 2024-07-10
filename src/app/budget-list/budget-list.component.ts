import { Component, OnInit } from '@angular/core';
import { BudgetService } from '../budget.service';

interface BudgetItem {
  id: number;
  description: string;
  amount: number;
  timestamp: number; // Adjusted to use number for timestamp
}

@Component({
  selector: 'app-budget-list',
  templateUrl: './budget-list.component.html',
  styleUrls: ['./budget-list.component.css']
})
export class BudgetListComponent implements OnInit {
  budgetItems: BudgetItem[] = [];
  budgetService: BudgetService; // Removed private or public keyword

  constructor(budgetService: BudgetService) {
    this.budgetService = budgetService;
  }

  ngOnInit(): void {
    this.budgetItems = this.budgetService.getItems();
  }

  removeItem(id: number) {
    this.budgetService.removeItem(id);
    this.budgetItems = this.budgetService.getItems();
  }
}
