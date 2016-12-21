import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { QuoteDetailComponent } from './quote-detail/quote-detail.component';
import { QuotesComponent } from './quotes/quotes.component';
import { QuoteService } from './quote.service';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    QuoteDetailComponent,
    QuotesComponent
  ],
  providers: [QuoteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
