import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {
  artist: any;
  pistas: any[];


  constructor(
    private _activatedRoute: ActivatedRoute,
    private _httpService: HttpService

  ) {
  }

  ngOnInit() {
    this._activatedRoute.params
      .map(parametros => parametros['id'])
      .subscribe(id => {
        this._httpService.getArtist(id).subscribe(
          response => {
              console.log(response);
              this.artist = response;
              this._httpService.getTop(id).subscribe(
                res => {
                  console.log(res);
                  this.pistas = res;
                },
                error => {
                  console.log(error);
                }
              );
          },
          error => {
            console.log(error);
          }
        );
      });

  }

}
