import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { SignUpComponent } from './pages/signup/signup.component';
import { AuthGuard } from './services/auth-guard.service';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DashboardHomeComponent } from './components/dashboard-home/dashboard-home.component';
import { DashboardTransactionsComponent } from './components/dashboard-transactions/dashboard-transactions.component';
import { DashboardDepositComponent } from './components/dashboard-deposit/dashboard-deposit.component';
import { DashboardWithdrawComponent } from './components/dashboard-withdraw/dashboard-withdraw.component';

export const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'signup',
    component: SignUpComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: DashboardHomeComponent,
      },
      {
        path: 'transacao',
        component: DashboardTransactionsComponent,
      },
      {
        path: 'deposito',
        component: DashboardDepositComponent,
      },
      {
        path: 'saque',
        component: DashboardWithdrawComponent,
      },
    ],
  },
];
