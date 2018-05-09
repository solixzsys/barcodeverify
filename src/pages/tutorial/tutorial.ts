import { Component } from '@angular/core';
import { IonicPage, MenuController, NavController, Platform } from 'ionic-angular';

import { TranslateService } from '@ngx-translate/core';

export interface Slide {
  title: string;
  description: string;
  image: string;
}

@IonicPage()
@Component({
  selector: 'page-tutorial',
  templateUrl: 'tutorial.html'
})
export class TutorialPage {
  slides: Slide[];
  showSkip = true;
  dir: string = 'ltr';

  constructor(public navCtrl: NavController, public menu: MenuController, public platform: Platform) {
    this.dir = platform.dir();
    
        this.slides = [
          {
            title: 'Identify the Product you intend to Purchase',
            description: 'The First Step in getting information about the product is to first of all identify the product you are intrested in.',
            image: 'assets/img/identify_338x240.png',
          },
          {
            title: "Capture the Product's BarCode Image",
            description: "With your Mobile Device camera, capture the barcode stripe image for product and manufacturer information retrival.",
            image: 'assets/img/capture_338x240.png',
          },
          {
            title: "Share the retrived information",
            description: "After you are satisfied with the information retrieved, you can share the information to your loved ones !.",
            image: 'assets/img/share_338x240.png',
            
          }
        ];
    
  }

  startApp() {
    this.navCtrl.setRoot('WelcomePage', {}, {
      animate: true,
      direction: 'forward'
    });
  }

  onSlideChangeStart(slider) {
    this.showSkip = !slider.isEnd();
  }

  ionViewDidEnter() {
    // the root left menu should be disabled on the tutorial page
    this.menu.enable(false);
  }

  ionViewWillLeave() {
    // enable the root left menu when leaving the tutorial page
    this.menu.enable(true);
  }

}
