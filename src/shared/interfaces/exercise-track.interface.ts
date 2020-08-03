import { LocationInterface } from './location.interface';

export interface ExerciseTrackInterface {
  NAMN: string;
  OBJECTID: number;
  TYP: number;
  DETALJTYP: string;
  FNR: number;
  MEDELFELPLAN: number;
  MEDELFELHOJD: number;
  MATMETODPLAN: number;
  MATMETODHOJD: number;
  FLYGHOJD: number;
  SKALAUNDERLAG: number;
  URSPRKOORDSYSPLAN: number;
  URSPRKOORDSYSHOJD: number;
  VAGHALLARE: number;
  VAGUTFORANDE: number;
  DRIFTSTATUS: number;
  VAGID: string;
  NAMN2: string;
  VAGNUMMER: string;
  VAGNUMMER2: string;
  VAGNUMMER3: string;
  INPASSAD: number;
  'SHAPE.STLength()': number;
  location: LocationInterface[];
}
