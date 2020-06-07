export const colors = new Proxy(
  {
    defrost: '#f47f98',
    iceberg: '#B7E2E4',
    frost: '#f3f4f6',
    black: '#000',
    error: '#C60100',
    light: '#FCFBFE',
    grey: ' #F6F6F9',
    vippsOrange: '#FF5B24',
    vippsPurple: '#49367E',
    vippsBlack: '#161225',
    vippsWhite: '#FFF4EC',
    darkText: '#161225',
    price: '#FF5B24',
    vippsRust: '#9B3716',
    VippsBlue: '#59CBE8',
    vippsSignalpurple: '#5E3DC2',
    OrangeShade060: '#FF985F',
    OrangeShade020: '#FFD3BB',
    GrayShade003: '#FCFBFE',
    GrayShade005: '#F6F6F9',
    PurpleShade020: '#C9C6D7',
  },
  {
    get: function (obj, prop) {
      if (prop in obj) {
        return obj[prop];
      }

      if (!['$$typeof', 'prototype'].includes(prop)) {
        console.warn(`colors.${prop} is not available`);
      }

      return '#000';
    },
  }
);
