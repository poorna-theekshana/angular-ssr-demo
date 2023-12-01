import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SsrDemoComponent } from './ssr-demo.component';

describe('SsrDemoComponent', () => {
  let component: SsrDemoComponent;
  let fixture: ComponentFixture<SsrDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SsrDemoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SsrDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
