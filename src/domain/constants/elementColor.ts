/****************************************************************************
 * Copyright 2021 EPAM Systems
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 ***************************************************************************/

import type { ElementLabel } from './element.types'

type ElementColorType = {
  [key in ElementLabel]: string
}

export const ElementColor: ElementColorType = {
  H: '#000000',
  He: '#89a1a1',
  Li: '#bd77ed',
  Be: '#8fbc00',
  B: '#c18989',
  C: '#000000',
  N: '#304ff7',
  O: '#ff0d0d',
  F: '#78bc42',
  Ne: '#80a2af',
  Na: '#ab5cf2',
  Mg: '#6fcd00',
  Al: '#a99393',
  Si: '#b29478',
  P: '#ff8000',
  S: '#c99a19',
  Cl: '#1fd01f',
  Ar: '#69acba',
  K: '#8f40d4',
  Ca: '#38e900',
  Sc: '#999999',
  Ti: '#979a9e',
  V: '#99999e',
  Cr: '#8a99c7',
  Mn: '#9c7ac7',
  Fe: '#e06633',
  Co: '#d37e8e',
  Ni: '#4ece4e',
  Cu: '#c78033',
  Zn: '#7d80b0',
  Ga: '#bc8b8b',
  Ge: '#668f8f',
  As: '#b87ddd',
  Se: '#e59100',
  Br: '#a62929',
  Kr: '#59b1c9',
  Rb: '#702eb0',
  Sr: '#00ff00',
  Y: '#66afaf',
  Zr: '#71abab',
  Nb: '#67aeb4',
  Mo: '#54b5b5',
  Tc: '#3b9e9e',
  Ru: '#248f8f',
  Rh: '#0a7d8c',
  Pd: '#006985',
  Ag: '#9a9a9a',
  Cd: '#b29764',
  In: '#a67573',
  Sn: '#668080',
  Sb: '#9e63b5',
  Te: '#d47a00',
  I: '#940094',
  Xe: '#429eb0',
  Cs: '#57178f',
  Ba: '#00c900',
  La: '#5caed1',
  Ce: '#9d9d7b',
  Pr: '#8ca581',
  Nd: '#84a984',
  Pm: '#71b18a',
  Sm: '#66b68e',
  Eu: '#4ac298',
  Gd: '#37cb9e',
  Tb: '#28d1a4',
  Dy: '#1bd7a8',
  Ho: '#00e98f',
  Er: '#00e675',
  Tm: '#00d452',
  Yb: '#00bf38',
  Lu: '#00ab24',
  Hf: '#47b3ec',
  Ta: '#4da6ff',
  W: '#2194d6',
  Re: '#267dab',
  Os: '#266696',
  Ir: '#175487',
  Pt: '#9898a3',
  Au: '#c19e1c',
  Hg: '#9797ac',
  Tl: '#a6544d',
  Pb: '#575961',
  Bi: '#9e4fb5',
  Po: '#ab5c00',
  At: '#754f45',
  Rn: '#428296',
  Fr: '#420066',
  Ra: '#007d00',
  Ac: '#6aa2ec',
  Th: '#00baff',
  Pa: '#00a1ff',
  U: '#008fff',
  Np: '#0080ff',
  Pu: '#006bff',
  Am: '#545cf2',
  Cm: '#785ce3',
  Bk: '#8a4fe3',
  Cf: '#a136d4',
  Es: '#b31fd4',
  // Need to fix colors for the elements below (c)
  Fm: '#000000',
  Md: '#000000',
  No: '#000000',
  Lr: '#000000',
  Rf: '#47b3ec',
  Db: '#4da6ff',
  Sg: '#2194d6',
  Bh: '#267dab',
  Hs: '#266696',
  Mt: '#175487',
  Ds: '#9898a3',
  Rg: '#c19e1c',
  Cn: '#9797ac',
  Nh: '#000000',
  Fl: '#000000',
  Mc: '#000000',
  Lv: '#000000',
  Ts: '#000000',
  Og: '#000000'
} as const
