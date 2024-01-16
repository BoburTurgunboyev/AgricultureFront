import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BetterComponent } from './better.component';

describe('BetterComponent', () => {
  let component: BetterComponent;
  let fixture: ComponentFixture<BetterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BetterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BetterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
