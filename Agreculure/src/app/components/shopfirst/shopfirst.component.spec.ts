import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopfirstComponent } from './shopfirst.component';

describe('ShopfirstComponent', () => {
  let component: ShopfirstComponent;
  let fixture: ComponentFixture<ShopfirstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShopfirstComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShopfirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
