import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtractColorComponent } from './extract-color.component';

describe('ExtractColorComponent', () => {
  let component: ExtractColorComponent;
  let fixture: ComponentFixture<ExtractColorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExtractColorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtractColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
