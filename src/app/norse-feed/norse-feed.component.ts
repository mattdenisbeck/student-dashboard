import { Component, OnInit } from '@angular/core';
import { NorseFeedService } from '../services/norse-feed.service';
import { NorseFeedItem } from '../models/norse-feed-item';
import { MatDialog } from '@angular/material';
import { HoldsDialogComponent } from '../dashboard/holds-dialog/holds-dialog.component';

@Component({
  selector: 'app-norse-feed',
  templateUrl: './norse-feed.component.html',
  styleUrls: ['./norse-feed.component.scss']
})
export class NorseFeedComponent implements OnInit {

  norseFeedItems: NorseFeedItem[];

  constructor( private norseFeedService: NorseFeedService, public holdsDialog: MatDialog ) { }

  ngOnInit() {
    this.norseFeedItems = this.norseFeedService.getFeedItems();
  }

  openDialog(item: NorseFeedItem) {
    let dialogRef: any;
    switch (item.feature) {
      case 'Holds' : {
        dialogRef = this.holdsDialog.open(HoldsDialogComponent, {
          'panelClass': 'holdsDialog',
          'minWidth': '360px',
          'position': {'top': '100px'}
        });
        break;
      }
    }
  }

}
