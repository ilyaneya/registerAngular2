import { Component, OnInit } from '@angular/core';
import {UserService} from '../services/user.service';
import {ActivatedRoute, Router} from '@angular/router';
import {IUser} from '../interfaces/user.interface';
import {PostService} from '../services/post.service';
import {IPost} from '../interfaces/post.interface';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
public user: IUser;
  public post: IPost;

  constructor(private userService: UserService, private adtivatedRoute: ActivatedRoute, private postService: PostService) { }

  ngOnInit(): void {
    const postId = this.adtivatedRoute.snapshot.params.postID;
    this.postService.getSinglePost(postId).subscribe((post) => {
      this.post = post;
      console.log(this.post);
      this.userService.getSingleUser(this.post.userId).subscribe((user) => {
        this.user = user;
        console.log(this.user);
      });
    });
  }
}
