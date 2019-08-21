import {component} from 'haunted';
import {html} from 'lit-html';

function VisuallyHidden() {

  return html`
    <style>
      :host {
        position: absolute;
        top: auto;
        left: -10000px;

        width: 1px;
        height: 1px;

        overflow: hidden;
      }
    </style>
    <slot />
  `;
};


customElements.define('visually-hidden', component(VisuallyHidden));
