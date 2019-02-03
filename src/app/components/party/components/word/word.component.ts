import { Component, OnInit } from '@angular/core';
import { Word } from 'src/app/models/word.model';
import { WordService } from 'src/app/services/word.service';
import { Words } from 'src/app/models/words.model';

@Component({
  selector: 'app-word',
  templateUrl: './word.component.html',
  styleUrls: ['./word.component.scss']
})
export class WordComponent implements OnInit {

  word: Word;
  private words: Words;

  constructor(private wordSerice: WordService) { }

  ngOnInit() {
    this.wordSerice.initNewWords().subscribe(words => {
      this.words = words;
      // this.word = this.wordSerice.getNewWord(this.words);
    });
  }

}
