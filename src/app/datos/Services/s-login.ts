import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
    isLogged: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    isLogged$ = this.isLogged.asObservable();
    url = 'http://localhost:3000/users';
    httpLogin = inject(HttpClient);
    users: User[] = [];

    getAll(){
        this.httpLogin.get<User[]>(this.url).subscribe({
        next: data => this.users = data,
        error: err => console.log(err)    
        });
    }
    login(user: User) {
        // this.isLogged.next(this.users.some(u => u.userName === user.userName && u.password === user.password));
        const ok = this.users.some(u =>
        u.userName === user.userName &&
        u.password === user.password
        );

        this.isLogged.next(ok);
    }
    logOut(){
        this.isLogged.next(false);
    }

}