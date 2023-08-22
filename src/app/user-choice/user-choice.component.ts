import { Component, OnInit } from '@angular/core';
import { CarServiceService } from '../car-service.service';

@Component({
  selector: 'app-user-choice',
  templateUrl: './user-choice.component.html',
  styleUrls: ['./user-choice.component.css']
})
export class UserChoiceComponent implements OnInit {
 
  carts:any;
  constructor(private service:CarServiceService) { }

  ngOnInit(): void {
    this.service.getProduct(this.service.getUser().id).subscribe((data:any)=>{
      this.carts=data;
  })
  }

}
