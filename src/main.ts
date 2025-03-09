import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig,
  )
  .catch((err) => console.error(err));




//
// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
// import { AppModule } from './app/app.module';
//
// platformBrowserDynamic()
//   .bootstrapModule(AppModule)
//   .catch((err) => console.error(err));






//
// import { bootstrapApplication } from '@angular/platform-browser';
// import { AppComponent } from './app/app.component';
// import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
// import { getDatabase, provideDatabase } from '@angular/fire/database';
// import {environment} from "./app/environment/environment";
//
// bootstrapApplication(AppComponent, {
//   providers: [
//     provideFirebaseApp(() => initializeApp(environment.firebaseConfig)), // Инициализация Firebase
//     provideDatabase(() => getDatabase()), // Подключение базы данных
//   ],
// });
