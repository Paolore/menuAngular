import { TestBed } from '@angular/core/testing';

import { ApiMenuService } from './api-menu.service';

describe('ApiMenuService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiMenuService = TestBed.get(ApiMenuService);
    expect(service).toBeTruthy();
  });
});
