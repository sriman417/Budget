import { Injectable } from '@angular/core';

interface BudgetItem {
  id: number;
  description: string;
  amount: number;
  timestamp: number; // Adjusted to use number for timestamp
}

@Injectable({
  providedIn: 'root'
})
export class BudgetService {
  budgetItems: BudgetItem[] = [];

  constructor() {
    const savedItems = localStorage.getItem('budgetItems');
    if (savedItems) {
      this.budgetItems = JSON.parse(savedItems);
    }
  }

  getItems(): BudgetItem[] {
    return this.budgetItems;
  }

  addItem(description: string, amount: number, timestamp: number): void {
    const newItem: BudgetItem = {
      id: Date.now(),
      description,
      amount,
      timestamp
    };
    this.budgetItems.push(newItem);
    this.saveToLocalStorage();
  }

  removeItem(id: number): void {
    this.budgetItems = this.budgetItems.filter(item => item.id !== id);
    this.saveToLocalStorage();
  }

  getTotalAmount(): number {
    return this.budgetItems.reduce((total, item) => total + item.amount, 0);
  }

  saveToLocalStorage(): void {
    localStorage.setItem('budgetItems', JSON.stringify(this.budgetItems));
  }
}
