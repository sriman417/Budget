// budget.service.ts

import { Injectable } from '@angular/core';

export interface BudgetItem {
  id: number;
  description: string;
  amount: number;
  datetime: string;
}

@Injectable({
  providedIn: 'root'
})
export class BudgetService {
  private budgetItems: BudgetItem[] = [];

  constructor() {
    const savedItems = localStorage.getItem('budgetItems');
    this.budgetItems = savedItems ? JSON.parse(savedItems) : [];
  }

  getItems(): BudgetItem[] {
    return this.budgetItems;
  }

  addItem(item: BudgetItem): void {
    this.budgetItems.push(item);
    this.saveToLocalStorage();
  }

  removeItem(id: number): void {
    this.budgetItems = this.budgetItems.filter(item => item.id !== id);
    this.saveToLocalStorage();
  }

  getTotalAmount(): number {
    return this.budgetItems.reduce((total, item) => total + item.amount, 0);
  }

  private saveToLocalStorage(): void {
    localStorage.setItem('budgetItems', JSON.stringify(this.budgetItems));
  }
}
