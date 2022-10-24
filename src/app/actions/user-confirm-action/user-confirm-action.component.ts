import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-confirm-action',
  templateUrl: './user-confirm-action.component.html',
  styleUrls: ['./user-confirm-action.component.scss']
})
export class UserConfirmActionComponent {

  @Input() data: any;


  actionClick(x: any) {
    console.log(x);
  }

}
