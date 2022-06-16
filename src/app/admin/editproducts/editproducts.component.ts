import { Component, NgZone, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminserviceService } from '../adminservice.service';

@Component({
  selector: 'app-editproducts',
  templateUrl: './editproducts.component.html',
  styleUrls: ['./editproducts.component.css'],
})
export class EditproductsComponent implements OnInit {
  updateProduct: FormGroup;
  getId: any;

  constructor(
    private formBuilder: FormBuilder,
    private ngZone: NgZone,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private adminService: AdminserviceService
  ) {
    this.updateProduct = this.formBuilder.group({
      productName: ['', Validators.required],
      price: ['', Validators.required],
      category: ['', Validators.required],
      productImage: ['', Validators.required],
    });
  }

  onFileSelect(event: any) {
    const file = event.target.files[0];
    this.updateProduct.get('productImage')?.setValue(file);
  }

  // submitData(): any {
    // const formData = new FormData();
    // formData.append('productName', this.updateProduct.value.productName);
    // formData.append('price', this.updateProduct.value.price);
    // formData.append('category', this.updateProduct.value.category);
    // formData.append('productImage',this.updateProduct.get('productImage')?.value);
  // }

  ngOnInit(): void {
    console.warn(this.activatedRoute.snapshot.params['_id']);

    this.adminService
      .getProductById(this.activatedRoute.snapshot.params['_id'])
      .subscribe((res) => {

        //first method
        this.updateProduct.get('productName')?.setValue(res.product.productName);
        this.updateProduct.get('price')?.setValue(res.product.price);
        this.updateProduct.get('category')?.setValue(res.product.category);
        this.updateProduct.get('productImage')?.setValue(res.product.productImage);
         
      // second method
      // this.updateProduct.patchValue({
      //   productName:res.product.productName,
      //   price:res.product.price,
      // })

      });
  }


  updateCollection(){

    console.warn("item",this.updateProduct.value);
    this.adminService.editProduct(this.activatedRoute.snapshot.params['_id'] ,this.updateProduct.value).subscribe((result)=>{
      console.warn("result",result);
    })
  }


}
