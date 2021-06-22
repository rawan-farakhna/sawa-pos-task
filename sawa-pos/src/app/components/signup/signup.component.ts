import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/user.interface';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  errorMessage :string ='';
  successMessage:string='';
 
  constructor(
    private authService: AuthService,
    private userService:UserService,
    private router:Router
    ) { }

  ngOnInit(): void {
  }

  OnRegister(form: any){
    let data:User =form.value;
    this.authService.onRegiste(data.email,data.password)
      .then(result => {
        console.log(result);
        this.errorMessage = "";
        this.userService.addNewUser(result.user?.uid,data.name)
          .then(()=>{
            this.successMessage = "Your account has been created";
            this.router.navigate(['/upload']);
        }); 
      }
    )
    .catch(err => this.errorMessage=err.message)
  }
}
