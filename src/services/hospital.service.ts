import { Injectable } from '@angular/core';

@Injectable()
export class HospitalService {
	isLoggedIn(): Promise<boolean> {
		return Promise.resolve(false);
	}

}
