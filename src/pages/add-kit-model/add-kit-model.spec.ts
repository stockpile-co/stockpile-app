import { ComponentFixture, async } from '@angular/core/testing';
import { TestUtils } from '../../test';
import { TestData } from '../../test-data';
import { ItemProperties, Actions } from '../../constants';

import { AddKitModelPage } from './add-kit-model';
import { ItemFilterPage } from '../item-filter/item-filter';

let fixture: ComponentFixture<AddKitModelPage> = null;
let instance: any = null;

describe('AddKitModel Page', () => {

  beforeEach(async(() => TestUtils.beforeEachCompiler([AddKitModelPage]).then(compiled => {
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

  it('gets brands, models, and action', () => {
    instance.navParams.param = Actions.edit;
    spyOn(instance.brandsActions, 'fetchBrands');
    spyOn(instance.modelsActions, 'fetchModels');
    instance.ngOnInit();
    expect(instance.brandsActions.fetchBrands).toHaveBeenCalled();
    expect(instance.modelsActions.fetchModels).toHaveBeenCalled();
    expect(instance.action).toEqual(Actions.edit);
  });

  it('initializes quantity to 1', () => {
    instance.navParams.param = Actions.add;
    instance.ngOnInit();
    expect(instance.kitModel.quantity).toEqual(1);
  });

  it('creates item onSave() if action is add', () => {
    spyOn(instance.kitModelsActions, 'createTemp');
    spyOn(instance.navCtrl, 'pop');
    instance.kitModel = TestData.kitModel;
    instance.action = Actions.add;
    instance.onSave();
    expect(instance.kitModelsActions.createTemp).toHaveBeenCalledWith(TestData.kitModel);
    expect(instance.navCtrl.pop).toHaveBeenCalled();
  });

  it('updates item onSave() if action is edit', () => {
    spyOn(instance.kitModelsActions, 'updateTemp');
    spyOn(instance.navCtrl, 'pop');
    instance.kitModel = TestData.kitModel;
    instance.action = Actions.edit;
    instance.onSave();
    expect(instance.kitModelsActions.updateTemp).toHaveBeenCalledWith(TestData.kitModel);
    expect(instance.navCtrl.pop).toHaveBeenCalled();
  });

  it('does not update item onSave() if there are errors', () => {
    spyOn(instance.kitModelsActions, 'updateTemp');
    spyOn(instance.navCtrl, 'pop');
    instance.action = Actions.edit;
    instance.onSave();
    expect(instance.kitModelsActions.updateTemp).not.toHaveBeenCalled();
    expect(instance.navCtrl.pop).not.toHaveBeenCalled();
  });

  it('updates errors on checkIfErrors()', () => {
    instance.kitModel = {
      brand: TestData.kitModel.brand
    };
    instance.checkIfErrors();
    expect(instance.errors).toEqual({
      brand: false,
      model: true,
      quantity: true
    });
  });

  it('creates a modal on presentModal()', () => {
    instance.kitModel = TestData.kitModel;
    spyOn(instance.modalCtrl, 'create').and.callThrough();
    instance.onPresentModal(ItemProperties.brand);
    expect(instance.modalCtrl.create).toHaveBeenCalledWith(ItemFilterPage, { type: ItemProperties.brand, brandID: TestData.kitModel.brandID });
  });

  it('returns brand on getNewKitModelProperties', () => {
    const kitModelNewBrand = instance.getNewKitModelProperties(ItemProperties.brand, {
      name: TestData.kitModel.brand,
      brandID: TestData.kitModel.brandID
    });
    expect(kitModelNewBrand).toEqual(TestData.kitModelNewBrand);
  });

  it('returns model on getNewKitModelProperties', () => {
    const kitModelNewModel = instance.getNewKitModelProperties(ItemProperties.model, {
      name: TestData.kitModel.model,
      modelID: TestData.kitModel.modelID
    });
    expect(kitModelNewModel).toEqual(TestData.kitModelNewModel);
  });
});
