import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contact } from 'src/app/model/contact';
import { Group } from 'src/app/model/group';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {

  public contact: Contact={} as Contact;
  public group: Group[]=[] as Group[];
  constructor(private contactService:ContactService, private router: Router) { }

  ngOnInit(): void {
    this.contactService.getAllGroups().subscribe((data:Group[])=>{
    this.group=data;
    });
  }

  public createSubmit(){
    this.contactService.createContact(this.contact).subscribe((data:Contact)=>
    {
      this.router.navigate(['/']).then();
    });
  }

}
