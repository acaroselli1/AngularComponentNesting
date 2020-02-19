import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GreatGrandchildComponent } from './great-grandchild.component';

describe('GreatGrandchildComponent', () => {
  let component: GreatGrandchildComponent;
  let fixture: ComponentFixture<GreatGrandchildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GreatGrandchildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GreatGrandchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
