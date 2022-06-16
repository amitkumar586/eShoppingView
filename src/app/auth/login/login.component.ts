import { Component, NgZone, OnInit } from '@angular/core';
import { FormGroup , FormBuilder , Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginUser:FormGroup;
  logindata:any;
  constructor(private formBuilger:FormBuilder,private router:Router, private ngZone:NgZone , private authService:AuthServiceService ) { 

    this.loginUser = this.formBuilger.group({
        email : ['',Validators.required] ,
        password : ['',Validators.required],
    }); 

  }

  ngOnInit(): void {
  }

submitData():any{

  if(this.loginUser.valid){
    this.authService.login(this.loginUser.value).subscribe((res:any)=>{
      console.log("Login Successfully");
      alert("Login Successfully");
      this.logindata = res.res;
      // localStorage.setItem('token',"amitkumar");
      this.ngZone.run(()=>{
        this.router.navigateByUrl('/admindashbord')
      })
  })
  }else{
    alert("All Fields are require");
  }

  // var email = this.loginUser.get('email')?.value;
  // var password = this.loginUser.get('password')?.value;
  // console.log(email+ " " +password);
}
}