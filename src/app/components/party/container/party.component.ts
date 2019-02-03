import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/services/config.service';
import { environment } from 'src/environments/environment';
import { TeamService } from 'src/app/services/team.service';
import { Store } from 'src/app/store';
import { Party } from 'src/app/models/party.model';
import { PartyService } from 'src/app/services/party.service';

@Component({
  selector: 'app-party',
  templateUrl: './party.component.html',
  styleUrls: ['./party.component.scss']
})
export class PartyComponent implements OnInit {

  party: Party;

  constructor(
    private partyService: PartyService,
    private store: Store,
    private configService: ConfigService,
    private teamService: TeamService
    ) { }

  ngOnInit() {
    // this.teamService.emitTeam(JSON.parse(localStorage.getItem(environment.localStorageCurrentParty)));
    this.partyService.getData().subscribe(data => this.store.set('party', data.party));
    console.log(this.store.select<Party>('party').subscribe(data => console.log(data)));
    // this.store.select<Party>('party').subscribe((party: Party) => {
    //   this.party = party;
    //   console.log(party);
    // } );
  }

}
