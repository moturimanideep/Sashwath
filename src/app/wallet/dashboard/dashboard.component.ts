import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  userList: any = [
    { email: 'mmanideep@gmail.com',
      firstname: 'Manideep',
      mobile: 8686897800
    },
    { email: 'naveen@gmail.com',
      firstname: 'Naveen',
      mobile: 8686897800
    },
    { email: 'Mahesh@gmail.com',
      firstname: 'Mahesh',
      mobile: 8686897800
    },
    { email: 'Tharun@gmail.com',
      firstname: 'Tharun',
      mobile: 8686897800
    },
    { email: 'Tharun@gmail.com',
      firstname: 'Tharun',
      mobile: 8686897800
    },
    { email: 'mmanideep@gmail.com',
      firstname: 'Manideep',
      mobile: 8686897800
    },
    { email: 'naveen@gmail.com',
      firstname: 'Naveen',
      mobile: 8686897800
    },
    { email: 'Mahesh@gmail.com',
      firstname: 'Mahesh',
      mobile: 8686897800
    },
    { email: 'Tharun@gmail.com',
      firstname: 'Tharun',
      mobile: 8686897800
    },
    { email: 'Tharun@gmail.com',
      firstname: 'Tharun',
      mobile: 8686897800
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
