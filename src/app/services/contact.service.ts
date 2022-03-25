import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from '../model/contact';
import { Group } from '../model/group';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

 private serverUrl:string="http://localhost:7000";
  constructor(private httpclient:HttpClient) { }


  // GET All Contact
  public getAllContacts():Observable<Contact[]>
  {
    let dataUrl: string=`${this.serverUrl}/contacts`;
    return this.httpclient.get<Contact[]>(dataUrl).pipe();
  }

 // GET Single Contact
 public getContacts(contactId:string):Observable<Contact>
 {
   let dataUrl: string=`${this.serverUrl}/contacts/${contactId}`;
   return this.httpclient.get<Contact>(dataUrl).pipe();
 }

  // CREATE Single Contact

  public createContact(contact: Contact):Observable<Contact>
  {
     let dataUrl: string=`${this.serverUrl}/contacts`;
     return this.httpclient.post<Contact>(dataUrl, contact).pipe();
  }


  // UPDATE Single Contact

  public updateContact(contact: Contact, contactId: string):Observable<Contact>
  {
     let dataUrl: string=`${this.serverUrl}/contacts/${contactId}`;
     return this.httpclient.put<Contact>(dataUrl, contact).pipe();
  }

  // DELETE Single Contact

  public deleteContact(contactId: string):Observable<{}>
  {
     let dataUrl: string=`${this.serverUrl}/contacts/${contactId}`;
     return this.httpclient.delete<{}>(dataUrl).pipe();
  }

   // DELETE Single Contact

   public getAllGroups():Observable<Group[]>
   {
     let dataUrl: string=`${this.serverUrl}/groups`;
     return this.httpclient.get<Group[]>(dataUrl).pipe();
   }

   // GET Single Groups
 public getGroup(groupId:string):Observable<Group>
 {
   let dataUrl: string=`${this.serverUrl}/groups/${groupId}`;
   return this.httpclient.get<Group>(dataUrl).pipe();
 }


}




