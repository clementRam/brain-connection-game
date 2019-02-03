import { Routes } from '@angular/router';
import { PartyComponent } from '../components/party/container/party.component';
import { HomeComponent } from '../components/home/home.component';
import { ConfigComponent } from '../components/config/config.component';

export const appRoutes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'party', component: PartyComponent},
    {path: 'config', component: ConfigComponent},
    {path: '**', redirectTo: 'home'}
];
