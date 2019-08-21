import {component, useEffect, useState} from 'haunted';
import {html} from 'lit-html';

const styles = html`
  <style>
    slot {
      display: flex;
      flex-direction: column;
    }
  </style>
`;

function BetterSelect(el) {
  const {autofocus, disabled, form, multiple, name, required, size} = el;

  const [options, setOptions] = useState([]);

  const hiddenInput = document.createElement('input');
  hiddenInput.setAttribute('name', name);
  hiddenInput.setAttribute('type', 'hidden');
  el.appendChild(hiddenInput);

  function setPickedOption(event) {
    hiddenInput.value = event.detail;
  }

  const os = Array.from(el.querySelectorAll('better-select-option'));
  setOptions(os.map((option) => {
    console.log(option)
    return {value: option.value, disabled: option.disabled}
  }));
  // })

  useEffect(() => {
    if (disabled) {
      const options = Array.from(el.querySelectorAll('better-select-option'));
      options.forEach((option) => option.setAttribute('disabled', true));

    }
  });

  useEffect(() => {
    el.addEventListener('better-select-option-picked', setPickedOption);

    return () => el.removeEventListener('better-select-option-picked', setPickedOption);
  })

  return html`
    ${styles}
    
    <div className="BetterSelect">
      ${
        options.map((option) => html`<div>${option.value}</div>`)
      }
      <slot />
    </div>
  `;
}

BetterSelect.observedAttributes = ['autofocus', 'disabled', 'form', 'multiple', 'name', 'required', 'size'];

customElements.define('better-select', component(BetterSelect));

