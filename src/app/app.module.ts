import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RangeRowComponent } from './components/range-row/range-row.component';
import { RangePuzzleComponent } from './components/range-puzzle/range-puzzle.component';

@NgModule({
  declarations: [
    AppComponent,
    RangeRowComponent,
    RangePuzzleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [RangePuzzleComponent]
})
export class AppModule { }
