import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-report-action',
  templateUrl: './report-action.component.html',
  styleUrls: ['./report-action.component.scss']
})
export class ReportActionComponent implements OnInit {
  @Input() data: any;

  constructor() { }

  ngOnInit(): void {
    console.log("inside report ");
  }

  openReport() {
    window.open(this.data.attachments[0].url, "_blank");
  }

}
