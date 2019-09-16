import { Component } from "@angular/core";
import { NgbRatingConfig } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-skills",
  templateUrl: "./skills.component.html",
  styleUrls: ["./skills.component.scss"]
})
export class SkillsComponent {
  constructor(config: NgbRatingConfig) {
    config.max = 5;
    config.readonly = true;
  }
}
