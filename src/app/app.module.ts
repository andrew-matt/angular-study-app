import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { FormsModule } from '@angular/forms'
import { CompAComponent } from './components/comp-a/comp-a/comp-a.component'
import { CompBComponent } from './components/comp-b/comp-b/comp-b.component'

@NgModule({
  declarations: [AppComponent, CompAComponent, CompBComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
