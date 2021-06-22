import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isOpen:boolean=false;
  isUser:boolean=false;

  constructor(private authService:AuthService,private router:Router) { }

  ngOnInit(): void {
    this.authService.user.subscribe((user: any) => {
      if (user) {
        this.isUser = true;
        this.authService.userId= user.uid;
    } else {
        this.isUser = false;
    }
    }); 
  }

  togglenavbar(){
    this.isOpen=!this.isOpen;
  }

  Onlogout(){
   this.authService.Logout();
   this.router.navigate(['/home']); 
  }


}
