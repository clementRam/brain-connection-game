import { Injectable } from '@angular/core';
import { Score } from '../models/score.model';
import { Store } from '../store';

@Injectable({
  providedIn: 'root'
})
export class ScoreService {

  constructor(private store: Store) { }

  getScore(id: string) {
    return this.store.select<Score>(id);
  }

}
