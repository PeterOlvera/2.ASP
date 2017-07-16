import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutsComponent } from './about.component';

describe('AboutsComponent', () => {
  let component: AboutsComponent;
  let fixture: ComponentFixture<AboutsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
