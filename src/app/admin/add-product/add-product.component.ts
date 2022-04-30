import { Component, OnInit } from '@angular/core';
import { FormGroup , FormBuilder , Validators} from '@angular/forms';
import { AddproductServiceService } from './addproduct-service.service'; 

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  addProduct:FormGroup;
  constructor(private formBuilder:FormBuilder , private addProductService:AddproductServiceService ) {
 
    this.addProduct = this.formBuilder.group({

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

   submitData(){
    const formData = new FormData();
    formData.append("productName", this.addProduct.value.productName);
    formData.append("price", this.addProduct.value.price);
    formData.append("category", this.addProduct.value.category);   
    formData.append("productImage", this.addProduct.get('productImage')?.value);
    
    // formControlName="productImage"

    if(this.addProduct.valid){
      console.log(this.addProduct.value);
      this.addProductService.addNewProducts(formData).subscribe((res)=>{
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
