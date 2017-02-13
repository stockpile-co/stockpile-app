import { ComponentFixture, async, fakeAsync, tick } from '@angular/core/testing';
import { NgForm } from '@angular/forms';
import { TestUtils } from '../../test';
import { RentalDetailsPage } from './rental-details';
import { TestData } from '../../test-data';

let fixture: ComponentFixture<RentalDetailsPage> = null;
let instance: any = null;

describe('RentalDetails Page', () => {

  beforeEach(async(() => TestUtils.beforeEachCompiler([RentalDetailsPage]).then(compiled => {
    fixture = compiled.fixture;
    instance = compiled.instance;
  })));

  afterEach(() => {
    fixture.destroy();
  });

  it('is created', () => {
    expect(instance).toBeTruthy();
    expect(fixture).toBeTruthy();
  });

  it('gets navParam items', () => {
    instance.navParams.param = TestData.items;
    instance.ngOnInit();
    expect(instance.items).toBeTruthy();
  });

  it('calls onRent() on click on rent button', () => {
    spyOn(instance, 'onRent');
    TestUtils.eventFire(fixture.nativeElement.querySelectorAll('button[type="submit"]')[0], 'click');
    expect(instance.onRent).toHaveBeenCalled();
  });

  it('goes back to the root\'s nav on successful rent()', fakeAsync(() => {
    instance.details = TestData.details;
    spyOn(instance.navCtrl, 'popToRoot');
    spyOn(instance.inventoryData, 'rent').and.callThrough();
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      let form: NgForm = fixture.debugElement.children[0].injector.get(NgForm);
      instance.onRent(form);
      tick();
      expect(instance.inventoryData.rent).toHaveBeenCalled();
      expect(instance.navCtrl.popToRoot).toHaveBeenCalled();
    });
  }));
});