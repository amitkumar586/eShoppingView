import { Component, NgZone ,OnInit } from '@angular/core';
import { FormGroup , FormBuilder , Validators} from '@angular/forms';
import { AdminserviceService } from '../adminservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addproducts',
  templateUrl: './addproducts.component.html',
  styleUrls: ['./addproducts.component.css']
})

export class AddproductsComponent implements OnInit {

  addProduct:FormGroup
  constructor(private formBuilder:FormBuilder,private router:Router, private ngZone:NgZone , private adminService:AdminserviceService ) { 

    this.addProduct = this.formBuilder.group({
      // _id:[''],
      productName : ['',Validators.required],
      price : ['',Validators.required],
      category : ['',Validators.required],
      productImage : ['',Validators.required],
    });
  }

  onFileSelect(event:any){
    const file = event.target.files[0];
    this.addProduct.get('productImage')?.setValue(file);
  }

  submitData():any{

    const formData = new FormData();
    // formData.append("_id", this.addProduct.value._id);
    formData.append("productName", this.addProduct.value.productName);
    formData.append("price", this.addProduct.value.price);
    formData.append("category", this.addProduct.value.category);   
    formData.append("productImage", this.addProduct.get('productImage')?.value);
    
    // formControlName="productImage"

    if(this.addProduct.valid){
      console.log(this.addProduct.value);
      this.adminService.createProduct(formData).subscribe((res:any)=>{
        console.log(res , "Data Added Successfully");
      });

    }else{
      alert("All Fields are require");
    }

    // var productName = this.addProduct.get('productName')?.value;
    //  var price = this.addProduct.get('price')?.value;
    //  var category = this.addProduct.get('category')?.value;
    //  var productImage = this.addProduct.get('productImage')?.value;
    //  console.log(productName+ ", " +price+ " , "+category+","+productImage);

    }

  ngOnInit(): void {


    

  }
}