import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarServiceService } from '../car-service.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  product:any;

  constructor(private service : CarServiceService,private router : Router) { }
  
  ngOnInit(): void {
    
  }

  submitProduct(addProductValue : any){
    alert('Registered Successfully')
    console.log(addProductValue)
    this.service.registerProductCar(addProductValue).subscribe((data:any)=>this.product=data);
    this.router.navigate(['edit'])
    // console.log(regForm)
  }

 
}
