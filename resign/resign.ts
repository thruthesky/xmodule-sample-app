import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Xapi } from '../../xmodule/providers/xapi';
//import * as xi from '../../xmodule/interfaces/xapi';
import { ResignComponent } from '../../xmodule/components/resign';

@Component({
  selector: 'page-resign',
  templateUrl: 'resign.html'
})
export class ResignPage {

  appTitle = "Resign";
  constructor(
    public navCtrl: NavController,
    private x: Xapi
    ) {}

  ionViewDidLoad() {
    console.log('ResignPage::ionViewDidLoad()');
  }

  onBeforeRequest( r: ResignComponent ) {
    console.log("HomePage::onBeforeRequest()");
    console.log( r.t );
  }
  onAfterRequest( r: ResignComponent ) {
    console.log("HomePage::onAfterRequset()");
    console.log( r.t );
  }

  onCancel( r: ResignComponent ) {
    console.log("HomePage::onCancel()");
    console.log( r.t );
    this.navCtrl.pop();
  }
  onError( msg: string ) {
    console.log("onError() ", msg );
  }
  onSuccess( r: ResignComponent ) {
    console.log("onSuccess() ", r );
    this.x.alert("SUCCESS", "회원 탈퇴를 하였습니다.");
    this.navCtrl.pop();
  }

}
