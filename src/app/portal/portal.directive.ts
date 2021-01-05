import { DOCUMENT } from '@angular/common';
import { v4 as uuid } from 'uuid';
import {
  Directive,
  Inject,
  Input,
  OnDestroy,
  OnInit,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

@Directive({
  selector: '[portalTo]',
})
export class PortalToDirective implements OnInit, OnDestroy {
  @Input() portalTo: string;

  private host: Element;
  private portalIds = [];

  constructor (
    private tpl: TemplateRef<any>,
    private vcr: ViewContainerRef,
    @Inject(DOCUMENT) private document: Document
  ) {}

  ngOnInit(): void {
    const viewRef = this.vcr.createEmbeddedView(this.tpl);
    this.host = this.document.querySelector(this.portalTo);

    viewRef.rootNodes.forEach((node: HTMLElement) => {
      const portalId = uuid();
      node.setAttribute('portal-id', portalId);
      this.portalIds.push(portalId);
      this.host.appendChild(node);
    });
  }

  ngOnDestroy() {
    this.portalIds.forEach((portalId) => {
      this.document.querySelector(`[portal-id="${portalId}"]`).remove();
    });
  }
}
