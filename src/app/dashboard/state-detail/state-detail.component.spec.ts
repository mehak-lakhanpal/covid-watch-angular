import { async, ComponentFixture, TestBed, getTestBed } from '@angular/core/testing';

import { StateDetailComponent } from './state-detail.component';
import { DistrictService } from 'src/app/core/services/district.service';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { APP_BASE_HREF } from '@angular/common'; 
import { RouterTestingModule } from '@angular/router/testing';

describe('StateDetailComponent', () => {
  let component: StateDetailComponent;
  let fixture: ComponentFixture<StateDetailComponent>;
  let service: DistrictService;
  let injector: TestBed; 
  let httpMock: HttpTestingController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StateDetailComponent ],
      imports: [HttpClientTestingModule,
         RouterTestingModule
      ],
      providers: [ { provide: APP_BASE_HREF, useValue: '/' }]
    })
    .compileComponents();
    injector = getTestBed();
    service= injector.get(DistrictService);
    httpMock = injector.get(HttpTestingController);  
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StateDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

it('should call getDistrictsByState method of component', () => {
    spyOn(service, 'getDistrictsByState').and.callThrough();
    component.ngOnInit()
    component.listAllDistricts()
  expect(service.getDistrictsByState).toBeTruthy();
});

 it('should call listAllDistricts method of component', () => {
  spyOn(component, 'listAllDistricts').and.callThrough();
  component.listAllDistricts()
  expect(component.listAllDistricts).toHaveBeenCalled();
 
});
});
