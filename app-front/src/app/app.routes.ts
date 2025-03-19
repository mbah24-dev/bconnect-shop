/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   app.routes.ts                                      :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: mbah <mbah@student.42lyon.fr>              +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2025/03/18 18:06:32 by mbah              #+#    #+#             */
/*   Updated: 2025/03/19 14:53:57 by mbah             ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import { Routes } from '@angular/router';
import { SigninComponent } from './auth/components/signin/signin.component';
import { SignupComponent } from './auth/components/signup/signup.component';
import { DashboardComponent } from './home/components/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './auth/components/forgot-password/forgot-password.component';
import { AuthGuard } from './auth/auth.guard';

export const routes: Routes = [
  {path: 'signin', component: SigninComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
  {path: 'forgot-password', component: ForgotPasswordComponent},
  { path: '', redirectTo: 'signin', pathMatch: 'full' },
  {path: '**', redirectTo: 'signin'}
];
