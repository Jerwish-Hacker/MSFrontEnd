import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrl: './purchase.component.css'
})
export class PurchaseComponent {

  p_nameValue: string = '';
  p_sub_nameValue: string = '';
  pppValue: string = '';
  quantityValue: string = '';
  mrpValue: string = '';  
  @ViewChild('tbody', { read: ElementRef }) tbody!: ElementRef;

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
    newtd_mrpValue.textContent=this.mrpValue;
    deleteIcon.innerHTML='<i class="fas fa-trash-alt" style="color: #e01b24;"></i>';


    newtr.appendChild(newtd_p_nameValue);
    newtr.appendChild(newtd_p_sub_nameValue);
    newtr.appendChild(newtd_pppValue);
    newtr.appendChild(newtd_quantityValue);
    newtr.appendChild(newtd_mrpValue);
    newtr.appendChild(deleteIcon);

    newtr.addEventListener('click', () => this.DeleteClick(newtr)); // Add click event listener

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


}
