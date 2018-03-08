import { Injectable } from '@angular/core';
import { NavLinksService } from './nav-links.service';
import { NavLinkModel } from '../models/nav-link-model';

@Injectable()
export class SearchService {
  private query = '';
  private allResults: NavLinkModel[];
  private results: NavLinkModel[];

  constructor(navLinkService: NavLinksService) {
    this.allResults = navLinkService.getNavLinks();
    this.results = this.allResults;
  }

  getQuery() {
    return this.query;
  }

  getResults() {
    return this.results;
  }

  setQuery(term: string) {
    this.query = term;
    this.updateResults();
  }

  updateResults() {
    // implement search
    this.results = this.allResults.filter(
      result => result.title.concat(result.description).toLowerCase().includes(this.query.toLowerCase())
    );
  }

}
