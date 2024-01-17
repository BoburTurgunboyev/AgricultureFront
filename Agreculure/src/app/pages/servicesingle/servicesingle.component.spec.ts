import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesingleComponent } from './servicesingle.component';

describe('ServicesingleComponent', () => {
  let component: ServicesingleComponent;
  let fixture: ComponentFixture<ServicesingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ServicesingleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ServicesingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
