import { Component, OnInit } from '@angular/core';
import { CarServiceService } from '../car-service.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
}) 

export class UsersListComponent implements OnInit {

  users : any;

  constructor(private service:CarServiceService) { }

  ngOnInit(): void {
    this.users=this.service.getUsers().subscribe(data=>this.users=data);
  }

}
