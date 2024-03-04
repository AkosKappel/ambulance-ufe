import { newSpecPage } from '@stencil/core/testing';
import { XkappelAmbulanceWlApp } from '../xkappel-ambulance-wl-app';

describe('xkappel-ambulance-wl-app', () => {
  it('renders editor', async () => {
    const page = await newSpecPage({
      url: `http://localhost/entry/@new`,
      components: [XkappelAmbulanceWlApp],
      html: `<xkappel-ambulance-wl-app base-path="/"></xkappel-ambulance-wl-app>`,
    });
    page.win.navigation = new EventTarget();
    const child = await page.root.shadowRoot.firstElementChild;
    expect(child.tagName.toLocaleLowerCase()).toEqual('xkappel-ambulance-wl-editor');
  });

  it('renders list', async () => {
    const page = await newSpecPage({
      url: `http://localhost/ambulance-wl/`,
      components: [XkappelAmbulanceWlApp],
      html: `<xkappel-ambulance-wl-app base-path="/ambulance-wl/"></xkappel-ambulance-wl-app>`,
    });
    page.win.navigation = new EventTarget();
    const child = await page.root.shadowRoot.firstElementChild;
    expect(child.tagName.toLocaleLowerCase()).toEqual('xkappel-ambulance-wl-list');
  });
});
