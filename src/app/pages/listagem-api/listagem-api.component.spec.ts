import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemApiComponent } from './listagem-api.component';

describe('ListagemApiComponent', () => {
  let component: ListagemApiComponent;
  let fixture: ComponentFixture<ListagemApiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListagemApiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListagemApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
