import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatedproductsComponent } from './relatedproducts.component';

describe('RelatedproductsComponent', () => {
  let component: RelatedproductsComponent;
  let fixture: ComponentFixture<RelatedproductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RelatedproductsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RelatedproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
