import { newE2EPage } from '@stencil/core/testing';

describe('xkappel-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<xkappel-ambulance-wl-list></xkappel-ambulance-wl-list>');

    const element = await page.find('xkappel-ambulance-wl-list');
    expect(element).toHaveClass('hydrated');
  });
});
