import { FASTElement, Observable, html, css, repeat } from '@microsoft/fast-element';
import { getTestParams } from '../../shared/testParams.js';
import { performanceMeasure } from '../../shared/usePerformanceMeasure.js';
import { StressComponent } from './stressComponent.js';

const styles = css`
  :host {
    width: 100%;
    height: 100%;
  }
`;

const template = html`
  <stress-container>
    ${repeat(
      el => new Array(Number(el.numChildren)),
      html`<stress-component
        checked=${(el, ctx) => ctx.parent.checked}
      ></stress-component>`,
    )}
  </stress-container>
`;

// @customElement({
//   name: 'stress-app',
//   template,
//   styles,
// })
export class StressApp extends FASTElement {
  // @attr numChildren = 10;
  // @attr checked = false;

  static definition = {
    name: 'stress-app',
    template,
    styles,
    attributes: [
      'numChildren',
      'checked'
    ]
  };

  connectedCallback() {
    super.connectedCallback();

    console.log(getTestParams().test);

    if (getTestParams().test === 'prop-update') {
      setTimeout(() => {
        performanceMeasure('stress', 'start');
        this.checked = true;
      }, 2000);
    } else if (getTestParams().test === 'add-node') {
      setTimeout(() => {
        performanceMeasure('stress', 'start');
        this.numChildren = 200;
      }, 2000);
    } else if (getTestParams().test === 'remove-node') {
      setTimeout(() => {
        performanceMeasure('stress', 'start');
        this.numChildren = 1;
      }, 2000);
    }
  }
}

FASTElement.define(StressApp);
