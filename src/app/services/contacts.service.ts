import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { BACKEND_URL } from 'src/config';
import { IContact } from '../models/about-me.model';

@Injectable({
  providedIn: 'root',
})
export class ContactsService {
  private contactsData = new BehaviorSubject<IContact[]>([]);
  constructor(private http: HttpClient) {}

  public getContacts(): Observable<IContact[]> {
    if (this.contactsData.value.length == 0) this.updateContactsData();

    return this.contactsData.asObservable();
  }

  private updateContactsData(): void {
    this.http
      .get<IContact[]>(BACKEND_URL + '/contacts')
      .subscribe((data) => this.contactsData.next(data));
  }
}
