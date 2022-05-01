import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'kalpkreation';

  constructor(
    private router: Router,
  ){
    }
    ngOnInit() {}
  openHome(){
    this.router.navigate(['']);
  }
  openWork(){
    this.router.navigate(['']);
  }
}
// "start": "ng serve",
