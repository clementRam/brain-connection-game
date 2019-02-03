import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/services/config.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { TeamService } from 'src/app/services/team.service';
import { Team } from 'src/app/models/team.model';
import { environment } from 'src/environments/environment';
import { Store } from 'src/app/store';
import { Party } from 'src/app/models/party.model';
declare const M;

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.scss']
})
export class ConfigComponent implements OnInit {

  teams: Team[];

  constructor(private store: Store, private configService: ConfigService, private router: Router, private teamService: TeamService) {
  }

  ngOnInit() {
    // init materialize form select
    const select = document.querySelectorAll('select');
    M.FormSelect.init(select);
  }

  handleForm(form: NgForm) {
    if (form.valid) {
      const teams: Team[] = new Array();
      for (let i = 0; i < form.value['nbTeam']; i++) {
        const team: Team = {
          id: i,
          name: 'Team' + i,
          score: {
            value: 0
          },
          playing: false
        };
        teams.push(team);
      }
      const party: Party = {
        config: form.value,
        teams: teams
      };
      this.store.set('party', party);
      localStorage.setItem(environment.localStorageCurrentParty, JSON.stringify(teams));
      this.router.navigate(['/party']);
    }
  }

}
