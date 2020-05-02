import { async, ComponentFixture, TestBed, getTestBed } from '@angular/core/testing';

import { ViewPrecautionComponent } from './view-precaution.component';
import { PrecautionService } from 'src/app/core/services/precaution.service';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { IPrecaution } from '../shared/interfaces/iprecaution';

describe('ViewPrecautionComponent', () => {
  let component: ViewPrecautionComponent;
  let fixture: ComponentFixture<ViewPrecautionComponent>;
  let service: PrecautionService;
  let injector: TestBed; 
  let httpMock: HttpTestingController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewPrecautionComponent ],
      imports: [HttpClientTestingModule, RouterTestingModule,
        ReactiveFormsModule,
        FormsModule]
    })
    .compileComponents();
    injector = getTestBed();
    service= injector.get(PrecautionService);
    httpMock = injector.get(HttpTestingController);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPrecautionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should match data with return value getPrecautions method  of service ', () => {
    let precautions : IPrecaution[] =[{
      description : 'desc',
      img : 'image'
      }
    ];
    const data = precautions;
   spyOn(service, 'getPrecautions').and.returnValue(precautions);
   component.ngOnInit();
    expect(data).toEqual(precautions);
  });

  it('should call getPrecautions method of service', () => {
    spyOn(service, 'getPrecautions').and.callThrough();
   component.ngOnInit();
   expect(service.getPrecautions).toHaveBeenCalled();
  });
});
