import { Injectable } from '@angular/core';
import { Config } from 'protractor';
import { Store } from '../store';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor(private store: Store) { }

}
