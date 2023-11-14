import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsAngularComponentComponent } from './tabs-angular-component.component';

describe('TabsAngularComponentComponent', () => {
  let component: TabsAngularComponentComponent;
  let fixture: ComponentFixture<TabsAngularComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabsAngularComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabsAngularComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
