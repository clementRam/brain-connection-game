import { Component, OnInit } from '@angular/core';
import { Score } from 'src/app/models/score.model';
import { ScoreService } from 'src/app/services/score.service';
import { Store } from 'src/app/store';
import { Observable } from 'rxjs';
import { Party } from 'src/app/models/party.model';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.scss']
})
export class ScoreComponent implements OnInit {

  score$: Observable<Score>;
  score: Score;

  constructor(private scoreService: ScoreService, private store: Store) { }

  ngOnInit() {
    this.store.select<Party>('party').subscribe((party: Party) => {
      this.score = party.teams[0].score;
      console.log(this.score);
    });
    this.store.set('score', this.score);
    this.scoreService.getScore('score').subscribe((score: Score) => this.score = score);
  }

  handleClickAddPoint() {
    this.store.set('score', this.score);
    console.log(this.score);
  }

  handleClickNoPoint() {
  }
}
