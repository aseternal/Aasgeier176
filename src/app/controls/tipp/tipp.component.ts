import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tipp',
  templateUrl: './tipp.component.html',
  styleUrls: ['./tipp.component.scss']
})
export class TippComponent implements OnInit {
  @Input() tippText = '';
  constructor() { }

  ngOnInit(): void {
  }

}
