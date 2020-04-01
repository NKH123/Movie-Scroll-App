import { TestBed } from '@angular/core/testing';

import { GetMovieApiService } from './get-movie-api.service';

describe('GetMovieApiService', () => {
  let service: GetMovieApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetMovieApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
