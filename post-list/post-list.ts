import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PostListComponent } from '../../xmodule/components/post-list/post-list';
import { PageController } from '../../xmodule/providers/page-controller';

@Component({
  selector: 'page-post-list',
  templateUrl: 'post-list.html'
})
export class PostListPage {
  @ViewChild('xapiPostList') postListComponent: PostListComponent;
  slug: string;
  constructor(
    public navCtrl: NavController,
    private navParams: NavParams
    ) {
      console.log( 'PostListPage::constructor()', navParams.data);
      this.slug = this.navParams.get( 'slug' );
    }


  ionViewDidLoad() {
    console.log("PostListPage::ionViewDidLoad()", this.postListComponent.slug);
  }
  

  /**
   * 부모 컴포넌트에서만 ion-infinite-scroll 을 사용 할 수 있으므로
   * 부모 컴포넌트에서 자식 컴포넌트의 endless loading 로직을 호출 한 후,
   * complete() 을 호출 한다.
   * 더 이상 데이터가 없으면, enable(false) 를 호출 한다.
   */
  doInfinite( infiniteScroll ) {
    console.log("PostListPage::doInfinite() begin");
    this.postListComponent.doInfinite( ( more ) => {
      console.log("PostListPage::doInfinite() end");
      infiniteScroll.complete();
      if ( ! more ) {
        infiniteScroll.enable( false );
      }
    });
  }
  
  
  

  /**
   * Use can use 'PageController' here or you can move customized edit page.
   */
    onClickEdit( post_ID ) {
      console.log("PostListPage::onClickEdit()", post_ID);

console.log( PageController.page );
      PageController.push( 'postEdit', this );
    }
    onClickDelete( post_ID ) {

    }
    onClickReport( post_ID ) {

    }
    onClickCopy( post_ID ) {

    }
    onClickMove( post_ID ) {

    }
    onClickBlind( post_ID ) {

    }
    onClickBlock( post_ID ) {

    }
    onClickMessage( post_ID ) {

    }
    onClickUserPosts( post_ID ) {
      
    }
}
