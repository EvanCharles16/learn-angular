import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [
    `
      .online {
        color: white;
        font-weight: bold;
        padding: 20px;
        border: 1px solid black;
        font-size: 16px;
      }
      .offline {
        color: white;
        font-weight: bold;
        padding: 20px;
        border: 1px solid black;
        font-size: 16px;
      }
    `,
  ],
})
export class ServerComponent {
  serverId: number = 10;
  serverStatus: string = 'offline';

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  getServerStatus() {
    return this.serverStatus;
  }

  getColor() {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }
}
