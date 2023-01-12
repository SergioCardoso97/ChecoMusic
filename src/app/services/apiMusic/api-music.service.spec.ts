import { TestBed } from '@angular/core/testing';

import { ApiMusicService } from './api-music.service';

describe('ApiMusicService', () => {
  let service: ApiMusicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiMusicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
