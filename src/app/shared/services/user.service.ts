import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public list: string[] = ["Jean", "Paul", "Jame"];
  public users: BehaviorSubject<string[]> = new BehaviorSubject(this.list);

  constructor() { }

  /**
   * Ajoute un utilisateur
   */
  public addUser(userName: string) {
    console.log("UserService.userName : Ajout de l utilisateur :" + userName);
    this.list.push(userName)
    this.users.next(this.list);
  }
}

