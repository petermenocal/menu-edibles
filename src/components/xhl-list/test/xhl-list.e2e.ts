import { newE2EPage } from '@stencil/core/testing';

describe('xhl-list', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<xhl-list></xhl-list>');

    const element = await page.find('xhl-list');
    expect(element).toHaveClass('hydrated');
  });
});
