import { TestBed, inject } from '@angular/core/testing';

import { NorseFeedService } from './norse-feed.service';

describe('NorseFeedService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NorseFeedService]
    });
  });

  it('should be created', inject([NorseFeedService], (service: NorseFeedService) => {
    expect(service).toBeTruthy();
  }));
});
