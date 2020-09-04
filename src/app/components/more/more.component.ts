import { Component, OnInit } from '@angular/core';

// Font awesome
import {
  faMountain, faTree, faCampground, faAlignLeft,
  faToilet, faToiletPaper, faChartLine, faCannabis,
  faBroadcastTower, faSms, faHome, faCar, faBook,
  faUmbrella, faTerminal, faMicrochip
} from '@fortawesome/free-solid-svg-icons';

// angular fire
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { DictionaryService } from 'src/app/services/dictionary.service';

@Component({
  selector: 'app-more',
  templateUrl: './more.component.html',
  styleUrls: ['./more.component.scss']
})
export class MoreComponent implements OnInit {

  icon: any;

  $current: Observable<any[]>;

  $completed: Observable<any[]>;

  word: Observable<any>;

  faBook = faBook;


  constructor(private afs: AngularFirestore, private dict: DictionaryService) { }

  ngOnInit() {

    const completedCollection: AngularFirestoreCollection<any> = this.afs.collection<any>('completed');
    this.$completed = completedCollection.valueChanges();

    const currentCollection: AngularFirestoreCollection<any> = this.afs.collection<any>('current');
    this.$current = currentCollection.valueChanges();

  }


  bullet(icon) {

    switch (icon) {
      case 'tree':
        return faTree;
      case 'mountain':
        return faMountain;
      case 'campground':
        return faCampground;
      case 'toiletPaper':
        return faToiletPaper;
      case 'chartLine':
        return faChartLine;
      case 'cannabis':
        return faCannabis;
      case 'broadcastTower':
        return faBroadcastTower;
      case 'sms':
        return faSms;
      case 'home':
        return faHome;
      case 'car':
        return faCar;
      case 'umbrella':
        return faUmbrella;
      case 'terminal':
        return faTerminal;
      case 'microchip':
        return faMicrochip;
    }

  }

}
