import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IUser} from '../interfaces/user.interface';

@Injectable()
export class UserService {

  constructor(private httpClient: HttpClient) {}

    public getSingleUser(id: number): Observable<IUser>{
      console.log(id);
      return this.httpClient.get<IUser>(`https://jsonplaceholder.typicode.com/users/${id}`);
    }
}
