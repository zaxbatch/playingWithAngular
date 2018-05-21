import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Component03Component } from './component03.component';

describe('Component03Component', () => {
  let component: Component03Component;
  let fixture: ComponentFixture<Component03Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Component03Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Component03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
