import { TestBed, inject } from '@angular/core/testing';

import { ProfileBannerService } from './profile-banner.service';

describe('ProfileBannerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProfileBannerService]
    });
  });

  it('should be created', inject([ProfileBannerService], (service: ProfileBannerService) => {
    expect(service).toBeTruthy();
  }));
});
