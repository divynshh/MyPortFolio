import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { HeroComponent } from './hero/hero.component';
import { HerotitleComponent } from './herotitle/herotitle.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { VideoComponent } from './video/video.component';
import { Herotitle2Component } from './herotitle2/herotitle2.component';
import { SocialTrayComponent } from './social-tray/social-tray.component';
import { AboutComponent } from './about/about.component';
import { SkillScaleComponent } from './skill-scale/skill-scale.component';
import { SkillsetComponent } from './skillset/skillset.component';
import { ExperienceComponent } from './experience/experience.component';
import { ProjectsComponent } from './projects/projects.component';
import { FooterComponent } from './footer/footer.component';
import { ProjectcardComponent } from './projectcard/projectcard.component';
import { GetInTouchComponent } from './get-in-touch/get-in-touch.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { HttpClientModule } from '@angular/common/http';
import { ContactService } from './contact.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ResumeViewerComponent } from './resume-viewer/resume-viewer.component';
import { BlogComponent } from './blog/blog.component';
import { SwiperModule } from 'swiper/angular';
import { MediumEmbedComponent } from './medium-embed/medium-embed.component';  // Import SwiperModule here
import { StripHtmlPipe } from './shared/strip-html.pipe'; // ✅ Adjust path


@NgModule({
  declarations: [
    AppComponent,
    StripHtmlPipe,
    NavbarComponent,
    HeroComponent,
    HerotitleComponent,
    VideoComponent,
    Herotitle2Component,
    SocialTrayComponent,
    AboutComponent,
    SkillScaleComponent,
    SkillsetComponent,
    ExperienceComponent,
    ProjectsComponent,
    FooterComponent,
    ProjectcardComponent,
    GetInTouchComponent,
    ContactFormComponent,
    ResumeViewerComponent,
    BlogComponent,
    MediumEmbedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    SwiperModule,
    HttpClientModule,
    FormsModule, ReactiveFormsModule
    
  ],
  providers: [ContactService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]  // <-- Add this line

})
export class AppModule { }
