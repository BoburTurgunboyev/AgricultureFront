import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuentityComponent } from './quentity.component';

describe('QuentityComponent', () => {
  let component: QuentityComponent;
  let fixture: ComponentFixture<QuentityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QuentityComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QuentityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
