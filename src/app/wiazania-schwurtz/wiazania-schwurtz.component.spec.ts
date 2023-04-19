import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WiazaniaSchwurtzComponent } from './wiazania-schwurtz.component';

describe('WiazaniaSchwurtzComponent', () => {
  let component: WiazaniaSchwurtzComponent;
  let fixture: ComponentFixture<WiazaniaSchwurtzComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WiazaniaSchwurtzComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WiazaniaSchwurtzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
