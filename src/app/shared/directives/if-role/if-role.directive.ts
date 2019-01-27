import { Directive, Input, OnInit, ViewContainerRef, TemplateRef } from '@angular/core';

import { RolesService } from './../../../core/services/roles/roles.service';

@Directive({
  selector: '[ifRole]'
})
export class IfRoleDirective implements OnInit {

  @Input() private ifRole: [number];

  private allowedRoles: Array<number>;

  constructor(
    private viewContainer: ViewContainerRef,
    private template: TemplateRef<any>,
    private roles: RolesService
  ) { }

  ngOnInit(){
    this.allowedRoles = this.ifRole;

    this.roles.role.subscribe(currentRole => {
      if(this.allowedRoles.some(allowedRole => allowedRole === currentRole)){
        this.viewContainer.createEmbeddedView(this.template);
      }
      else {
        this.viewContainer.clear();
      }
    });
  }

}
