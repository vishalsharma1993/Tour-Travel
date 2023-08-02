import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForntpageComponent } from './forntpage.component';

describe('ForntpageComponent', () => {
  let component: ForntpageComponent;
  let fixture: ComponentFixture<ForntpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForntpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForntpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
