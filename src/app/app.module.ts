import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RegistrationComponent } from '../registration/registration.component';
import { LoginComponent } from '../login/login.component';
import { MaterializeDirective } from "angular2-materialize";
import { HospitalService } from '../services/hospital.service';
import { AppRoutingModule } from './app-routing';

@NgModule({
	imports: [
		BrowserModule,
		AppRoutingModule
	],
	declarations: [
		AppComponent,
		MaterializeDirective,
		RegistrationComponent,
		LoginComponent
	],
	providers: [HospitalService],
	bootstrap: [AppComponent],
})
export class AppModule { }
