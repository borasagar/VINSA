import { Component, OnInit } from '@angular/core';
import { Router, TitleStrategy } from '@angular/router';
import { CarServiceService } from '../car-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // array:any;
  // login:any;
  // password:any;
  // id:any;
  users:any;

  constructor(private router:Router,private service:CarServiceService) {
    // this.login='';
    // this.password='';
   }

   ngOnInit(): void {
    this.users=this.service.getUsers().subscribe(data=>{this.users=data});
  }


  // loginSubmit(){
  //   if (this.login == 'LOGIN' && this.password== 'PASSWORD'){
  //     alert('Welcome to ADMIN LOGIN PAGE');
  //   }
  //   else {
  //     // alert('INVALID CREDENTIALS');
  //     this.array.forEach((employee:any) =>{
  //       if (this.login == employee.email && this.password == employee.password){
  //         alert('Welcome to the Employees World...');
  //       }
  //       // else {
  //       //   alert('Who the Hell are you....');
  //       // }
  //     })
  //   }
  //   // alert('Login')
  //   // console.log(this.login)
  // }
 

loginSubmit2(loginFormValue : any){
  console.log(this.users)
  if (loginFormValue.login == 'LOGIN' && loginFormValue.password== 'PASSWORD'){
    this.service.setUserLoggedIn();
    alert('Welcome to ADMIN LOGIN PAGE');
    this.router.navigate(['admin-choice'])
  }
  else {
    // alert('INVALID CREDENTIALS');
    this.users.forEach((user:any) =>{
      if (loginFormValue.login == user.email && loginFormValue.password == user.password){
        this.service.setUserLoggedIn();
        this.service.setUser(user);
        alert('Welcome to the Users World...');
        this.router.navigate(['user-choice'])
      }
    })
  //console.log(loginFormValue)
  }
  
}
// sendId(){
//   console.log(this.id+"nnnnn");
// }
}
