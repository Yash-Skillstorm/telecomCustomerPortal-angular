import { TestBed } from '@angular/core/testing';

import { UserplandeviceService } from './userplandevice.service';

describe('UserplandeviceService', () => {
  let service: UserplandeviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserplandeviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
