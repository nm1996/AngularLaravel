import { TestBed } from '@angular/core/testing';

import { GuardUserService } from './guard-user.service';

describe('GuardUserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GuardUserService = TestBed.get(GuardUserService);
    expect(service).toBeTruthy();
  });
});
