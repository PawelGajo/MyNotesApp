import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { NotesService } from './notes.service';
import { Observable, of } from 'rxjs';

@Injectable()
export class NotesResolver implements Resolve<any> {
  constructor(private notesService: NotesService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any>|Promise<any>|any {
    return this.notesService.getNotes();
  }
}
