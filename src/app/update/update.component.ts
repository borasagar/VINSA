import { Component, OnInit } from '@angular/core';
import { CarServiceService } from '../car-service.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  cars:any;
  

  constructor(private service : CarServiceService) { }

  ngOnInit(): void {
    // this.cars=this.service.getById(id).subscribe(data=>this.cars=data);
   // this.cars=this.service.getById(id).subscribe(data=>this.cars=data);
  }

  submitUpdateForm(updateForm : any){

   

  }
}
