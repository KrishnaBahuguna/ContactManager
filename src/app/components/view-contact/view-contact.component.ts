import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Contact } from 'src/app/model/contact';
import { Group } from 'src/app/model/group';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-view-contact',
  templateUrl: './view-contact.component.html',
  styleUrls: ['./view-contact.component.css']
})
export class ViewContactComponent implements OnInit {

  public group: Group={}as Group;
  public contactId:string|null=null;

  public contact:Contact={} as Contact;

  constructor(private activatedroute: ActivatedRoute, private contactService:ContactService) { }

  ngOnInit(): void {

    this.activatedroute.paramMap.subscribe((param:ParamMap)=>
    {
      this.contactId=param.get('contactId');

    }
    );
    if(this.contactId){

      this.contactService.getContacts(this.contactId).subscribe((data:Contact)=>
      {
        this.contact=data;
        this.contactService.getGroup(data.groupId).subscribe((data:Group)=>
        {
          this.group=data;
        });
      })
    }

  }

}
