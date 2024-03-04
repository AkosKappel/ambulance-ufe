import { newSpecPage } from '@stencil/core/testing';
import { XkappelAmbulanceWlList } from '../xkappel-ambulance-wl-list';

describe('xkappel-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [XkappelAmbulanceWlList],
      html: `<xkappel-ambulance-wl-list></xkappel-ambulance-wl-list>`,
    });
    expect(page.root).toEqualHtml(`
      <xkappel-ambulance-wl-list>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </xkappel-ambulance-wl-list>
    `);
  });
});
