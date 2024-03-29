/* @flow */

import { connect } from "react-redux";

import { CountrySelect } from "./countrySelect.component";
import { getCountries, getRegions } from "./world.actions";

const getProps = state => ({
  list: state.countries,
  loading: state.loadingCountries
});

const getDispatch = dispatch => ({
  getCountries: () => dispatch(getCountries()),
  onSelect: c => dispatch(getRegions(c))
});

export const ConnectedCountrySelect = connect(
  getProps,
  getDispatch
)(CountrySelect);
