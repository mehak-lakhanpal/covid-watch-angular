import { TestBed, async, inject } from '@angular/core/testing';

import { StateService } from './state.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { IResponse } from 'src/app/dashboard/shared/interfaces/iresponse';

describe('StateService', () => {
  let service: StateService;
  let httpMock: HttpTestingController;
 

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        ],
      providers: [
        StateService,
        
      ]
    }),
    service = TestBed.inject(StateService); 
    httpMock = TestBed.get(HttpTestingController);
});

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it(`should fetch states as an Observable`, async(inject([StateService],
    (stateService: StateService) => {
  const data: IResponse ={
    statewise : [{
      name : 'Punjab',
      confirmed : 206,
      active : 100,
      deaths : 20,
      recovered : 106,
      statecode : 'PB'
    }]
}
     
  stateService.getStates()
    .subscribe((states: any) => {
    expect(states.length).toBe(1);
    });
     
    let req = httpMock.expectOne("https://api.covid19india.org/data.json");
    expect(req.request.method).toBe("GET");
     
    req.flush(data);
    httpMock.verify();
     
    })));

    it(`should return empty data as an Observable`, async(inject([StateService],
      (stateService: StateService) => {
    let data: IResponse={
      statewise : []
    };
       
    stateService.getStates()
      .subscribe((states: any) => {
      expect(states.length).toBe(0);
      });
       
      let req = httpMock.expectOne("https://api.covid19india.org/data.json");
      expect(req.request.method).toBe("GET");
       
      req.flush(data);
      httpMock.verify();
       
      })));
});
