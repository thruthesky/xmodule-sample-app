import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginComponent } from '../../xmodule/components/login';
import { Xapi } from '../../xmodule/providers/xapi';
import * as xi from '../../xmodule/interfaces/xapi';
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  appTitle = "Login";
  loading: boolean = false;
  errorMessage: string = '';
  @ViewChild('Login') login: LoginComponent;
  constructor(
    private navCtrl: NavController,
    private api: Xapi
    ) {
    console.log("LoginPage::constrcutor()");
  }
  ionViewDidLoad() {
    this.login.t.Login = "Login Now";
    this.login.t.Cancel = "Cancel ..";
  }
  onBeforeRequest() {
    console.log("onBeforeRequest()");
    this.loading = true;
    this.errorMessage = '';
  }
  onAfterRequest() {
    console.log("onAfterRequest()");
    this.loading = false;
  }
  onSuccess( user: xi.UserLoginData) {
    console.log("onSuccess()");
    this.api.alert("LOGIN OK", `Welcome, ${user.user_login}. You have logged in.`);
    this.navCtrl.pop();
  }
  onError( message ) {
    console.log("onError()");
    this.errorMessage = message;
  }
  onCancel() {
    console.log("onCancel()");
    this.navCtrl.pop();
  }
}