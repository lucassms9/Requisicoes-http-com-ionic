import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class RedditData {

  data: any;

  constructor(public http: HttpClient) {
    console.log('Hello RedditData Provider');
  }

  getRemoteData() {

    if (this.data) {
      return Promise.resolve(this.data);
    }

    return new Promise(resolve => {
    this.http.get('https://www.reddit.com/r/gifs/top/.json?limit=2sort=hot')
    .subscribe(

      data => {
        this.data = data;
        resolve(this.data);

      },
      err => {
        console.log("Oops!");
      }

  );
    });

  }

}
