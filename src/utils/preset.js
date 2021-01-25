import DefaultValues from '../constants/DefaultValues';

export function createPreset(filters) {
  return Object.keys(filters).reduce((result, filterItem) => {
    result[filterItem] = DefaultValues[filterItem] + filters[filterItem];

    return result;
  }, {});
}
