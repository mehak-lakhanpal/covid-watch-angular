import { TestBed, async, inject } from '@angular/core/testing';

import { DistrictService } from './district.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('DistrictService', () => {
  let service: DistrictService;
  let httpMock: HttpTestingController;

  beforeEach(() =>{
    TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule,
      ],
    providers: [
      DistrictService,  
    ]
  }),
  service = TestBed.inject(DistrictService); 
  httpMock = TestBed.get(HttpTestingController);
});

  it('should be created', () => {
    const service: DistrictService = TestBed.get(DistrictService);
    expect(service).toBeTruthy();
  });

  it(`should fetch districts as an Observable`, async(inject([DistrictService],
    (districtService: DistrictService) => {
     
  districtService.getDistrictsByState()
    .subscribe((states: any) => {
    });
     
    let req = httpMock.expectOne("https://api.covid19india.org/state_district_wise.json");
    expect(req.request.method).toBe("GET");
    httpMock.verify();
     
    })));

    it(`should call getDistrictsByState method of service`, async(inject([DistrictService],
      (districtService: DistrictService) => {
      districtService.getDistrictsByState()
      .subscribe((states: any) => {
        expect(states).toHaveBeenCalled
      });
       
      let req = httpMock.expectOne("https://api.covid19india.org/state_district_wise.json");
      expect(req.request.method).toBe("GET");
      httpMock.verify();
       
      })));

});
