import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IUser} from './iuser';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  private URL_API = 'http://localhost:8080/users';
  constructor(private http: HttpClient) { }
  // tslint:disable-next-line:typedef
  getAllUsers(): Observable<any> {
    return this.http.get(this.URL_API);
  }
  // @ts-ignore
  create(user: IUser): Observable<IUser>{
    return this.http.post<IUser>(this.URL_API, user);
  }
}
