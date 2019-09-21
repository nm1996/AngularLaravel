import { TestBed } from '@angular/core/testing';

import { ProductAdminService } from './product-admin.service';

describe('ProductAdminService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductAdminService = TestBed.get(ProductAdminService);
    expect(service).toBeTruthy();
  });
});
