import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/model/contact';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contact-manager',
  templateUrl: './contact-manager.component.html',
  styleUrls: ['./contact-manager.component.css']
})
export class ContactManagerComponent implements OnInit {

  public loading: boolean = false;
  public contacts: Contact[]=[];
  constructor(private contactService:ContactService) { }

  ngOnInit(): void {
   this.getAllContact();

  }

  public getAllContact()
  {
    this.loading=true;
    this.contactService.getAllContacts().subscribe((data: Contact[])=>{
      this.contacts =data;
      this.loading=false;
    });
  }

  public DeleteContact(contactId: string | undefined)
  {
    if(contactId)
    {
      this.contactService.deleteContact(contactId).subscribe((data:{})=>
      {
        this.getAllContact();

      })
    }
  }

}
