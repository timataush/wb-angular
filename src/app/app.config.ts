import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app-routing.module';
import { provideClientHydration } from '@angular/platform-browser';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(), provideFirebaseApp(() => initializeApp({"projectId":"wb-angular","appId":"1:976128918905:web:25ce0825f07a2870039ba8","storageBucket":"wb-angular.firebasestorage.app","apiKey":"AIzaSyAUDHFlXyDXPmT1l389GKRkA2qATnWmpQ0","authDomain":"wb-angular.firebaseapp.com","messagingSenderId":"976128918905"})), provideAuth(() => getAuth()), provideFirestore(() => getFirestore())]
};
