import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CommonMaterialModule } from './modules/common-material/common-material.module';
import { HttpClientModule } from '@angular/common/http';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatIconModule} from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';
import { LoginComponent } from './components/login/login.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { SignupComponent } from './components/signup/signup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TitleStrategy } from '@angular/router';
import { TemplatePageTitleStrategyService } from './core/services/template-page-title-strategy.service';
import { LogInterceptorProvider } from './core/interceptors/log-interceptor';
import { DirectiveModule } from './shared/directives/directive.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    ForgotPasswordComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CommonMaterialModule,
    HttpClientModule,
    CarouselModule,
    MatIconModule,
    MatBadgeModule,
    ReactiveFormsModule,
    DirectiveModule
  ],
  providers: [
    provideAnimationsAsync(),
    LogInterceptorProvider,
    {
      provide: TitleStrategy , useClass: TemplatePageTitleStrategyService
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
