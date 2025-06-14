import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SplashScreenComponent } from './home/splash-screen/splash-screen.component';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { HeadersInterceptor } from './interceptor/headers.interceptor';
import { CatDetailComponent } from './home/cat-detail/cat-detail.component';

@NgModule({
  declarations: [AppComponent, SplashScreenComponent, CatDetailComponent ],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, {provide: HTTP_INTERCEPTORS,useClass: HeadersInterceptor, multi: true}, provideHttpClient(withInterceptorsFromDi())],
  bootstrap: [AppComponent],
})
export class AppModule {}
