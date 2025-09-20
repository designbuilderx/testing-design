import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignBuilderComponent } from './design-builder.component';

describe('DesignBuilderComponent', () => {
  let component: DesignBuilderComponent;
  let fixture: ComponentFixture<DesignBuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DesignBuilderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesignBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
