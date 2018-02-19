import { TestBed, inject } from '@angular/core/testing';

import { ShowProfileAvatarService } from './show-profile-avatar.service';

describe('ShowProfileAvatarService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShowProfileAvatarService]
    });
  });

  it('should be created', inject([ShowProfileAvatarService], (service: ShowProfileAvatarService) => {
    expect(service).toBeTruthy();
  }));
});
