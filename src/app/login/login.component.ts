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
  dynamicClassforuser: string = '';  
  dynamicClassforpassword: string = '';  
  message: string ='';

  login(username:string,password:string) {        
    this.appService.login(username,password).subscribe((data: any) => {  
      this.message = data.message;    
      console.log(username,password);
      console.log(this.message);

      if (this.message == "Success"){
        this.router.navigate(['/home']  );
      }
      else if(this.message=="No User Found"){
        this.dynamicClassforuser="display-show";
      }
      else if(this.message=="Wrong Password"){
        this.dynamicClassforpassword="display-show";
      }
     
    })      
   
  }
  resetError() {
    this.dynamicClassforuser=" ";
    this.dynamicClassforpassword=" ";   
  }

}
