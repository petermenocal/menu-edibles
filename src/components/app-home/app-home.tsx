import { Component, h, State, getAssetPath } from '@stencil/core';
import * as _ from 'lodash';
@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
  assetsDirs: ['assets'],
})
export class AppHome {
  componentWillLoad() {
    fetch('https://exhalebrands.com/api/productsPublic?id=5330c6ce-1ca0-4dcb-a150-54c5d4750f1c')
      .then(response => response.json())
      .then(data => {
        const p = _.chain(data.products)
          .groupBy('id')
          .values()
          .chunk(data.products.length / 3)
          .value();
        this.strains = p;
        this.columnA = this.strains[0];
        this.columnB = this.strains[1];
        this.columnC = this.strains[2];
      })
      .catch(err => console.error(err));
    fetch('https://exhalebrands.com/api/brands')
      .then(response => response.json())
      .then(data => (this.brands = data.brands))
      .catch(err => console.error(err));

    setInterval(function () {
      fetch('https://exhalebrands.com/api/productsPublic?id=5330c6ce-1ca0-4dcb-a150-54c5d4750f1c')
        .then(response => response.json())
        .then(data => {
          const p = _.chain(data.products)
            .groupBy('id')
            .values()
            .chunk(data.products.length / 3)
            .value();
          this.strains = p;
          this.columnA = this.strains[0];
          this.columnB = this.strains[1];
          this.columnC = this.strains[2];
        })
        .catch(err => console.error(err));
    }, 900000);
  }
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
  @State() strains = [];
  @State() brands = [];
  @State() columnB = [];
  @State() columnC = [];
  @State() columnA = [];
  render() {
    return [
      <ion-header>
        <ion-toolbar>
          <div class="title">
            <img src={getAssetPath(`./assets/logo.png`)} height="70" alt="" />
            EDIBLES
          </div>
        </ion-toolbar>
      </ion-header>,
      <ion-content class="ion-padding">
        <div class="col">
          <xhl-list brands={this.brands} column={this.columnA} />
        </div>
        <div class="col">
          <xhl-list brands={this.brands} column={this.columnB} />
        </div>
        <div class="col">
          <xhl-list brands={this.brands} column={this.columnC} />
        </div>
      </ion-content>,
    ];
  }
}
