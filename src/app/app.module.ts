import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FiltersComponent } from './filterApp/filters.component';
import { HttpClientModule } from '@angular/common/http';
import { TutorialsService } from './additional/services/tutorials.service';
import { TutorialComponent } from './tutorial/tutorial.component';
import { FilterComponent } from './filter/filter.component';
import { TutorialCardComponent } from './tutorial-card/tutorial-card.component';
import { FilterPipe } from './additional/pipes/search-filter.pipe';
import { CheckPipe } from './additional/pipes/check.pipe';


@NgModule({
  declarations: [
    AppComponent,
    FiltersComponent,
    TutorialComponent,
    FilterComponent,
    TutorialCardComponent,
    FilterPipe,
    CheckPipe
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [TutorialsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
