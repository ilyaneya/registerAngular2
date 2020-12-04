import { Component, OnInit } from '@angular/core';
import {registerService} from '../services/register.service';
import {ActivatedRoute, Router} from '@angular/router';
import {IUser} from '../register-big/register-big.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
public user: IUser;
  // tslint:disable-next-line:no-shadowed-variable
  constructor(private registerService: registerService, private adtivatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.adtivatedRoute.snapshot.params);
    const id = this.adtivatedRoute.snapshot.params.id;
    const postId = this.adtivatedRoute.snapshot.params.postId;
    // @ts-ignore
    this.registerService.getSingleUser(id).subscribe((user) => {
    this.user = user;
    console.log(this.user);
    });
  }
}
