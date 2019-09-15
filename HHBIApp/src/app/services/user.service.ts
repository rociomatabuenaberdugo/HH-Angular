import { Injectable } from '@angular/core';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { User } from '../models/user'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userList: AngularFireList<any>;
  selectUser: User = new User(); 

  constructor(private firebase: AngularFireDatabase) { }

  getUsers() {
    return this.userList = this.firebase.list('Users');
  }

  insertUser(usuario: User) {
    this.userList.push({
      email: usuario.email,
      username: usuario.usuario,
      pass: usuario.pass
    })
  }

  updateUser(user: User) {
    this.userList.update(user.$key, {
      email: user.email,
      username: user.usuario,
      pass: user.pass
    });
  }

  deleteUser($key: string) {
    this.userList.remove($key);
  }

}
