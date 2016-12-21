import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';

import { Quote }                  from '../quote';
import { QuoteService }           from '../quote.service';

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.scss']
})
export class QuoteDetailComponent implements OnInit {
  quote: Quote;

  constructor(
    private quoteService: QuoteService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      let id = +params['id'];
      this.quoteService.getQuote(id).then(quote => this.quote = quote);
    });
  }

  goBack(): void {
    this.location.back();
  }

}
