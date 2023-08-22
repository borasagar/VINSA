import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { CarServiceService } from '../car-service.service';
// import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.css']
})
export class CarsListComponent implements OnInit {

  cars : any;
  carts:any;
  // car:any;
  // id:any;
  user:any;
  cart ={
    userId:this.service.getUser().id,
    name:"",
    fueltype:"",
    price:"",
    description:"",
    // rating:"",
    image:""
  }

  constructor(private service:CarServiceService,private http : HttpClient,private router:Router) { 
    
  }

  ngOnInit(): void {

    this.cars=this.service.getCars().subscribe(data=>this.cars=data);
    // this.user=this.service.getUser();
    this.service.getProduct(this.service.getUser().id).subscribe((data:any)=>{
      this.carts=data;
  })

  }

  goToCart(car:any){
  //  console.log(car)
   this.cart.name=car.name;
   this.cart.fueltype=car.fueltype;
   this.cart.price=car.price;
   this.cart.description=car.description;
  //  this.cart.rating=car.rating;
   this.cart.image=car.image;
   
  //  this.cart.user_id=this.service.getUser().user_id;
  // console.log(this.cart);
  if(confirm("Are you sure you want to add the Product?")){
  this.service.setProduct(this.cart).subscribe((data:any)=>{
    Swal.fire({
      icon: 'success',
      title: 'Added Successfuliy',
      // text: 'Something went wrong!',
      // footer: '<a href="">Why do I have this issue?</a>'
    })
    // console.log(data);
  });
  // this.router.navigate(['cart']);

  }
}
}
