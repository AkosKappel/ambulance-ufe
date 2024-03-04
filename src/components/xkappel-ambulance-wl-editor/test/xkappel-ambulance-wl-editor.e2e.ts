import { newE2EPage } from '@stencil/core/testing';

describe('xkappel-ambulance-wl-editor', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<xkappel-ambulance-wl-editor></xkappel-ambulance-wl-editor>');

    const element = await page.find('xkappel-ambulance-wl-editor');
    expect(element).toHaveClass('hydrated');
  });
});
