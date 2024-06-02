import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Router, NavigationEnd } from '@angular/router';
import { NotificationService } from 'src/app/shared/Notification.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  domainURL: string = environment.DomainURL;
  domainDestination: string = environment.DomainDestination;
  queryString: string = environment.InitializationString;
  constructor(public router: Router,public NotificationService: NotificationService,) { 
     this.router.events.forEach((event) => {
      if (event instanceof NavigationEnd) {
        this.queryString = event.url;               
      }
    });
  }


  TokenFCM: string = environment.InitializationString;

  ngOnInit(): void {
     this.TokenFCM  = localStorage.getItem(environment.TokenFCM);
  }

}
