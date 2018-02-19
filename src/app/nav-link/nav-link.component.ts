import { Component, OnInit, Input } from '@angular/core';
import { NavLinkModel } from '../models/nav-link-model';

@Component({
  selector: 'app-nav-link',
  templateUrl: './nav-link.component.html',
  styleUrls: ['./nav-link.component.scss']
})
export class NavLinkComponent implements OnInit {
  @Input() link: NavLinkModel;
  @Input() route: string;

  constructor() { }

  ngOnInit() {
  }

}
