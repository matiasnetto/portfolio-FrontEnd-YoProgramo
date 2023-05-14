import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { BACKEND_URL } from 'src/config';
import { IContact, IContactOut } from '../models/about-me.model';
import { IEducationItemOut } from '../models/education.model';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class ContactsService {
  private endpoint = BACKEND_URL + '/contacts';
  private contactsData = new BehaviorSubject<IContact[]>([]);

  constructor(private http: HttpClient, private authService: AuthService) {}

  private getAuthorizationHeaders() {
    return { Authorization: this.authService.getBearerAuthToken() };
  }

  public getContacts(): Observable<IContact[]> {
    if (this.contactsData.value.length == 0) this.reloadContactsData();

    return this.contactsData.asObservable();
  }

  public getContactById(id: number): Observable<IContact> {
    return this.http.get<IContact>(this.endpoint + '/' + id);
  }

  public createNewContact(contact: IContactOut): Observable<IContact> {
    return this.http.post<IContact>(
      this.endpoint,
      { ...contact, person_id: 1 },
      {
        headers: this.getAuthorizationHeaders(),
      }
    );
  }

  public updateEducation(education: IContactOut): Observable<IContact> {
    return this.http.put<IContact>(
      this.endpoint + '/' + education.id,
      education,
      { headers: this.getAuthorizationHeaders() }
    );
  }
  public deleteContact(contact: IContact): Observable<Object> {
    return this.http.delete(this.endpoint + '/' + contact.id, {
      headers: this.getAuthorizationHeaders(),
    });
  }

  public reloadContactsData(): void {
    this.http
      .get<IContact[]>(this.endpoint)
      .subscribe((data) => this.contactsData.next(data));
  }
}
