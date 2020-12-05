import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {PostService} from '../services/post.service';

@Component({
  selector: 'app-register-big',
  templateUrl: './register-big.component.html',
  styleUrls: ['./register-big.component.css']
})


export class RegisterBigComponent implements OnInit {

  public form: FormGroup;

  constructor(public postService: PostService) {
    this.form = new FormGroup({
      userId: new FormControl(''),
      id: new FormControl(''),
      title: new FormControl(''),
      body: new FormControl('')
    });
  }
  ngOnInit(): void {
    this.postService.getPosts();
  }
}
