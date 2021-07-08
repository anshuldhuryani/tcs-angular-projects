import { HighlightDirective } from './directives/highlight.directive';
import { GreetingPipe } from './Pipes/greeting.pipe';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    GreetingPipe,
    HighlightDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [UsersComponent]
})
export class AppModule { }
