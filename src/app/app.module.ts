import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { RouterModule } from "@angular/router";
import { BrowserModule } from "@angular/platform-browser";
import { provideRouter } from "@angular/router";
import routeConfig from './routes';


@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
      BrowserModule,
      RouterModule,
    ],
    providers: [provideRouter(routeConfig)],
    bootstrap: [AppComponent]
})
export class AppModule {

}