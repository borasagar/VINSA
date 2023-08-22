import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { CarServiceService } from '../car-service.service';

@Component({
  selector: 'app-bikes-list',
  templateUrl: './bikes-list.component.html',
  styleUrls: ['./bikes-list.component.css']
})
export class BikesListComponent implements OnInit {

  bikes:any;
  user:any;
  carts:any;
  cart ={
    userId:this.service.getUser().id,
    name:"",
    fueltype:"",
    price:"",
    description:"",
    // rating:"",
    image:""
  }

  constructor(private service:CarServiceService,private http : HttpClient,private router:Router) { }

  ngOnInit(): void {
    this.bikes=this.service.getBikes().subscribe(data=>this.bikes=data);

    this.service.getProduct(this.service.getUser().id).subscribe((data:any)=>{
      this.carts=data;
  })

  }

  goToCart(bike:any){
    // console.log(bike)
    
      
    this.cart.name=bike.name;
    this.cart.fueltype=bike.fueltype;
    this.cart.price=bike.price;
    this.cart.description=bike.description;
    // this.cart.rating=bike.rating;
    this.cart.image=bike.image;
    
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
