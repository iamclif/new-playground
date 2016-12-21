import { Injectable } from '@angular/core';
import { Quote } from './quote';
import { QUOTES } from './mock-quotes';

@Injectable()
export class QuoteService {

  getQuotes(): Promise<Quote[]> {
    return Promise.resolve(QUOTES);
  }

  getQuote(id: number): Promise<Quote> {
    return this.getQuotes().then(quotes => quotes.find(quote => quote.id === id));
  }

  constructor() { }

}
