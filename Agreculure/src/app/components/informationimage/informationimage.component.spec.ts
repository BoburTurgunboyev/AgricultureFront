import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationimageComponent } from './informationimage.component';

describe('InformationimageComponent', () => {
  let component: InformationimageComponent;
  let fixture: ComponentFixture<InformationimageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InformationimageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InformationimageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
