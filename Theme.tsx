import {Dimensions} from 'react-native';

type ColorsType ={
    black:string;
    grey:string;
    primaryblue:string;
    red:string;
    white:string;
    orange:string;
    gold:string;
};

export const Colors:ColorsType={
    black: 'rgba(0,0,0,1)',
    grey: 'rgba(142, 142, 147, 1)',
    primaryblue: 'rgba(86, 105, 255, 1)',
    red: 'rgba(238, 84, 74, 1)',
    white: 'rgba(255, 255, 255, 1)',
    orange: 'rgba(255, 141, 93, 1)',
    gold:'rgba(251, 190, 71, 1)'
};

type FontSizeType = {
  Small: any;
  H4: any;
  H1: number;
  H2: number;
  H3: number;
  Headline: number;
  Subhead: number;
  Body: number;
  Caption: number;
  Button: number;
};

const { width } = Dimensions.get('screen');

export const FontSize: FontSizeType = {
  H1: width * 0.067, // 34
  H2: width * 0.059, // 28
  H3: width * 0.054, // 24
  Headline: width * 0.056, // 30
  Subhead: width * 0.047, // 20
  Body: width * 0.04, // 16
  Caption: width * 0.033, // 12
  Button: width * 0.036,
  Small: undefined,
  H4: undefined
};
