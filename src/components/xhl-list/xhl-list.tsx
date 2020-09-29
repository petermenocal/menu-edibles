import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'xhl-list',
  styleUrl: 'xhl-list.css',
  shadow: true,
})
export class XhlList {
  @Prop() column = [];
  @Prop() brands = [];
  unwindBrand(brandId) {
    let result = this.brands.find(b => {
      return b.id == brandId;
    });
    if (result) {
      return result.name;
    } else {
      return null;
    }
  }
  render() {
    return (
      <Host>
        <slot>
          <ion-list inset class="list">
            {this.column && this.column.length
              ? this.column.map((strainGroup, idx) => (
                  <div class={idx % 2 == 0 ? 'strain even' : 'strain odd'}>
                    {strainGroup.map((i, idx) => {
                      if (idx == 0) {
                        return (
                          <ion-label>
                            <ion-note class="name-and-brand">
                              <ion-label class="name">
                                {i.name
                                  .replace('(500mg)', '')
                                  .replace('- 20:1 CBD', '')
                                  .replace('(100mg)', '')
                                  .replace('Cannapunch', '')
                                  .replace('Cannalean', '')
                                  .replace('Bhang', '')
                                  .replace('(800mg)', '')
                                  .replace('(10 mg THC - 200 mg CBD)', '')
                                  .replace('( 1oz)', '')
                                  .replace('(500mg)', '')
                                  .replace('(350mg)', '')
                                  .replace('Mellow Vibes', '')
                                  .replace('gummies', '')
                                  .replace('Indica', '')
                                  .replace('(750mg)', '')
                                  .replace('gummie', '')
                                  .replace('(20mg)', '')
                                  .replace('(10mg)', '')
                                  .replace('(100 mg)', '')
                                  .replace('( 100mg )', '')
                                  .replace(' - OMG THC', '')
                                  .replace('(1oz)', '')
                                  .replace(' - Effex', '')
                                  .replace('CannaPunch', '')
                                  .replace('(250mg)', '')}
                              </ion-label>
                              <ion-label class="brand">{this.unwindBrand(i.brand_id)}</ion-label>
                              <ion-label class="type">{i.test_results_thc ? i.test_results_thc + 'mg' : null}</ion-label>
                            </ion-note>
                          </ion-label>
                        );
                      }
                    })}
                    <div class="prices">
                      {strainGroup.map(i => {
                        return (
                          <div class="prices">
                            <ion-label class="price-label">
                              <div class="weight">
                                <ion-chip color="success">
                                  <strong>${(i.sell_price / 100).toFixed(2)} </strong>
                                  <ion-note class="weight-label">
                                    <small>each</small>
                                  </ion-note>
                                </ion-chip>
                              </div>
                            </ion-label>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))
              : null}
          </ion-list>
        </slot>
      </Host>
    );
  }
}
