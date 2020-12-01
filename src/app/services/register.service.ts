import {Injectable} from '@angular/core';
import {IUser} from '../register-big/register-big.component';
import {publish} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
@Injectable()
// tslint:disable-next-line:class-name
export class registerService {
  public users: IUser[];
  constructor(private httpClient: HttpClient) {}
public addUser(user: IUser): void {
      this.users.push({...user, id: this.users.length + 1});
    }
    public deleteUser(id: number): void {
      const index = this.users.findIndex(user => user.id === id);
      this.users.splice(index, 1);
    }

    public getUsers(): void{
    this.httpClient.get('https://jsonplaceholder.typicode.com/posts').subscribe((users: IUser[]) => {
      this.users = users;
      console.log(this.users);
    });
    }
    public getSingleUser(id: number): Observable<IUser>{
    return this.httpClient.get<IUser>(`https://jsonplaceholder.typicode.com/posts/${id}`);
    }
}
