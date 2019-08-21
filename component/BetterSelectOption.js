import {component} from 'haunted';
import {html} from 'lit-html';

function BetterSelectOption(el) {
  const {value, disabled} = el;

  function handleClick() {
    const event = new CustomEvent('better-select-option-picked', {detail: value, bubbles: true});
    el.dispatchEvent(event);
  }

  return html`
    <button @click=${handleClick} ?disabled=${disabled}><slot /></button> 
  `;
}


// maybe these should just pass their info up to BetterSelect & have that create the elements
// might make search easier
// problem with this is dynamically updating the list

BetterSelectOption.observedAttributes = ['value', 'disabled'];

customElements.define('better-select-option', component(BetterSelectOption));
