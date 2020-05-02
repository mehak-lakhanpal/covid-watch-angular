import { TestBed } from '@angular/core/testing';

import { PrecautionService } from './precaution.service';
import { IPrecaution } from 'src/app/precautions/shared/interfaces/iprecaution';

describe('PrecautionService', () => {
  let service: PrecautionService;

  beforeEach(() => {
    TestBed.configureTestingModule({}),
    service = TestBed.inject(PrecautionService);
  });


  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should match data with return value of getPrecautions method of service', () => {
    const precautions: IPrecaution[] = [{
      description:'desc',
      img:'img/url' ,
    }];
    spyOn(service, 'getPrecautions').and.returnValue(precautions);
    expect(service.getPrecautions()).toEqual(precautions);
  });

  it('should return null getPrecautions method of service', () => {
    spyOn(service, 'getPrecautions').and.returnValue(null);
    expect(service.getPrecautions()).toBeNull();
  });
});
