import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserConfirmActionComponent } from './user-confirm-action.component';

describe('UserConfirmActionComponent', () => {
  let component: UserConfirmActionComponent;
  let fixture: ComponentFixture<UserConfirmActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserConfirmActionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserConfirmActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
