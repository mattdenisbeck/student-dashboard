import { Component, OnInit, Inject, Injectable } from '@angular/core';
import { SearchService } from '../services/search.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { NavLinkModel } from '../models/nav-link-model';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  gcsesearch: SafeHtml;
  results: NavLinkModel[];

  constructor( private searchService: SearchService, private sanitizer: DomSanitizer, private router: Router, 
              @Inject(DOCUMENT) private document: any) { }

  ngOnInit() {

    this.gcsesearch = this.sanitizer.bypassSecurityTrustHtml('<gcse:search></gcse:search>');
    const cx = '013408862595800364374:iesb8s_v2ym';
    const gcse = this.document.createElement('script');
    gcse.type = 'text/javascript';
    gcse.async = true;
    gcse.src = 'https://cse.google.com/cse.js?cx=' + cx;
    const s = this.document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(gcse, s);

    // set search query from query param
    this.searchService.setQuery(decodeURI(this.router.url.split('=')[1]));
    this.results = this.searchService.getResults();
  }

  searchOnKeyUp(query: string) {
    this.searchService.setQuery(query);
    this.results = this.searchService.getResults();
  }
}
