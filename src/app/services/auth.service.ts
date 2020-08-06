import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  private currentUser = new BehaviorSubject<any>({ });

  getUser() {
    return this.currentUser.asObservable();
  }

  login(userDetails: any) {
    return this.http.post('http://localhost:5000/api/auth/', userDetails).pipe(
      tap(user => this.currentUser.next(user))
    );
  }
}
