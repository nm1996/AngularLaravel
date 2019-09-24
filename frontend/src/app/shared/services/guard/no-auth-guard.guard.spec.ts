import { TestBed, async, inject } from '@angular/core/testing';

import { NoAuthGuardGuard } from './no-auth-guard.guard';

describe('NoAuthGuardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NoAuthGuardGuard]
    });
  });

  it('should ...', inject([NoAuthGuardGuard], (guard: NoAuthGuardGuard) => {
    expect(guard).toBeTruthy();
  }));
});
