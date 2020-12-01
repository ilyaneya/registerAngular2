import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {registerService} from '../services/register.service';
export interface IUser {
  userId: number;
  id: number;
  title: string;
  body?: string;
  }
@Component({
  selector: 'app-register-big',
  templateUrl: './register-big.component.html',
  styleUrls: ['./register-big.component.css']
})


export class RegisterBigComponent implements OnInit {

  public form: FormGroup;

  // tslint:disable-next-line:no-shadowed-variable
  constructor(public registerService: registerService) {
    this.form = new FormGroup({
      userId: new FormControl(''),
      id: new FormControl(''),
      title: new FormControl('')
    });
  }
  registerUser(): void {
    this.registerService.addUser(this.form.value);
    this.form.reset();
  }
  ngOnInit(): void {
    this.registerService.getUsers();
  }

  deleteUserById(id: number): void {
this.registerService.deleteUser(id);
  }
}
