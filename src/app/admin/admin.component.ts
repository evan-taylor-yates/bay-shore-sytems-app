import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  private selectedNav: string
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.selectedNav = 'Templates';
  }
  logout() {
    this.authService.logout();
    this.router.navigate(['login']);
  }

  onNavChange(nav) {
    this.selectedNav = nav;
    if (nav === 'Generic Photos') {
      this.router.navigate(['admin', 'generic-photos']);
    } else {
      this.router.navigate(['admin', 'templates']);
    }
  }

}
