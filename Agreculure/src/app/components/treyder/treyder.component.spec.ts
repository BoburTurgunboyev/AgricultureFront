import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreyderComponent } from './treyder.component';

describe('TreyderComponent', () => {
  let component: TreyderComponent;
  let fixture: ComponentFixture<TreyderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TreyderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TreyderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
