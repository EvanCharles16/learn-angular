import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-third-assignment',
  templateUrl: './third-assignment.component.html',
  styleUrls: ['./third-assignment.component.css'],
})
export class ThirdAssignmentComponent implements OnInit {
  constructor() {}

  showSecret = false;
  log = [];

  onToogleDisplay() {
    this.showSecret = !this.showSecret;
    // this.log.push(this.log.length + 1);
    this.log.push(new Date());
  }

  ngOnInit(): void {}
}
