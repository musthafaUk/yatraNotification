import { Injectable, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadActionComponent } from './upload-action/upload-action.component';
import { ReportActionComponent } from './report-action/report-action.component';
import { UserConfirmActionComponent } from './user-confirm-action/user-confirm-action.component';

@Injectable()
export class UserActions {
  // mapping of actionType value to corresponding component 
  readonly actionComponentMap: any = {
    "upload": UploadActionComponent,
    "readReport": ReportActionComponent,
    "userAction": UserConfirmActionComponent
  }
}

@NgModule({
  declarations: [
    UploadActionComponent,
    ReportActionComponent,
    UserConfirmActionComponent,
  ],
  imports: [CommonModule],
  exports: [
    UploadActionComponent,
    ReportActionComponent,
    UserConfirmActionComponent,
  ],
  providers: [UserActions]
})
export class ActionsModule { }
