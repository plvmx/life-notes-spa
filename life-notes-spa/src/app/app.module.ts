import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RecordComponent } from './record/record.component';
import { FindComponent } from './find/find.component';
import { RefineComponent } from './refine/refine.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    RecordComponent,
    FindComponent,
    RefineComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'record', component: RecordComponent},
      {path: 'find', component: FindComponent},
      {path: 'refine', component: RefineComponent},
      {path: '', redirectTo: '/record', pathMatch: 'full'},
      {path: '**', component: PageNotFoundComponent}
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
