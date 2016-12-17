import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HospitalService } from '../services/hospital.service';
import '../../public/css/styles.css';
@Component({
	selector: 'my-app',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	isLoggedIn: boolean;
	constructor(
		private hospitalService: HospitalService,
		private router: Router
	) { }

	ngOnInit(): void {
		this.hospitalService.isLoggedIn()
			.then((loggedIn) => {
				if (loggedIn) {
					this.router.navigate(['registration'])
						.then(() => {
							Materialize.toast('Please start registering', 2000);
						});
				} else {
					this.router.navigate(['login'])
						.then(() => {
							Materialize.toast('Please login first.', 2000);
						});
				}
			});
	}
}
