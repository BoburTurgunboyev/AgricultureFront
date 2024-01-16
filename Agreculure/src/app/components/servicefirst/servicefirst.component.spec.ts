import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicefirstComponent } from './servicefirst.component';

describe('ServicefirstComponent', () => {
  let component: ServicefirstComponent;
  let fixture: ComponentFixture<ServicefirstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ServicefirstComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ServicefirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
