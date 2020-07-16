import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // selector: '[app-servers]',
  // selector: '.app-servers',
  // template: `
  //   <app-server></app-server>
  //   <app-server></app-server>
  // `,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created !!';
  serverName = 'Test';
  userName = 'Username';
  userCreationStatus = 'No user was created !!';
  userCreation = false;
  users = ['', '']; // Add how many on users created (default)

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {}

  onCreateServer() {
    this.serverCreationStatus =
      'Server was created!! Name is ' + this.serverName;
  }

  onUpdateServerName(event: any) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  onCreateUser() {
    this.userCreation = true;
    this.users.push(this.userName);
    this.userCreationStatus = 'User was created !! Name is ' + this.userName;
    // this.userName = '';
  }
}
