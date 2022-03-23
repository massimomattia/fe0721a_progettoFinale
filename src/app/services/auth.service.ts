import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReplaySubject,BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
 pathApi: string;
 constructor(private http: HttpClient){
   this.pathApi = environment.pathApi
 }


  signup(user: any) {
    return this.http.post<any>(this.pathApi + '/api/auth/signup', user)

  }
  login(user: any) {
    return this.http.post<any>(this.pathApi + '/api/login', user)
  }
  getAllUsers(){
    return this.http.get<any>(this.pathApi + '/api/users' )
  }
}
