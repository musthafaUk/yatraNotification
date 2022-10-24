import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload-action',
  templateUrl: './upload-action.component.html',
  styleUrls: ['./upload-action.component.scss']
})
export class UploadActionComponent implements OnInit {

  @Input() data: any;
  fileName: any = '';

  constructor() { }

  ngOnInit(): void {
    console.log("inside upload ");

  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      this.fileName = file.name;
      console.log(this.fileName);
    }

  }
}
