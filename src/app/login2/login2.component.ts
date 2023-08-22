import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
// import { ToastrService } from 'ngx-toastr';
import { CarServiceService } from '../car-service.service';

@Component({
  selector: 'app-login2',
  templateUrl: './login2.component.html',
  styleUrls: ['./login2.component.css']
})
export class Login2Component implements OnInit {
  users: any;

  constructor(private router: Router, private service: CarServiceService) { }

  ngOnInit(): void {
    this.users = this.service.getUsers().subscribe(data => { this.users = data });
  }

  loginSubmit2(loginFormValue: any) {
    console.log(this.users)
    if (loginFormValue.login == 'LOGIN' && loginFormValue.password == 'PASSWORD') {
      this.service.setUserLoggedIn();
      Swal.fire({
        icon: 'success',
        title: 'Login Successful...',
        // text: 'Something went wrong!',
        // footer: '<a href="">Why do I have this issue?</a>'
      })
      // alert('Welcome to ADMIN LOGIN PAGE');
      // this.toastr.success("Successfully logged in");
      this.router.navigate(['admin-choice'])
    }
    else {
      if (!(this.checkUser(loginFormValue))) {
        // alert('Invalid Credentials')
        Swal.fire({
          icon: 'error',
          title: 'Invalid Credentials...',
          // text: 'Something went wrong!',
          // footer: '<a href="">Why do I have this issue?</a>'
        })
      }

    }
  }
  checkUser(loginFormValue: any): Boolean {
    // this.users.forEach((user: any) => {
      for(let i=0;i<this.users.length;i++){
      if (loginFormValue.login == this.users[i].email && loginFormValue.password == this.users[i].password) {
        this.service.setUserLoggedIn();
        this.service.setUser(this.users[i]);
        Swal.fire({
          icon: 'success',
          title: 'Login Successful...',
          // text: 'Something went wrong!',
          // footer: '<a href="">Why do I have this issue?</a>'
        })
        // alert('Welcome to the Users World...');
        this.router.navigate(['user-choice'])
        return true;
      }
      // else {
      //   return false;
      // }
      
    }
    return false;
  }

}

