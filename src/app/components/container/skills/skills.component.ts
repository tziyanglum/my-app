import { Component } from "@angular/core";
import { NgbRatingConfig } from "@ng-bootstrap/ng-bootstrap";
import {
  IconDefinition,
  faAngular,
  faHtml5,
  faSass,
  faJs,
  faBootstrap,
  faNodeJs,
  faDocker,
  faGithub,
  faCss3Alt
} from "@fortawesome/free-brands-svg-icons";

@Component({
  selector: "app-skills",
  templateUrl: "./skills.component.html",
  styleUrls: ["./skills.component.scss"]
})
export class SkillsComponent {
  public faAngular: IconDefinition = faAngular;
  public faHtml5: IconDefinition = faHtml5;
  public faSass: IconDefinition = faSass;
  public faJs: IconDefinition = faJs;
  public faBootstrap: IconDefinition = faBootstrap;
  public faNodeJs: IconDefinition = faNodeJs;
  public faGithub: IconDefinition = faGithub;
  public faDocker: IconDefinition = faDocker;
  public faCss3Alt: IconDefinition = faCss3Alt;

  constructor(config: NgbRatingConfig) {
    config.max = 5;
    config.readonly = true;
  }
}
