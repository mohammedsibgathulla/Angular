import { Component, OnInit } from '@angular/core';

@Component({
  //selector: 'app-servers'
  //selector: '[app-servers]',
  selector: '.app-servers',
  // template: `<app-server></app-server>
  // <app-server></app-server>`,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  serverCreationStatus = "No server was created";
  allowNewServer = false;
  serverName = 'Test Server';
  username = '';

  serverCreated = false;

  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.serverCreationStatus = "Server was created "+this.serverName;
  }

  updateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

 

}
