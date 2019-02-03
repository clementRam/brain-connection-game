import { Injectable } from '@angular/core';
import { Store } from '../store';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Party } from '../models/party.model';

@Injectable({
  providedIn: 'root'
})
export class PartyService {

  constructor(private store: Store, private http: HttpClient) { }

  getData(): Observable<any> {
      return this.http.get<any>('./assets/db.json');
  }
}
