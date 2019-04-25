import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { FirebaseService } from '../services/firebase.service';
@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.page.html',
  styleUrls: ['./user-details.page.scss'],
})
export class UserDetailsPage implements OnInit {
  validations_form: FormGroup;
  item: any;
  constructor(  public router: Router,
    private formBuilder: FormBuilder,
    private firebaseService: FirebaseService,) { }

  ngOnInit() {
    this.validations_form = this.formBuilder.group({
      fName: new FormControl('',
        Validators.required),
      lName: new FormControl('',
        Validators.required),
      phoneNo: new FormControl('', Validators.compose([
        Validators.minLength(8),
        Validators.required
      ])),
      DOB: new FormControl('',
        Validators.required),
    });
    
  }


  onSubmit(value){
    let data = {
      fName: value.fName,
      lName: value.lName,
      DOB:value.DOB,
      phoneNo:value.phoneNo
    }
    
    console.log(data);
    this.firebaseService.createUserDetails(data)
    .then(

      
      res => {
        this.router.navigate(["/home"]);
      }
    )
  }

}
