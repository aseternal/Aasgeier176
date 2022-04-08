import { Component, OnInit } from '@angular/core';
import { TranslatePipe } from './pipes/translation.pipe';
import { ApplicationinfoService } from './service/applicationinfo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'aasgeier176';
  password = 'ui';
  translationLoaded = false;

  constructor(
    private applicationinfoService: ApplicationinfoService
  ) {

  }

  ngOnInit(): void {
    this.applicationinfoService.addTranslation('Welcome.Label.Line1', 
      'Willkommen im Geiernest!',
      'Welcome to the home of the vultures!'
    );

    // Events
    this.applicationinfoService.addTranslation('Event.ConstructionDay.EventName', 
    'Bautag',
    'Construction day'
    );
    this.applicationinfoService.addTranslation('Event.ConstructionDay.Tipp1', 
    'Der Bau einer Straße erfüllt die Voraussetzung für das Event ebenso wie ein gewöhnliches Gebäude, sind also 8 Gebäude erforderlich um alle Erfolge mitzunehmen reichen 8 Straßen völlig aus!',
    'Der Bau einer Straße erfüllt das Event ebenso wie ein gewöhnliches Gebäude, sind also 8 Gebäude erforderlich um alle Erfolge mitzunehmen reichen 8 Straßen völlig aus!'
    );
    this.applicationinfoService.addTranslation('Event.ConstructionDay.Content1', 
    'Beim Bautag müssen innerhalb des Events eine bestimmte Menge an Gebäuden gebaut werden, sind also 8 Gebäude notwendig um alle Erfolge zu erreichen müssen auch mindestens 8 Gebäude gebaut werden.<br><br>Gerade im späteren Verlauf des Spiels ist dies jedoch meist (auf normalen Weg) nicht möglich.',
    'Beim Bautag müssen innerhalb des Events eine bestimmte Menge an Gebäuden gebaut werden. <br><br>Sind also 8 Gebäude notwendig um alle Erfolge zu erreichen müssen auch mindestens 8 Gebäude gebaut werden.<br><br>Gerade im späteren Verlauf des Spiels ist dies jedoch meist (auf normalen Weg) nicht möglich.'
    );
    this.translationLoaded = true;    
  }
}
