import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/header/header.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ContainerComponent } from "./components/container/container.component";
import { HttpClientModule } from "@angular/common/http";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { AboutComponent } from './components/container/about/about.component';
import { ExperienceComponent } from './components/container/experience/experience.component';
import { EducationComponent } from './components/container/education/education.component';
import { SkillsComponent } from './components/container/skills/skills.component';
import { InterestComponent } from './components/container/interest/interest.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContainerComponent,
    AboutComponent,
    ExperienceComponent,
    EducationComponent,
    SkillsComponent,
    InterestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
