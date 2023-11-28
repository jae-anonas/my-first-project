/*
*  Protractor support is deprecated in Angular.
*  Protractor is used in this example for compatibility with Angular documentation tools.
*/
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) enableProdMode();

platformBrowserDynamic().bootstrapModule(AppModule).catch(err => console.error(err));

// import { AppComponent } from './app/app.component';
// import { provideRouter } from '@angular/router';
// import routeConfig from './app/routes';

// // bootstrapApplication(AppComponent,
// //     {providers: [provideProtractorTestingSupport(),
// //       provideRouter(routeConfig)
// //     ]})
// //   .catch(err => console.error(err));
