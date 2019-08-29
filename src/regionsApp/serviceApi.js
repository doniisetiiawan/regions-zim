/* @flow */

import axios from "axios";

export const getCountriesAPI = () =>
    axios.get(`http://localhost:8080/countries`);

export const getRegionsAPI = country =>
    axios.get(`http://localhost:8443/regions/${country}`);
