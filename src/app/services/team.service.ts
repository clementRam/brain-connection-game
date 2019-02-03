import { Injectable } from '@angular/core';
import { Team } from '../models/team.model';
import { Store } from '../store';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor(private store: Store) { }
}
