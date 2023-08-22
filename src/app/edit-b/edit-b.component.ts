import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarServiceService } from '../car-service.service';

@Component({
  selector: 'app-edit-b',
  templateUrl: './edit-b.component.html',
  styleUrls: ['./edit-b.component.css']
})
export class EditBComponent implements OnInit {

  bikes:any;
  newBike ={
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
    this.bikes=this.service.getBikes().subscribe(data=>this.bikes=data);
  }

  deleteProduct(id:number){
  
    this.service.deleteBike(id).subscribe(data=>this.bikes=data);
    this.ngOnInit();
    //this.router.navigate(['edit'])
  }


  // viewDetails(id:number){
  //   this.service.viewById(id).subscribe(data=>this.bikes=data);
  // }

  edit(car:any){
    this.newBike=car;
  }
  submitUpdateForm(){

    alert('Updated Successfully')
    this.service.updateBike(this.newBike).subscribe((data:any)=>this.bikes=data);
    // this.cars=this.service.getById(id).subscribe(data=>this.cars=data);
  }

}
