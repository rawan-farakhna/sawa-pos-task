import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/user.interface';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  errorMessage:string ='';

  constructor(private authService :AuthService,private router:Router) { }

  ngOnInit(): void {
  }
  
  onSubmit(loginForm:any){
     let data:User =loginForm.value;
    this.authService.OnLogin(data.email,data.password)
      .then(result => {
        this.errorMessage = '';
        this.router.navigate(['/upload']);  
      }
    )
    .catch(err => this.errorMessage=err.message)
  
 }

}
