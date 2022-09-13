import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
                providedIn: 'root'
            })
export class LibSmartService {

    private readonly url = 'https://catfact.ninja/fact';

    constructor(private readonly http: HttpClient) {
    }

    getFact(): Observable<any> {
        return this.http.get(this.url);
    }

}
