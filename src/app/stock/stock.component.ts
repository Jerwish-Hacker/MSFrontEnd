import { Component, ElementRef, ViewChild, input } from '@angular/core';
import { AppserviceService } from '../appservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css'] // Change styleUrl to styleUrls
})
export class StockComponent {

  @ViewChild('p_name', { read: ElementRef }) p_name!: ElementRef;
  @ViewChild('psubname', { read: ElementRef }) psubname!: ElementRef;
  @ViewChild('stockLabel', { read: ElementRef }) stockLabel!: ElementRef;

  constructor(private appService: AppserviceService,private router: Router) {}
  
  Pname: string ='';


  ngAfterViewInit() {    
    this.appService.salesFetchPName().subscribe((data: any) => { 
      console.log(data)
      for (let i = 0; i < data.length; i++) {
        const newoption = document.createElement('option'); 
        newoption.innerHTML=data[i];   
        this.p_name.nativeElement.appendChild(newoption)
      }
     })
  }
  getsubname(Pname: any){    
    this.psubname.nativeElement.innerHTML='<option value="" selected disabled hidden>Choose here</option> '
    
    this.appService.salesFetchSubPName(Pname).subscribe((data: any) => { 
      // console.log(data) 
      for (let i = 0; i < data.length; i++) {
        const newoption = document.createElement('option'); 
        newoption.innerHTML=data[i];   
        this.psubname.nativeElement.appendChild(newoption)
      }           
     })
  }

  getquantity(p_name: any,p_sub_name:any){       
    this.appService.salesFetchQuantity(p_name,p_sub_name).subscribe((data: any) => { 
      this.stockLabel.nativeElement.innerHTML=parseInt(data) + " - Stock"
     })
  }
}
