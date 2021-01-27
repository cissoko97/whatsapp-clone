import { DOCUMENT } from '@angular/common';
import { ElementRef, Inject, Injectable, Renderer2, RendererFactory2 } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private _renderer2: Renderer2;

  constructor(rendererFactory: RendererFactory2 ) {
    this._renderer2 = rendererFactory.createRenderer(null, null);
  }

  setThemeValue(newTheme?: string) {
    const DOM = document.documentElement;

    if (newTheme) {
      this.makeTransition();
      this._renderer2.setAttribute(DOM, 'data-theme', newTheme);
      return;
    }

    const currentTheme = document.documentElement.getAttribute('data-theme');

    if (currentTheme === 'light') {
      this.makeTransition();
      this._renderer2.setAttribute(DOM, 'data-theme', 'dark');
      return;
    } else {
      this.makeTransition();
      document.documentElement.setAttribute('data-theme', 'light');
      return;
    }

  }

  private makeTransition() {
    console.log(document.documentElement.classList);
    document.documentElement.classList.add('transition');

    window.setTimeout(() => {
      document.documentElement.classList.remove('transition');
    }, 1000)
  }
}
