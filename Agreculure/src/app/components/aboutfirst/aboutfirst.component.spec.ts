import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutfirstComponent } from './aboutfirst.component';

describe('AboutfirstComponent', () => {
  let component: AboutfirstComponent;
  let fixture: ComponentFixture<AboutfirstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AboutfirstComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AboutfirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
