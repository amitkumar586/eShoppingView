import { Component, OnInit } from '@angular/core';
import { AdminserviceService } from '../adminservice.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css'],
})
export class AdminDashboardComponent implements OnInit {
  productData: any = [];
  constructor(private adminService: AdminserviceService) { 

  }
  ngOnInit(): void {

    this.adminService.getAllProducts().subscribe((data: any) => {
      console.log(data);
      this.productData = data.data;
    });
  
  }
  
  deleteItems(item:any){
    // console.warn(item);
    if(window.confirm("Are you sure want to delete")){
      this.adminService.deleteProduct(item).subscribe((result)=>{
        console.warn(result);
        this.productData.splice(item ,1)
    })
    }
    
  }
  
}
