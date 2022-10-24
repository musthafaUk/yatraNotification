import { ActionsModule } from './actions/actions.module';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotificationListComponent } from './notification-list/notification-list.component';
import { ActionDirective } from './action.directive';
import { NotificationActionComponent } from './notification-action/notification-action.component';


@NgModule({
  declarations: [
    AppComponent,
    NotificationListComponent,
    ActionDirective,
    NotificationActionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ActionsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
