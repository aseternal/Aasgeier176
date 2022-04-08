import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit, OnDestroy {
  subscription: any;
  toggleItems: any[] = [];
  public id = 0;

  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.subscription = this.activatedRoute.params.subscribe(param => {
      console.warn(param);
      this.id = param['id'];
      if (this.id == undefined) {
        this.id = 0;
      }
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();  
  }
  
  toggleItem(item: any) {
    this.toggleItems[item] = this.checkIfItemIsToggled(item);
  }

  checkIfItemIsToggled(item: any) {
    if(this.toggleItems[item] == undefined || this.toggleItems[item] == false) {
      return true;
    } else {
      return false;
    }
  }

  getAngle(event: any) {
    if (this.checkIfItemIsToggled(event)) {
      return 'fa-angle-down';
    } else {
      return 'fa-angle-up';
    }
  }
}
