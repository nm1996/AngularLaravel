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
  constructor(private tracking: TrackingService, public dom: DomSanitizer) {}

  ngOnInit() {
    this.tracking.getAll().subscribe((response: Tracking[]) => {
      this.tracks = response;
    });
  }
}
