import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './controls/navigation/navigation.component';
import { HeaderComponent } from './controls/header/header.component';
import { FormsModule } from '@angular/forms';
import { EventsComponent } from './controls/events/events.component';
import { WelcomeComponent } from './controls/welcome/welcome.component';
import { TranslatePipe } from './pipes/translation.pipe';
import { TippComponent } from './controls/tipp/tipp.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HeaderComponent,
    EventsComponent,
    WelcomeComponent,
    TranslatePipe,
    TippComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
