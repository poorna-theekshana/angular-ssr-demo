import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SsrDemoComponent } from './ssr-demo/ssr-demo.component';

@NgModule({
  declarations: [AppComponent, SsrDemoComponent],
  imports: [BrowserModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
