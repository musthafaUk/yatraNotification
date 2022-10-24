import { UserActions } from './../actions/actions.module';
import { ActionService } from './../services/action.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification-list',
  templateUrl: './notification-list.component.html',
  styleUrls: ['./notification-list.component.scss']
})
export class NotificationListComponent implements OnInit {

  notificationArray: any = [];
  public hideRuleContent:boolean[] = [];

  constructor(private actionService: ActionService, private userActionList: UserActions) { }


  ngOnInit(): void {
    // fetch mock response
    this.actionService.getActionMockResponse().subscribe((response) => {
      this.notificationArray = Object.values(response);
      this.notificationArray.forEach((_element: any) => {
        // assigning action compoenents based on action type in mock response
        _element.componentName = this.userActionList.actionComponentMap[_element.actionType] ?
          this.userActionList.actionComponentMap[_element.actionType] : undefined;
      });
    })
  }

  // switch value to expand notification
  toggle(index:number) {
    this.hideRuleContent[index] = !this.hideRuleContent[index];
  }


}
