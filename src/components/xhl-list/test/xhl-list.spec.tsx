import { newSpecPage } from '@stencil/core/testing';
import { XhlList } from '../xhl-list';

describe('xhl-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [XhlList],
      html: `<xhl-list></xhl-list>`,
    });
    expect(page.root).toEqualHtml(`
      <xhl-list>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </xhl-list>
    `);
  });
});
