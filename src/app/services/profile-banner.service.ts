import { Injectable } from '@angular/core';

export class BannerImage {
  constructor(
    public title: string,
    public fName: string,
    public active: boolean,
  ) {}
}

@Injectable()
export class ProfileBannerService {

  private banners: BannerImage[];

  constructor() {
    this.banners = [
      new BannerImage('Campus Aerial View', 'banner.jpg', true),
      new BannerImage('Griffin Hall Sunset', 'banner1.jpg', false),
      new BannerImage('Loch Norse', 'banner2.jpg', false),
    ];
  }

  getBanners() {
    return this.banners;
  }

  setActiveBanner(title: string) {
    this.banners.map( (banner) => banner.title === title ? banner.active = true : banner.active = false );
  }

  getActiveBanner() {
    const filtered = this.banners.filter( (banner) => banner.active === true );
    return filtered[0].fName;
  }

}


