import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the PostList page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-post-list',
  templateUrl: 'post-list.html'
})
export class PostListPage {
  slug: string;
  constructor(
    public navCtrl: NavController,
    private navParams: NavParams
    ) {
      console.log( 'PostListPage::constructor()', navParams.data);
      this.slug = this.navParams.get( 'slug' );
    }


  ionViewDidLoad() {
    
  }

  
}
