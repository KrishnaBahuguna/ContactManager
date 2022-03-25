import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Contact } from 'src/app/model/contact';
import { Group } from 'src/app/model/group';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {

  public contactId:string|null=null;
  public contact: Contact={} as Contact;
  public group: Group[]=[] as Group[];

  constructor(private activatedRoute:ActivatedRoute, private contactService:ContactService, private router:Router) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((param:ParamMap)=>
    {
      this.contactId=param.get('contactId');
    })
    if(this.contactId)
    {
      this.contactService.getContacts(this.contactId).subscribe((data)=>
      {
        this.contact=data;
        this.contactService.getAllGroups().subscribe((data:Group[])=>
        {
          this.group=data;

        });
      });
    }
  }

  public Update()
  {
    if(this.contactId)
    {
      this.contactService.updateContact(this.contact, this.contactId).subscribe((data:Contact)=>
    {
      this.router.navigate(['/']).then();
    });
    }
  }

}
