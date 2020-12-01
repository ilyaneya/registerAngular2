import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {IUser} from '../register-big/register-big.component';
import {Route, Router} from '@angular/router';

@Component({
  selector: 'app-register-small',
  templateUrl: './register-small.component.html',
  styleUrls: ['./register-small.component.css']
})
export class RegisterSmallComponent implements OnInit, OnDestroy {
  @Input()
  user: IUser;

  @Output()
  emitDelete: EventEmitter <number> = new EventEmitter<number>();
  constructor(private router: Router) { }

  ngOnInit(): void {
    console.log('init');
  }

  onDeleteUser(): void {
this.emitDelete.emit(this.user.id);
  }

  ngOnDestroy(): void {
    console.log('destroy');
  }

  navigateToUser(id: number): void {
this.router.navigate([`users/${id}`]);
  }
}

