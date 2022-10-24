import { ActionComponent } from './../action.component';
import { Component, Input, OnInit, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-notification-action',
  templateUrl: './notification-action.component.html',
  styleUrls: ['./notification-action.component.scss']
})
export class NotificationActionComponent implements OnInit {

  @Input() notificationData: any;

  constructor() { }


  @ViewChild('appAction', { static: true, read: ViewContainerRef })
  container!: ViewContainerRef;

  ngOnInit(): void {
    this.loadComponent(this.notificationData);
  }

  loadComponent(data: any) {
    // assigning each component into viewContainerRef to dynamically load component
    if (this.notificationData.componentName) {
      const componentRef = this.container.createComponent<ActionComponent>(this.notificationData.componentName);
      componentRef.instance.data = data;
    }
  }

}
