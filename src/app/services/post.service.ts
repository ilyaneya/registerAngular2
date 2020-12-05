import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IPost} from '../interfaces/post.interface';

@Injectable()
export class PostService {
  public posts: IPost[];

  constructor(private httpClient: HttpClient) {
  }

  public getPosts(): void {
    this.httpClient.get('https://jsonplaceholder.typicode.com/posts').subscribe((posts: IPost[]) => {
      this.posts = posts;
      console.log(this.posts);
    });
  }

  public getSinglePost(id: number): Observable<IPost> {
    return this.httpClient.get<IPost>(`https://jsonplaceholder.typicode.com/posts/${id}`);
  }
}
