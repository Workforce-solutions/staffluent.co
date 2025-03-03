export interface LocationOption {
  value: string;
  label: string;
}

export interface Country {
  _id: string;
  name: string;
  iso3: string;
  iso2: string;
  numeric_code: string;
  phone_code: string;
  capital: string;
  currency: string;
  currency_name: string;
  currency_symbol: string;
  tld: string;
  native: string;
  region: string;
  subregion: string;
  timezones: string;
  latitude: string;
  longitude: string;
  emoji: string;
  emojiU: string;
}

export interface State {
  _id: string;
  name: string;
  country_id: string;
  country_code: string;
  country_name: string;
  state_code: string;
  type: string;
  latitude: string;
  longitude: string;
}

export interface City {
  _id: string;
  name: string;
  state_id: string;
  state_code: string;
  state_name: string;
  country_id: string;
  country_code: string;
  country_name: string;
  latitude: string;
  longitude: string;
  wikiDataId: string;
}
