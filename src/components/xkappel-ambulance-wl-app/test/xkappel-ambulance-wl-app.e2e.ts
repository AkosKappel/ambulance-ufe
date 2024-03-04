import { newE2EPage } from '@stencil/core/testing';

describe('xkappel-ambulance-wl-app', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<xkappel-ambulance-wl-app></xkappel-ambulance-wl-app>');

    const element = await page.find('xkappel-ambulance-wl-app');
    expect(element).toHaveClass('hydrated');
  });
});
