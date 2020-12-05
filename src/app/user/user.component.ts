import { Component, OnInit } from '@angular/core';
import {RegisterService} from '../services/register.service';
import {ActivatedRoute, Router} from '@angular/router';
import {IUser} from '../register-big/register-big.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
public user: IUser;

  constructor(private registerService: RegisterService, private adtivatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.adtivatedRoute.snapshot.params);
    const id = this.adtivatedRoute.snapshot.params.id;
    const postId = this.adtivatedRoute.snapshot.params.postId;
    this.registerService.getSingleUser(id).subscribe((user) => {
    this.user = user;
    console.log(this.user);
    });
  }
}
