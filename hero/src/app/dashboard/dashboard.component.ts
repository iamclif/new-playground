import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Quote } from '../quote';
import { QuoteService } from '../quote.service';


@Component({
  moduleId: module.id,
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  quotes: Quote[] = [];

  constructor(
    private router: Router,
    private quoteService: QuoteService) {
  }

  ngOnInit() {
    this.quoteService.getQuotes().then(quotes => this.quotes = quotes.slice(1,5))
  }

  gotoDetail(quote: Quote): void {
    let link = ['/detail', quote.id];
    this.router.navigate(link);
  }

}
