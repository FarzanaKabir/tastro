import {Injectable, TemplateRef} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  toasts: any[] = [];

  show(text: string | TemplateRef<any>, options: any = {}){
    this.toasts.push(text, ...options);
  }

  remove(toast) {
    this.toasts = this.toasts.filter(t => t !== toast);
  }
}
