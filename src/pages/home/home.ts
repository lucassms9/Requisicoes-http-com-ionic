import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RedditData } from '../../providers/reddit-data/reddit-data';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public obj: any;
  public posts: any;

  constructor(public navCtrl: NavController, public redditService: RedditData) {
    this.getAllHeroes();
  }

  // ionViewDidLoad() {
  // this.redditService.getRemoteData();

  // }

  getAllHeroes() {
    this.redditService.getRemoteData()
      .then(data => {

        this.obj = data;
        this.posts = this.obj.data.children;
        console.log(this.posts)
      });
  }


  // getAllHeroes() {
  //   this.redditService.getRemoteData()
  //     .then(data => {
  //       this.obj = data;
  //       this.heroes = this.obj.data.results;
  //     });
  // }

}
