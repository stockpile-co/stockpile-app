import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { CloudSettings, CloudModule } from '@ionic/cloud-angular';
import { MyApp } from './app.component';
import { HalModule } from 'ng-hal';
import { AddItemPage } from '../pages/add-item/add-item';
import { HomePage } from '../pages/home/home';
import { InventoryPage } from '../pages/inventory/inventory';
import { LoginPage } from '../pages/login/login';
import { TabsPage } from '../pages/tabs/tabs';
import { UserData } from '../providers/user-data';
import { StockpileData } from '../providers/stockpile-data';
import { InventoryData } from '../providers/inventory-data';

const cloudSettings: CloudSettings = {
  'core': {
    'app_id': 'APP_ID'
  }
};

@NgModule({
  declarations: [
    MyApp,
    AddItemPage,
    HomePage,
    InventoryPage,
    LoginPage,
    TabsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    CloudModule.forRoot(cloudSettings),
    HalModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AddItemPage,
    InventoryPage,
    HomePage,
    LoginPage,
    TabsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, InventoryData, UserData, StockpileData]
})
export class AppModule {}
