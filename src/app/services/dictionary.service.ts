import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {

  readonly ROOT_URL = 'https://us-central1-pww-portfolio.cloudfunctions.net/wordnikProxy';

  constructor(private http: HttpClient) { }

  wordOfTheDay(): Observable<any> {
    return this.http.get(this.ROOT_URL);
  }
}
