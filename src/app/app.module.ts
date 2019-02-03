import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { PartyComponent } from './components/party/container/party.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes/appRoutes';
import { WordComponent } from './components/party/components/word/word.component';
import { ScoreComponent } from './components/party/components/score/score.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ConfigComponent } from './components/config/config.component';
import { FormsModule } from '@angular/forms';
import { TeamsComponent } from './components/party/components/teams/teams.component';
import { Store } from './store';

@NgModule({
  declarations: [
    AppComponent,
    PartyComponent,
    WordComponent,
    ScoreComponent,
    HomeComponent,
    NavbarComponent,
    ConfigComponent,
    TeamsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [
    Store
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
