import { Component } from '@angular/core';
import { AppserviceService } from '../appservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private appService: AppserviceService,private router: Router) {}
  dynamicClass: string = 'Hello, world!';
  login() {    
    let data="successs";
    if (data=="success"){
      this.router.navigate(['/home']  );
    }
    else{
      this.dynamicClass="display-show";
    }

  }

}
