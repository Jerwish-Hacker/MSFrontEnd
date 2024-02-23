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
  @ViewChild('tbody', { read: ElementRef }) tbody!: ElementRef;

  constructor(private appService: AppserviceService,private router: Router) {}
  
  Pname: string ='';
  p_nameValue: string = '';
  p_sub_nameValue: string = '';
  pppValue: string = '';
  quantityValue: string = '';
  mrpValue: string = '';  



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
  addsales(){
    console.log(this.p_nameValue);
    console.log(this.p_sub_nameValue);
    console.log(this.pppValue);
    console.log(this.mrpValue);
    console.log(this.quantityValue);
    const newtr = document.createElement('tr');    
    const newtd_p_nameValue = document.createElement('td');    
    const newtd_p_sub_nameValue = document.createElement('td');    
    const newtd_pppValue = document.createElement('td');    
    const newtd_quantityValue = document.createElement('td');    
    const newtd_mrpValue = document.createElement('td');    
    const deleteIcon = document.createElement('td');    

    newtd_p_nameValue.textContent=this.p_nameValue;
    newtd_p_sub_nameValue.textContent=this.p_sub_nameValue;
    newtd_pppValue.textContent=this.pppValue;
    newtd_quantityValue.textContent=this.quantityValue;
    if(this.mrpValue==""){
      newtd_mrpValue.textContent="-";
    }
    else{
      newtd_mrpValue.textContent=this.mrpValue;
    }
    deleteIcon.innerHTML='<i class="fas fa-trash-alt" style="color: #e01b24;"></i>';


    newtr.appendChild(newtd_p_nameValue);
    newtr.appendChild(newtd_p_sub_nameValue);
    newtr.appendChild(newtd_pppValue);
    newtr.appendChild(newtd_quantityValue);
    newtr.appendChild(newtd_mrpValue);
    deleteIcon.addEventListener('click', () => this.DeleteClick(newtr)); 
    newtr.appendChild(deleteIcon);

    this.tbody.nativeElement.appendChild(newtr);  
    
    this.pppValue="";
    this.quantityValue="";
    this.mrpValue="";
      


  }
  DeleteClick(tr: HTMLElement) {    
    console.log('Clicked on span:', tr.textContent);   
    tr.remove();    
  }
}
