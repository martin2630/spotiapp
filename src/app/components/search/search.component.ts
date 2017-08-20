import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {

  constructor(
    private _httpService: HttpService
  ) { }

  ngOnInit() {
    this.getArtist('metallica');
  }

  getArtist(termino: string) {
    this._httpService.getArtists(termino).subscribe(
      response => {
        console.log(response);
      },
      error => {
        console.log(error);
      }
    )
  }

}
