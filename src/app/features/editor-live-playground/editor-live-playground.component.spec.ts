import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorLivePlaygroundComponent } from './editor-live-playground.component';

describe('EditorLivePlaygroundComponent', () => {
  let component: EditorLivePlaygroundComponent;
  let fixture: ComponentFixture<EditorLivePlaygroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditorLivePlaygroundComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditorLivePlaygroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
