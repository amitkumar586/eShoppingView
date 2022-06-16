import { Component, OnInit } from '@angular/core';
import {ViewProductServiceService } from './viewproduct-service.service'; 

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})

export class ViewProductComponent implements OnInit {

  productData:any =[];
  constructor(private viewProductService:ViewProductServiceService) {

    this.viewProductService.getData().subscribe((data:any)=>{
      console.log(data);
        this.productData = data.data;
    });
    
   }

  ngOnInit(): void {
  }

}
