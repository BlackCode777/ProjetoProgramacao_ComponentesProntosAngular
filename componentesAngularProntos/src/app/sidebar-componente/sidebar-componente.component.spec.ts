import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarComponenteComponent } from './sidebar-componente.component';

describe('SidebarComponenteComponent', () => {
  let component: SidebarComponenteComponent;
  let fixture: ComponentFixture<SidebarComponenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarComponenteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarComponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
