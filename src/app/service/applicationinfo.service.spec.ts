import { TestBed } from '@angular/core/testing';

import { ApplicationinfoService } from './applicationinfo.service';

describe('ApplicationinfoService', () => {
  let service: ApplicationinfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApplicationinfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
