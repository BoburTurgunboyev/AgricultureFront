import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopsinglefirstComponent } from './shopsinglefirst.component';

describe('ShopsinglefirstComponent', () => {
  let component: ShopsinglefirstComponent;
  let fixture: ComponentFixture<ShopsinglefirstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShopsinglefirstComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShopsinglefirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
