import { async, ComponentFixture, TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'; 
import { StateListComponent } from './state-list.component';
import { StateService } from 'src/app/core/services/state.service';
import { of, Observable } from 'rxjs';
import { IState } from '../shared/interfaces/istate';
import { RouterTestingModule } from '@angular/router/testing';

describe('StateListComponent', () => {
  let component: StateListComponent;
  let fixture: ComponentFixture<StateListComponent>;
  let service: StateService;
  let injector: TestBed; 
  let httpMock: HttpTestingController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StateListComponent ],
      imports: [HttpClientTestingModule, RouterTestingModule]
    })
    .compileComponents();
    injector = getTestBed();
    service= injector.get(StateService);
    httpMock = injector.get(HttpTestingController);  

  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StateListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getStates method of service', () => {
   spyOn(service, 'getStates').and.callThrough();
  component.ngOnInit()
   expect(service.getStates).toHaveBeenCalled();
});

it('should match data with return value getStates method  of service', () => {

  const data: IState[] = [{name : 'Punjab',
    confirmed : 206,
    active : 100,
    deaths : 20,
    recovered : 106,
    statecode : 'PB'
  }];
 let states$: Observable<IState[]>;
 states$ = of(data);
 spyOn(service, 'getStates').and.returnValue(of(data));
 states$.subscribe((states) => {
  expect(states).toEqual(data);
});
});
})
