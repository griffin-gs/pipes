import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {AsyncPipe, DatePipe, NgClass, NgForOf, UpperCasePipe} from "@angular/common";
import {ShortenPipe} from "./shorten.pipe";
import {FormsModule} from "@angular/forms";
import {FilterPipe} from "./filter.pipe";
import {ReversePipe} from "./reverse.pipe";
import {SortPipe} from "./sort.pipe";

export interface Server {
  instanceType: keyof string;
  name: keyof string;
  status: keyof string;
  started: keyof Date;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgClass, NgForOf, UpperCasePipe, DatePipe, ShortenPipe, FormsModule, FilterPipe, AsyncPipe, ReversePipe, SortPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pipes';
  appStatus = new Promise<String>((resolve, reject) => {
    setTimeout(() => {
      resolve('stable');
    }, 2000);
  });
  // Build a reverse pipe (reverse a string) - use that on status
  // Build a sort pipe to sort the list by name
  servers = [
    {
      instanceType: 'medium',
      name: 'Production',
      status: 'stable',
      started: new Date(15, 1, 2017)
    },
    {
      instanceType: 'large',
      name: 'User Database',
      status: 'stable',
      started: new Date(15, 1, 2017)
    },
    {
      instanceType: 'small',
      name: 'Development Server',
      status: 'offline',
      started: new Date(15, 1, 2017)
    },
    {
      instanceType: 'small',
      name: 'Testing Environment Server',
      status: 'stable',
      started: new Date(15, 1, 2017)
    }
  ];
  filteredStatus = '';

  getStatusClasses(server: {instanceType: string, name: string, status: string, started: Date}) {
    return {
      'list-group-item-success': server.status === 'stable',
      'list-group-item-warning': server.status === 'offline',
      'list-group-item-danger': server.status === 'critical'
    };
  }

  onAddServer() {
    this.servers.push({
      instanceType: 'small',
      name: 'New Server',
      status: 'stable',
      started: new Date(15, 1, 2017)
    });
  }
}
