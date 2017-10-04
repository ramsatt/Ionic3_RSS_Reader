import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {RssProvider} from "../../providers/rss/rss";


/**
 * Generated class for the HomePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  rssDataArray: any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public rssProvider: RssProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
    this.Get_RSS_Data()
  }

  Get_RSS_Data() {
    this.rssProvider.GetRSS().subscribe(
        data => {
          this.rssDataArray = data;
          console.log(data);
        }
    );
  }

}
