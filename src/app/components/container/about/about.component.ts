import { Component, OnInit } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import { faLinkedinIn, faFacebookF, faGithub } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  public faLinkedinIn : IconDefinition = faLinkedinIn;
  public faFacebookF : IconDefinition = faFacebookF;
  public faGithub : IconDefinition = faGithub;

  constructor() { }

  ngOnInit() {
  }

}
