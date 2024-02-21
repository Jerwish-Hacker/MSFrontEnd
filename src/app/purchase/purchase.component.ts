import { Component, ElementRef, ViewChild } from '@angular/core';
import { AppserviceService } from '../appservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrl: './purchase.component.css'
})
export class PurchaseComponent {
  constructor(private appService: AppserviceService,private router: Router) {}

  p_nameValue: string = '';
  p_sub_nameValue: string = '';
  pppValue: string = '';
  quantityValue: string = '';
  mrpValue: string = '';  
  a: string = '';  
  @ViewChild('tbody', { read: ElementRef }) tbody!: ElementRef;

  @ViewChild('mrp', { read: ElementRef }) mrp!: ElementRef;
  @ViewChild('p_name', { read: ElementRef }) p_name!: ElementRef;

  ngAfterViewInit(){
    this.mrp.nativeElement.addEventListener("keypress", (event:KeyboardEvent) => {
      if (event.key === "Enter") {
        this.addentry();
        this.p_name.nativeElement.focus(); 
      }
     });

     

  }

 
  addentry() {

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
    this.p_nameValue="";
    this.p_sub_nameValue="";
    this.pppValue="";
    this.quantityValue="";
    this.mrpValue="";
      
    
  }
  DeleteClick(tr: HTMLElement) {    
    console.log('Clicked on span:', tr.textContent);   
    tr.remove();    
  }


  savepurchase(){     
    var datalist=[]; 
    var rowLength = this.tbody.nativeElement.rows.length;
    var rowsdata = this.tbody.nativeElement.rows;
    if(rowLength>0){
      for (var i=0, iLen=rowLength; i<iLen; i++) {
        var datachildlist: any[] =[];
        const row = rowsdata[i];
        for (var j=0, jLen=row.childNodes.length; j<jLen; j++) {
          datachildlist.push(row.childNodes[j].innerHTML);
        }
        datachildlist.pop();
        datachildlist.push(Date.now())
        datachildlist.push("Justin")
        datachildlist.push("Rahul vendor")
        datalist.push(this.arr_to_json(datachildlist));
      
      }   
      this.appService.addPurchase(datalist).subscribe((data: any) => {       
      })      
      this.tbody.nativeElement.innerHTML="";    
      alert("Saved to DB")
    }
    else{
      alert("No Records")
    }    

  }

  arr_to_json(arr:any[]){
    const datajson = {
      billId: 12345,
      pName:"",
      pSubName:"",
      ppp:"",
      quantity:"",
      mrp:"",
      vendor:"",
      createdAt:"",
      createdBy:""
    };    
    datajson.pName = arr[0];
    datajson.pSubName = arr[1];
    datajson.ppp = arr[2];
    datajson.quantity = arr[3];
    datajson.mrp = arr[4];
    datajson.createdAt = arr[5];
    datajson.createdBy = arr[6];
    datajson.vendor = arr[7];
    
    return datajson;
  }
}