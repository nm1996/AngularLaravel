import { Component, OnInit } from "@angular/core";
import { Tracking } from "src/app/shared/models/tracking.model";
import { TrackingService } from "../../services/tracking/tracking.service";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: "app-tracking",
  templateUrl: "./tracking.component.html",
  styleUrls: ["./tracking.component.scss"]
})
export class TrackingComponent implements OnInit {
  tracks: Tracking[];
  delivered: Tracking[];
  constructor(private tracking: TrackingService, public dom: DomSanitizer) {}

  ngOnInit() {
    this.tracking.getAll().subscribe((response: Tracking[]) => {
      this.tracks = response;
      console.log(response);
    });

    this.tracking.getDelivered().subscribe((response: Tracking[]) => {
      console.log(response), (this.delivered = response);
    });
  }

  deleteOne(id: number) {
    this.tracking.deleteOne(id).subscribe(
      (response: Object) => (
        console.log(response),
        this.tracking.getAll().subscribe((response: Tracking[]) => {
          this.tracks = response;
        }),
        this.tracking.getDelivered().subscribe((response: Tracking[]) => {
          this.delivered = response;
        })
      )
    );
  }
  deleteAll(data) {
    this.tracking.deleteAll(data).subscribe((response: Object) => {
      this.tracking.getAll().subscribe((response: Tracking[]) => {
        this.tracks = response;
      });
    });
  }

  makeDelivered(id: number) {
    this.tracking.makeDeliver(id).subscribe((response: number) => {
      console.log(response),
        this.tracking.getAll().subscribe((response: Tracking[]) => {
          this.tracks = response;
          console.log(response);
        }),
        this.tracking.getDelivered().subscribe((response: Tracking[]) => {
          console.log(response), (this.delivered = response);
        });
    });
  }
}
