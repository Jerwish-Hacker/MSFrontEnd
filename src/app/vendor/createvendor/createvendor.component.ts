import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppserviceService } from '../../appservice.service';

@Component({
  selector: 'app-createvendor',
  templateUrl: './createvendor.component.html',
  styleUrl: './createvendor.component.css'
})
export class CreatevendorComponent {

  constructor(private appService: AppserviceService,private router: Router) {}

  addVendor(vname:string,vaddress:string,vphonenumber:string){
    if(vname!="" && vaddress!="" && vphonenumber!="" ){
      this.appService.addVendor(vname,vaddress,vphonenumber).subscribe((data: any) => {                    
        alert("SuccessFully Created -"+ vname);      
      })     
    }
    else{
      alert("fill the form")
    }
        
  }

}
