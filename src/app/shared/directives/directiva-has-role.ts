import {
  Directive,
  Input,
  TemplateRef,
  ViewContainerRef,
  effect,
  inject,
} from '@angular/core';

import type { Rol } from '../../core/models';
import { ServicioAuth } from '../../core/servicio-auth';

/**
 * F-08 · Muestra el template solo si el usuario tiene uno de los roles indicados.
 */
@Directive({
  selector: '[appHasRole]',
})
export class DirectivaHasRole {
  private readonly templateRef = inject(TemplateRef<unknown>);
  private readonly viewContainer = inject(ViewContainerRef);
  private readonly auth = inject(ServicioAuth);

  private roles: readonly Rol[] = [];
  private visible = false;

  @Input({ required: true })
  set appHasRole(value: Rol | readonly Rol[]) {
    this.roles = Array.isArray(value) ? value : [value];
    this.render();
  }

  constructor() {
    effect(() => {
      this.auth.usuario();
      this.render();
    });
  }

  private render(): void {
    const allowed = this.roles.length > 0 && this.auth.hasRole(...this.roles);
    if (allowed && !this.visible) {
      this.viewContainer.createEmbeddedView(this.templateRef);
      this.visible = true;
    } else if (!allowed && this.visible) {
      this.viewContainer.clear();
      this.visible = false;
    }
  }
}

/** Alias del backlog (`HasRoleDirective`). */
export { DirectivaHasRole as HasRoleDirective };