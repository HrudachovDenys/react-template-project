
import { get, set, flow, clone, toPairs, reduce } from 'lodash';

export const colorScheme = {
  black: { value: '#222222', name: 'Black' },
  white: { value: '#FFFFFF', name: 'White' },
};

export const getColor = (colorKey: string): string => get(colorScheme, [colorKey, 'value']);

const getColorsMap = () => flow([
  clone,
  toPairs,
  x => reduce(x, (acc: any, [key, scheme]: any) => set(acc, key, scheme.value), {})
])(colorScheme)

const colors = getColorsMap();

export default colors;