import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {Route, Router} from '@angular/router';
import {IPost} from "../interfaces/post.interface";

@Component({
  selector: 'app-register-small',
  templateUrl: './register-small.component.html',
  styleUrls: ['./register-small.component.css']
})
export class RegisterSmallComponent implements OnInit, OnDestroy {
  @Input()
  post: IPost;

  constructor(private router: Router) { }

  ngOnInit(): void {
    console.log('init');
  }

  ngOnDestroy(): void {
    console.log('destroy');
  }

  navigateToPost(id: number): void {
this.router.navigate([`${id}`]);
  }
}

