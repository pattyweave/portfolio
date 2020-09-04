import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { DictionaryService } from 'src/app/services/dictionary.service';


@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  $content: Observable<any[]>;


  constructor(private afs: AngularFirestore) { }

  ngOnInit() {
    const landingCollection: AngularFirestoreCollection<any> = this.afs.collection('landing');
    this.$content = landingCollection.valueChanges();
  }
  

}
