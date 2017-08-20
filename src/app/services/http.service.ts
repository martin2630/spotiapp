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
    this.access_token = 'BQD6S7vQXcv3hzknLbzfanpPA9lxr_L2adl8qThtvrPWJciqv0s1HFwypQFlgSEQOKrqf9bsD_paavGkTJwbuA';
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
