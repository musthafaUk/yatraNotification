import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadActionComponent } from './upload-action.component';

describe('UploadActionComponent', () => {
  let component: UploadActionComponent;
  let fixture: ComponentFixture<UploadActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadActionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
