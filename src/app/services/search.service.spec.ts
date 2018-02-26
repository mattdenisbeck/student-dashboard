import { TestBed, inject } from '@angular/core/testing';

import { SearchService } from './search.service';
import { NavLinksService } from './nav-links.service';

describe('SearchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        SearchService,
        NavLinksService
      ]
    });
  });

  it('should be created', inject([SearchService], (service: SearchService) => {
    expect(service).toBeTruthy();
  }));
});
