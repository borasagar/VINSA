import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarServiceService } from '../car-service.service';

@Component({
  selector: 'app-register1',
  templateUrl: './register1.component.html',
  styleUrls: ['./register1.component.css']
})
export class Register1Component implements OnInit {
  // FirstName : any;
  // MiddleName : any;
  // LastName : any;
  // Country : any;
  // State : any;
  // Birthday : any;
  // MobileNo : any;
  // Gender : any;
  // Email:any;

  constructor(private service : CarServiceService,private router:Router) {
    // this.FirstName = '';
    // this.MiddleName='';
    // this.LastName='';
    // this.Country='';
    // this.State='';
    // this.Birthday='';
    // this.MobileNo='';
    // this.Gender='';
    // this.Email='';
   }
   countriesList : any;
   user : any;

   ngOnInit(): void {
     this.service.getCountriesList().subscribe((data:any)=>{
       this.countriesList=data;
       console.log(this.countriesList.alpha2Code06)
     });
   }

  register(){
    alert('Registered Successfully')
  }

  register2(registerFormValue : any){
    alert('Registered Successfully')
    console.log()
  }

  submitRegForm(regFormValue : any){
    alert('Registered Successfully')
   // console.log(regFormValue)
    this.service.registerUser(regFormValue).subscribe((data:any)=>this.user=data);
    this.router.navigate(['login'])
    // console.log(regForm)
  }

}
