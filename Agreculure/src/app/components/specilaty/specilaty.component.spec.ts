import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecilatyComponent } from './specilaty.component';

describe('SpecilatyComponent', () => {
  let component: SpecilatyComponent;
  let fixture: ComponentFixture<SpecilatyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SpecilatyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SpecilatyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
