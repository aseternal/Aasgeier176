import { Component, OnInit } from '@angular/core';
import { ApplicationinfoService } from 'src/app/service/applicationinfo.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  navigationItems = [
    { name: 'Home' },
    { name: 'Events' },
    { name: 'Impressum' }
  ]
  constructor(
    public applicationinfoService: ApplicationinfoService
  ) { }

  ngOnInit(): void {
  }

}
