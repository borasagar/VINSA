import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarServiceService } from '../car-service.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  cars:any;
  newCar ={
    id:"",
    name:"",
    fueltype:"",
    price:"",
    description:"",
    // rating:"",
    image:""
  }

  constructor(private service:CarServiceService,private router : Router) { }

  ngOnInit(): void {
    this.cars=this.service.getCars().subscribe(data=>this.cars=data);
  }

  getProduct(id:number){
    // console.log(id);
    // this.router.navigate(['update/:id'+id])
  }

  deleteProduct(id:number){
    if(confirm("Are you sure you want to delete?"))
      this.service.deleteCar(id).subscribe(data=>this.cars=data);
    this.ngOnInit();
    //this.router.navigate(['edit'])
  }


  // viewDetails(id:number){
  //   this.service.viewById(id).subscribe(data=>this.cars=data);
  // }

  edit(car:any){
    this.newCar=car;
  }
  submitUpdateForm(){

    alert('Updated Successfully')
    this.service.updateCar(this.newCar).subscribe((data:any)=>this.cars=data);
    // this.ngOnInit();
    // this.router.navigate(['edit'])
    // this.cars=this.service.getById(id).subscribe(data=>this.cars=data);
  }
}
