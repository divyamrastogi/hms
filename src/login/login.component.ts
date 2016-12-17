// Keep the Input import for now, we'll remove it later:
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

import { HospitalService } from '../services/hospital.service';

@Component({
	selector: 'user-login',
	templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

	constructor(
		private heroService: HospitalService,
		private route: ActivatedRoute,
		private location: Location
	) { }

	ngOnInit(): void {

	}


}
