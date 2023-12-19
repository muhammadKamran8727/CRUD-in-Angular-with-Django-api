import { TestBed } from '@angular/core/testing';

import { StudentsdataService } from './studentsdata.service';

describe('StudentsdataService', () => {
  let service: StudentsdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentsdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
