import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesinglefirstComponent } from './servicesinglefirst.component';

describe('ServicesinglefirstComponent', () => {
  let component: ServicesinglefirstComponent;
  let fixture: ComponentFixture<ServicesinglefirstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ServicesinglefirstComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ServicesinglefirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
