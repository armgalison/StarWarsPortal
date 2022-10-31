import { Injectable } from "@angular/core";
import { ToastInfo } from "@models/toast-info";

@Injectable({ providedIn: 'root' })
export class ToastService {
  public toasts: ToastInfo[] = [];

  public clear(): void {
    this.toasts = [];
  }

  public danger(body: string, header?: string) {
    const classname = 'bg-danger text-light';
    this.toasts.push({ header, body, classname });
  }

  public info(body: string, header?: string): void {
    this.toasts.push({ header, body });
  }

  public success(body: string, header?: string): void {
    const classname = 'bg-success text-light';
    this.toasts.push({ header, body, classname });
  }

  public remove(toast: ToastInfo): void {
    this.toasts = this.toasts.filter((toastItem) => toastItem !== toast);
  }
}