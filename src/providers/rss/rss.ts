import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the RssProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class RssProvider {

  constructor(public http: Http) {
    console.log('Hello RssProvider Provider');
  }

  GetRSS()
  {
    const RSS_URL: any = 'http://feeds.feedburner.com/dinamalar/Front_page_news';
    const API: any = '4qhx5xcwzsxwdaksndbuj2zhvqtup1lflzkliksv';
    const count: any = 20;
    const API_URL: any = 'https://api.rss2json.com/v1/api.json';
    const response = this.http.post(API_URL, {'rss_url': RSS_URL, 'api_key': API, 'count': count}).map(res => res.json());
    return response;
  }

}
