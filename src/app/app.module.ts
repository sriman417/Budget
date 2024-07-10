import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AddExpenseComponent } from './add-expense/add-expense.component';
import { BudgetListComponent } from './budget-list/budget-list.component';
import { SummaryComponent } from './summary/summary.component';
import { BudgetService } from './budget.service';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
@NgModule({
  declarations: [
    AppComponent,
    AddExpenseComponent,
    BudgetListComponent,
    SummaryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    MatFormFieldModule
  ],
  providers: [BudgetService, provideAnimationsAsync()],
  bootstrap: [AppComponent]
})
export class AppModule { }
