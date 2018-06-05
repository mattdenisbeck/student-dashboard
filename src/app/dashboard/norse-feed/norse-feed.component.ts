import { Component, OnInit } from '@angular/core';
import { NorseFeedService } from '../../services/norse-feed.service';
import { NorseFeedItem } from '../../models/norse-feed-item';
import { MatDialog } from '@angular/material';
import { HoldsDialogComponent } from '../holds-dialog/holds-dialog.component';

@Component({
  selector: 'app-norse-feed',
  templateUrl: './norse-feed.component.html',
  styleUrls: ['./norse-feed.component.scss']
})
export class NorseFeedComponent implements OnInit {

  norseFeedItems: NorseFeedItem[];
  error: string;

  constructor( private norseFeedService: NorseFeedService, public holdsDialog: MatDialog ) { }

  ngOnInit() {
    this.norseFeedService.getFeedItems()
      .subscribe(resp => {
        // get headers
        const keys = resp.headers.keys();
        const headers = keys.map(key =>
          `${key}: ${resp.headers.get(key)}`);

        // set advisors from response body
        this.norseFeedItems = resp.body.sort(
            (item1, item2) => {
              if (item1.timestamp < item2.timestamp) {
                return 1;
              } else {
                return -1;
              }
            });
      },
        err => { this.error = err; }
      );
  }

  openDialog(item: NorseFeedItem) {
    let dialogRef: any;
    switch (item.feature) {
      case 'Holds' : {
        dialogRef = this.holdsDialog.open(HoldsDialogComponent, {
          'panelClass': 'allDialogs',
          'minWidth': '360px',
          'position': {'top': '100px'}
        });
        break;
      }
    }
  }

}
