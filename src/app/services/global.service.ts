import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  isSidebarActive:boolean = true;
  constructor() { }

  sidebarToggle(){
    this.isSidebarActive = !this.isSidebarActive;
  }
}
