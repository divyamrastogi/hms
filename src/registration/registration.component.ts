// Keep the Input import for now, we'll remove it later:
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import { HospitalService } from '../services/hospital.service';

@Component({
	selector: 'register-patient',
	templateUrl: './registration.component.html'
})
export class RegistrationComponent implements OnInit {
	goBack(): void {
		this.location.back();
	}

	constructor(
		private heroService: HospitalService,
		private route: ActivatedRoute,
		private location: Location
	) { }

	ngOnInit(): void {

	}


}
