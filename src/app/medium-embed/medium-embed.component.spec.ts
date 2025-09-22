import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MediumEmbedComponent } from './medium-embed.component';

describe('MediumEmbedComponent', () => {
  let component: MediumEmbedComponent;
  let fixture: ComponentFixture<MediumEmbedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediumEmbedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediumEmbedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
