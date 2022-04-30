import { Component, OnInit } from '@angular/core';
import { FormGroup , FormBuilder  , Validators} from '@angular/forms';
import { SignupServiceService } from './signup-service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {

  signupform:FormGroup;
  constructor(private formBuilder:FormBuilder , private signupService:SignupServiceService ) {

    this.signupform = this.formBuilder.group({
      name:['',Validators.required],
      email:['',Validators.required],
      phone:['',Validators.required],
      password:['',Validators.required],
      userType:['',Validators.required],
      address:['',Validators.required]
    });
   }

   postData(){

    if(this.signupform.valid){
      console.log(this.signupform.value);
      this.signupService.createData(this.signupform.value).subscribe((res)=>{
        console.log(res , "Data Added Successfully");
      });

    }else{
      alert("All Fiels are require");
    }
  //    var name = this.signupform.get('name')?.value;
  //    var email = this.signupform.get('email')?.value;
  //    var phone = this.signupform.get('phone')?.value;
  //    var password = this.signupform.get('password')?.value;
  //    var userType = this.signupform.get('userType')?.value;
  //    var address = this.signupform.get('address')?.value;
  //    console.log(name+ ", " +email+ " , "+phone+","+password+", "+userType+" , "+address);
   }

   

  ngOnInit(): void {
  }

}
