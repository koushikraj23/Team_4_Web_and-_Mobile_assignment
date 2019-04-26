import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FirebaseService } from '../services/firebase.service';
import { LoadingController } from '@ionic/angular';
@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.page.html',
  styleUrls: ['./update-user.page.scss'],
})
export class UpdateUserPage implements OnInit {

  validations_form: FormGroup;
  lName: any;
  dob:string;
  fName:string;
  gender:string;
  ph_NO:any;
id:any;
  constructor(  public router: Router,
    private formBuilder: FormBuilder,   
      public loadingCtrl: LoadingController,
    private firebaseService: FirebaseService,
      private route: ActivatedRoute
    ) { }
    ngOnInit() {
      this.getData();
    }
  
    getData(){
      this.route.data.subscribe(routeData => {
        routeData['data'].subscribe(data => {
          if (data) {
            this.lName = data[0].payload.doc.data().lName;
           this.fName= data[0].payload.doc.data().fName;
           this.dob= data[0].payload.doc.data().DOB;
           this.gender= data[0].payload.doc.data().gender;
           this.ph_NO= data[0].payload.doc.data().phoneNo;
          this.id=data[0].payload.doc.id;
          }
         
        })
      })
      // this.route.data.subscribe(routeData => {
      //  let data = routeData['data'];
      //  if (data) {
      //    this.item = data;
       
      //   console.log(this.item)
      //  }
      // })
      this.validations_form = this.formBuilder.group({
              fName: new FormControl(this.fName,
              Validators.required),
            lName: new FormControl(this.lName,
              Validators.required),
            phoneNo: new FormControl(this.ph_NO, Validators.compose([
              Validators.minLength(8),
              Validators.required
            ])),
       
            DOB: new FormControl(this.dob,
              Validators.required)
            });
    }
//  getData(){
//     console.log("hi")
    
//     this.route.data.subscribe(routeData => {
//       let data = routeData['data'];
//       if (data) {
//         this.item = data[0];
//         console.log(this.item.payload.doc.data().fName);
//       }
//      })
//      this.validations_form1 = this.formBuilder.group({
//       fName: new FormControl(this.item.payload.doc.data().fName,
//       Validators.required),
//     lName: new FormControl(this.item.payload.doc.data().lName,
//       Validators.required),
//     phoneNo: new FormControl(this.item.payload.doc.data().phoneNo, Validators.compose([
//       Validators.minLength(8),
//       Validators.required
//     ])),
//     // gender: new FormControl(this.item.payload.doc.data().gender,
//     //   Validators.required),
//     DOB: new FormControl(this.item.payload.doc.data().DOB,
//       Validators.required)
//     });
   
  
//     }
   
   
    
  
    


  

  onSubmit(value){
    let data = {
      fName: value.fName,
      lName: value.lName,
      DOB:value.DOB,
      phoneNo:value.phoneNo
    }
    
    this.firebaseService.updateUser(this.id,data)
    .then(
      res => {
        this.router.navigate(["/home"]);
      }
    )
  }


}
