import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GreatGrandparentComponent } from './great-grandparent.component';

describe('GreatGrandparentComponent', () => {
  let component: GreatGrandparentComponent;
  let fixture: ComponentFixture<GreatGrandparentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GreatGrandparentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GreatGrandparentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
