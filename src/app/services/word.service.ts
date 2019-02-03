import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Word } from '../models/word.model';
import { Words } from '../models/words.model';
import { Observable } from 'rxjs';

const WORDS_URL = 'db.json';

@Injectable({
  providedIn: 'root'
})
export class WordService {

  constructor(private http: HttpClient) { }

  initNewWords(): Observable<Words> {
    return this.http.get<Words>(environment.apiUrl + WORDS_URL);
  }

  getNewWord(words: Words): Word {
    return words.data[Math.floor(Math.random() * words.data.length)];
  }
}
