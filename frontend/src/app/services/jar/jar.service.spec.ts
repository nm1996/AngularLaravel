import { TestBed } from '@angular/core/testing';

import { JarService } from './jar.service';

describe('JarService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JarService = TestBed.get(JarService);
    expect(service).toBeTruthy();
  });
});
