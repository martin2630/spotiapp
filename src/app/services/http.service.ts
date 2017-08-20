import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';




@Injectable()
export class HttpService {
  public url: string;
  private client_id: string;
  private client_secret:string;
  private access_token: string;

  constructor(
    private _http: Http
  ) {
    this.url = 'https://api.spotify.com/v1/search';
    this.client_id = '6dbc6139b5044a838f885afcf31465ce';
    this.client_secret = '51c628cd6e4d4b1e8cf032e967fe8283';
    this.access_token = 'BQAmQiHBP12JQGSsmQq8zZ-OAtpsyAROm4n2WjMZBsGTtVWCWkE2CT4HrzWcqR5quDL1RLoknvc6WJQrp9ZSmM7d8nZ2v5HU4X8sYUGMnTUN-QcZarJ_1hKQW2-l1hU8x9tk2Hqv22ww7gQEw_U5gRkfh9TpXTg34Z_bdl_pYxKElnHsnbgh6RyJ5KMZJhPSr_KhYhSmRXXob2pdY8xDeqBb5m-3FnhL';
  }

  getArtists(termino: string) {

    const HEADERS = new Headers({
      'Content-type': 'application/json',
      'Authorization': `Bearer ${this.access_token}`
    });

    let payload = `?q=${termino}&type=artist&market=us&limit=10`;
    // let payload = {'q': termino, 'type': 'artist', 'market': 'us', 'limit': 10};

    return this._http.get(this.url +  payload, {headers: HEADERS})
      .map( res => res.json().artists.items);
  }

}
