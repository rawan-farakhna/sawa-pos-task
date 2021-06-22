import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { UploadFileComponent } from './components/upload-file/upload-file.component';
import { AuthGuard } from './services/auth.guard';
import { LoginGuard } from './services/login.guard';

const routes: Routes = [
  {path: '', redirectTo:'home', pathMatch :'full'},
  {path: 'home', component:HomeComponent},
  {path: 'login', component:LoginComponent,canActivate:[LoginGuard]},
  {path: 'signup', component:SignupComponent},
  {path: 'upload', component:UploadFileComponent, canActivate:[AuthGuard]},
  {path: '**', component:HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
