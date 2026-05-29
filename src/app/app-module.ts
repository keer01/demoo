import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Navbar } from './components/navbar/navbar';
import { Login } from './pages/login/login';
import { Register } from './pages/register/register';
import { Dashboard } from './pages/dashboard/dashboard';
import { ExpenseForm } from './components/expense-form/expense-form';
import { ExpenseList } from './components/expense-list/expense-list';

//import { HttpClient} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ExpenseRequest } from './models/expense-request/expense-request';
import { ExpenseService } from './services/expense-service/expense-service';
//import { RegisterRequest } from './models/register-request/register-request';
//import { AuthService } from './services/auth-service/auth-service';

@NgModule({
  declarations: [
    App,
    Navbar,
    Login,
    Register,
    Dashboard,
    ExpenseForm,
    ExpenseList

  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
