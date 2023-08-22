import { Component, OnInit } from '@angular/core';
import { CarServiceService } from '../car-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  carts:any;

  constructor(private service : CarServiceService) { }

  ngOnInit(): void {
    this.service.getProduct(this.service.getUser().id).subscribe((data:any)=>{
      this.carts=data;
  })}

}
