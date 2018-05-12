import { Component, OnInit } from '@angular/core';
import { FormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService }  from '../auth.service';
import { SetPassword } from '../../apex/entities/setpassword.entity';
@Component({
  selector: 'app-setpassword',
  templateUrl: './setpassword.component.html',
  styleUrls: ['./setpassword.component.css']
})
export class SetpasswordComponent implements OnInit {

  UserDetailsForm: FormGroup;
  setPassword : SetPassword = new SetPassword;
  response: any;
  emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';
  constructor(private formBuilder: FormBuilder , private router: Router, private authService: AuthService) { 
    this.UserDetailsForm = this.formBuilder.group({
      'password': ['',  Validators.compose([Validators.required, Validators.minLength(5)])],
      'repeatpassword': ['', Validators.compose([Validators.required, Validators.minLength(5)])]
     });
  }

  ngOnInit() {
  }

  Setpassword(){
    // console.log(this.resetPassword);
    // this.authService.reset(this.resetPassword)
    //     .subscribe(
    //         data => {
    //           console.log(data);
    //           this.response = data;
    //           this.router.navigate(['login']);
    //         },
    //         error => {
    //              console.log(error);
    //              this.showServerError="OOPS! Something went wrong please try again"   
    //         });
} 
}
