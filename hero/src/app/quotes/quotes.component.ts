import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Quote } from '../quote';
import { QuoteService } from '../quote.service';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.scss']
})
export class QuotesComponent implements OnInit {
  quotes: Quote[];
  selectedQuote: Quote;
  constructor(
    private router: Router,
    private quoteService: QuoteService
  ) { }

  onSelect(quote: Quote): void {
    this.selectedQuote = quote;
  }

  getQuotes(): void {
    this.quoteService.getQuotes().then(quotes => this.quotes = quotes);
  }

  ngOnInit(): void {
    this.getQuotes();
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedQuote.id])
  }

}
