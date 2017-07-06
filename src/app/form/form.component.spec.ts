import { async, fakeAsync, ComponentFixture, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { FormComponent } from './form.component';
import { DataService } from '../shared/data.service';
import { Story } from '../shared/story';

function newEvent(eventName: string, bubbles = false, cancelable = false) {
  let evt = document.createEvent('CustomEvent');  // MUST be 'CustomEvent'
  evt.initCustomEvent(eventName, bubbles, cancelable, null);
  return evt;
}

describe('FormComponent', () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormComponent ],
      imports: [FormsModule],
      providers: [DataService]
    })
    .compileComponents();
  }));

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  describe('HTML Components', ()=>{
    it('Form Component should be created', () => {
      expect(component).toBeTruthy();
    });

    it('should have a form', ()=>{
      let form = fixture.debugElement.query(By.css('form'));
      expect(form).toBeTruthy();
    });

    it('should have two form groups', ()=>{
      let formgroups = fixture.debugElement.queryAll(By.css('.form-group'));
      expect(formgroups.length).toEqual(2);
    })

    it('should have a title label', ()=>{
      let titleLabel = fixture.debugElement.query(By.css('#lb-title'));
      expect(titleLabel).toBeTruthy();
      expect(titleLabel.nativeElement.textContent).toEqual('Title');
    })

    it('should have a title input', ()=>{
      let titleInput = fixture.debugElement.query(By.css('#title'));
      expect(titleInput).toBeTruthy();
    })

    it('should have a link label', ()=>{
      let linkLabel = fixture.debugElement.query(By.css('#lb-link'));
      expect(linkLabel).toBeTruthy();
      expect(linkLabel.nativeElement.textContent).toEqual('Link');
    })

    it('should have a link input', ()=>{
      let linkInput = fixture.debugElement.query(By.css('#link'));
      expect(linkInput).toBeTruthy();
    })

    it('should have a submit button', ()=>{
      let submitBtn = fixture.debugElement.query(By.css('button'));
      expect(submitBtn).toBeTruthy();
      expect(submitBtn.nativeElement.textContent).toEqual('Submit');
    })
  });

  describe('Form Functionality', ()=>{
    it('title input should be binded to title variable', ()=>{
      let newName="my name";
      let titleInput = fixture.debugElement.query(By.css('#title')).nativeElement;

      expect(titleInput.value).toBe('', 'component title is empty');
      titleInput.value = newName;
      titleInput.dispatchEvent(newEvent('input'));
      fixture.detectChanges();
      expect(titleInput.value).toBe(newName, 'component title is updated');
      expect(component.title).toBe(newName, 'component title variable has changed');
    })

    it('link input should be binded to link variable', ()=>{
      let newLink="www.testingLink.com";
      let linkInput = fixture.debugElement.query(By.css('#link')).nativeElement;

      expect(linkInput.value).toBe('', 'component link is empty');
      linkInput.value = newLink;
      linkInput.dispatchEvent(newEvent('input'));
      fixture.detectChanges();
      expect(linkInput.value).toBe(newLink, 'component link is updated');
      expect(component.link).toBe(newLink, 'component link variable has changed');
    })

    it('should call addStory method in service', ()=>{
      //spy on DataService
      let ds = fixture.debugElement.injector.get(DataService);
      let spy = spyOn(ds, 'addStory').and.returnValue("addStory called");
      let submitBtn = fixture.debugElement.query(By.css('button'));

      expect(spy.calls.any()).toBe(false, 'addStory not called');
      submitBtn.triggerEventHandler('click', null);
      expect(spy.calls.any()).toBe(true, 'addStory called after click');
    })
  });
});
