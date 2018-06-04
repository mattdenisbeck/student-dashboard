import { Component, Inject } from '@angular/core';
import { HoldsService } from '../../services/holds.service';
import { HoldModel } from '../../models/hold-model';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';


@Component({
  selector: 'app-holds-dialog',
  templateUrl: './holds-dialog.component.html',
  styleUrls: ['./holds-dialog.component.scss']
})
export class HoldsDialogComponent implements OnInit {
  holds: HoldModel[];
  error: string;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private holdsService: HoldsService,
              public holdsDialogRef: MatDialogRef<HoldsDialogComponent>) { }

  ngOnInit() {
    if (this.data) {
      this.holds = this.data.holds;
      this.error = this.data.errors['holds'];
    } else {

      this.holdsService.getHolds()
        .subscribe(resp => {
          // get headers
          const keys = resp.headers.keys();
          const headers = keys.map(key =>
            `${key}: ${resp.headers.get(key)}`);
          // set grades from response body
          this.holds = resp.body;
        },
        err => { this.error = err; }
        );
    }
  }

  closeSelf() {
    this.holdsDialogRef.close();
  }

}
