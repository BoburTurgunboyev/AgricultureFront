import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopsingleComponent } from './shopsingle.component';

describe('ShopsingleComponent', () => {
  let component: ShopsingleComponent;
  let fixture: ComponentFixture<ShopsingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShopsingleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShopsingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
