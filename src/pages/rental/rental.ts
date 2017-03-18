import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { InventoryData } from '../../providers/inventory-data';
import { StockpileData } from '../../providers/stockpile-data';
import { ItemPage } from '../item/item';
import { RentalDetailsPage } from '../rental-details/rental-details';
import { Actions, Messages } from '../../constants';

@Component({
  selector: 'page-rental',
  templateUrl: 'rental.html'
})
export class RentalPage {
  actions = Actions;
  tag: string = '';
  action: Actions = '';
  items = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public inventoryData: InventoryData,
    public stockpileData: StockpileData
  ) { }

  ngOnInit() {
    this.tag = this.navParams.get('tag');
    this.action = this.navParams.get('action');

    this.onAdd();
  }

  onAdd() {
    this.inventoryData.getItem(this.tag).subscribe(
      item => this.items.push(item),
      err => this.stockpileData.showToast(err)
    );

    this.tag = '';
  }

  viewItem(item) {
    this.navCtrl.push(ItemPage, {
      tag: item.tag,
      action: this.actions.edit
    });
  }

  onContinue() {
    this.navCtrl.push(RentalDetailsPage, {
      items: this.items
    });
  }

  onReturn() {
    let returns = [];

    for (const item of this.items) {
      returns.push(this.inventoryData.return(item.tag).toPromise());
    }

    Promise.all(returns).then(
      success => {
        this.stockpileData.showToast(Messages.itemsReturned);
        this.navCtrl.pop();
      },
      err => this.stockpileData.showToast(err)
    );
  }

  onScan() {
    this.stockpileData.scan().then(
      barcodeData => {
        if (!barcodeData.cancelled) {
          this.tag = barcodeData.text;
          this.onAdd();
        }
      },
      err => this.stockpileData.showToast(err)
    );
  }
}
