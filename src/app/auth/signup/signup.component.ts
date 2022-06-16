import { Component, NgZone, OnInit } from '@angular/core';
import { FormGroup , FormBuilder , Validators} from '@angular/forms';
import { Router , ActivatedRoute } from '@angular/router';
import { ProductClass } from 'src/app/admin/product-class';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  addUser:FormGroup;
  constructor(private formBuilger:FormBuilder,private router:Router , private ngZone:NgZone , private authService:AuthServiceService ) { 

    this.addUser = this.formBuilger.group({
        _id: [''],
        name : ['',Validators.required] ,
        email : ['',Validators.required] ,
        phone : ['',Validators.required],
        password : ['',Validators.required],
        address : ['',Validators.required],
        profileImage : ['',Validators.required], 
    }); 

  }
  
  onFileSelect(event:any){
    const file = event.target.files[0];
    this.addUser.get('profileImage')?.setValue(file);
  }

  submitData():any{
    const formData = new FormData();
    formData.append("_id" , this.addUser.value._id)
    formData.append("name", this.addUser.value.name);
    formData.append("email", this.addUser.value.email);
    formData.append("phone", this.addUser.value.phone);
    formData.append("password", this.addUser.value.password);
    formData.append("address", this.addUser.value.address);   
    formData.append("profileImage", this.addUser.get('profileImage')?.value);

  
    // formControlName="productImage"

    if(this.addUser.valid){
      console.log(this.addUser.value);
      this.authService.createData(formData).subscribe((res)=>{
        console.log(res , "Data Added Successfully");
        alert("Data Added Successfully");
        this.ngZone.run(()=>{
          this.router.navigateByUrl('/login')
        })
      });

    }else{
      alert("All Fields are require");
    }

    }


  ngOnInit(): void {
  }

  // submitData():any{
  //   this.authService.registerUser(this.addUser.value).subscribe((res:any)=>{
  //     console.log("Data added Successfully");
  //     alert("Data Added Successfully");
  //     this.ngZone.run(()=>{
  //       this.router.navigateByUrl('/signup')
  //     })
  // })

  //   // var name = this.addUser.get('name')?.value;
  //   // var email = this.addUser.get('email')?.value;
  //   // var phone = this.addUser.get('phone')?.value;
  //   // var password = this.addUser.get('password')?.value;
  //   // var address = this.addUser.get('address')?.value;
  //   // console.log(name+ ", " +email+ " , "+phone+" , "+password+" , "+address);
  // }



}
