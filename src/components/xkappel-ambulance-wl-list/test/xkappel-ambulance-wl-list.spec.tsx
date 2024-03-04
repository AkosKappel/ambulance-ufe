import { newSpecPage } from '@stencil/core/testing';
import { XkappelAmbulanceWlList } from '../xkappel-ambulance-wl-list';

describe('xkappel-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [XkappelAmbulanceWlList],
      html: `<xkappel-ambulance-wl-list></xkappel-ambulance-wl-list>`,
    });

    const wlList = page.rootInstance as XkappelAmbulanceWlList;
    const expectedPatients = wlList?.waitingPatients?.length;

    const items = page.root.shadowRoot.querySelectorAll('md-list-item');
    expect(items.length).toEqual(expectedPatients);
  });
});
