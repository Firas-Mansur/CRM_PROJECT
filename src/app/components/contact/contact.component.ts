import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/interface/Contact';
import { ContactsService } from 'src/app/services/contacts.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
workers: Contact[] = []
name: string = ""



  constructor(private co: ContactsService) { }

  ngOnInit(): void {
    this.workers = this.co.getAll();

  }

}
 