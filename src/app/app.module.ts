import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MinimumNumberOfItemsComponent } from './numberOfItems.component';
import { HelloComponent } from './hello.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, MinimumNumberOfItemsComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
