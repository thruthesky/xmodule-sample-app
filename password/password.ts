import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PasswordComponent } from '../../xmodule/components/password';
@Component({
  selector: 'page-password',
  templateUrl: 'password.html'
})
export class PasswordPage {
  private appTitle = "Password";
  @ViewChild('PasswordComponent') passwordComponent: PasswordComponent;
  constructor(public navCtrl: NavController) {
    this.appTitle = "Password Update";
  }

  ionViewDidLoad() {
    console.log('PasswordPage::ionViewDidLoad()');
    console.log( this.passwordComponent.t );
    this.passwordComponent.t.OldPassword = "Current Password";
    this.passwordComponent.t.Input_Old_Password = "Input Current Password";
  }
  onBeforeRequest( $event ) {

  }
  onAfterRequest( $event ) {

  }
  onCancel( $event ) {

  }
  onSuccess( $event ) {

  }
  onError( $event ) {

  }

}
