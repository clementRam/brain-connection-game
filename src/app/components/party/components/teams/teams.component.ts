import { Component, OnInit } from '@angular/core';
import { Team } from 'src/app/models/team.model';
import { TeamService } from 'src/app/services/team.service';
import { Store } from 'src/app/store';
import { environment } from 'src/environments/environment';
import { Party } from 'src/app/models/party.model';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent implements OnInit {

  teams: Team[];

  constructor(private teamService: TeamService, private store: Store) { }

  ngOnInit() {
    this.store.select<Party>('party').subscribe((party: Party) => this.teams = party.teams);
  }
}
