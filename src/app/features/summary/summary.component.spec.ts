import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentSummaryComponent } from './summary.component';

describe('ComponentSummaryComponent', () => {
  let component: ComponentSummaryComponent;
  let fixture: ComponentFixture<ComponentSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentSummaryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
