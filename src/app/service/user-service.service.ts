import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {HttpClient} from "@angular/common/http";


export interface R {
  data: []
}


@Injectable({
  providedIn: 'root'
})

export class UserServiceService {

  public users = new BehaviorSubject([]);
  currentUser = this.users.asObservable();

  constructor(public http: HttpClient) {
  }

  public set_users(user: never[]) {
    this.users.next(user);
  }


  public get_data() {
    const headers = {'content-type': 'application/json'}
    this.http.get<R>("http://localhost:8000/api/users/all",
      {'headers': headers, observe: 'response'}).subscribe(
      res => {
        console.log("==>" , res.body?.data)
        // this.set_users(res.body as any)
        this.set_users(res.body?.data as any)
      },
      error => {
        console.log("Error => ", error)
      }
    );
  }

}
