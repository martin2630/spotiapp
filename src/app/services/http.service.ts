import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';




@Injectable()
export class HttpService {
  public url: string;
  public artistUrl: string;
  private client_id: string;
  private client_secret:string;
  private access_token: string;

  constructor(
    private _http: Http
  ) {
    this.url = 'https://api.spotify.com/v1/search';
    this.artistUrl = 'https://api.spotify.com/v1/artists';
    this.client_id = '6dbc6139b5044a838f885afcf31465ce';
    this.client_secret = '51c628cd6e4d4b1e8cf032e967fe8283';
    this.access_token = 'BQDQu4CpT_KOzkaElZzv8Xc8GyaE3o4chgKDeH7KtfG3mEZgEgCuvDlNmsXPTp44o8w1yaS5NJiizU12R-eHYF4ZH8Guj2o06nhW2PvQ8CLm5TShvRgALLzut01_WQZwL5-tb2ZCbHJIB5yf1xYv3N_S29BgKtC3Yeiw8GSNaG-sF2MKluzQY04oH5-drsW_sx_7VJVfT0wtzsBULwvofdB0uo4f2gSKtmcUN1OaKTLYUaYXOEvLMfmObMxca8MrYQiST4jtEpK8oMxW9cpj5lfcuQnSvCcB';
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

  getArtist(id: string) {
    const HEADERS = new Headers({
      'Content-type': 'application/json',
      'Authorization': `Bearer ${this.access_token}`
    });

    return this._http.get(this.artistUrl + `/${id}`, {headers: HEADERS})
      .map( res => res.json());


  }


  getTop(id: string) {
    let query = `/${id}/top-tracks?country=us`;
    const HEADERS = new Headers({
      'Content-type': 'application/json',
      'Authorization': `Bearer ${this.access_token}`
    });

    return this._http.get(this.artistUrl + query, {headers: HEADERS})
      .map( res => res.json().tracks);


  }

}
