import { TestBed } from '@angular/core/testing';

import { ContactAdminService } from './contact-admin.service';

describe('ContactAdminService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ContactAdminService = TestBed.get(ContactAdminService);
    expect(service).toBeTruthy();
  });
});
