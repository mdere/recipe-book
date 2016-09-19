import { Component, OnInit } from '@angular/core';
import { DropdownDirective } from './dropdown.directive';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'rb-header',
  templateUrl: 'header.component.html',
  directives: [DropdownDirective, ROUTER_DIRECTIVES]
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
