import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { APP_ROUTING} from './app.routes';

// servicios

import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HttpService } from './services/http.service';
import {FormsModule} from '@angular/forms';
import { SinfotoPipe } from './pipes/sinfoto.pipe';
import { ArtistComponent } from './components/artist/artist.component';
import { DomseguroPipe } from './pipes/domseguro.pipe';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    NavbarComponent,
    SinfotoPipe,
    ArtistComponent,
    DomseguroPipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    APP_ROUTING
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
