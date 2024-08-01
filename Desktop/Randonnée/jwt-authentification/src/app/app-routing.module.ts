import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HikePhotosComponent } from './hike-photos/hike-photos.component';


const routes: Routes = [
  { path: "register", component: RegisterComponent },
  {path: "login" , component: LoginComponent},
  {path: "dashboard" , component: DashboardComponent},
  { path: 'hikes', component: HikePhotosComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Redirection vers la page de connexion par défaut
  { path: '**', redirectTo: '/login' } // Redirection de toutes les routes inconnues vers la page de connexion
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
