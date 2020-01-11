import { Reducer } from 'redux';
import { Identifier } from '../../../../types';
declare type IdentifierArray = Identifier[];
declare const idsReducer: Reducer<IdentifierArray>;
export default idsReducer;
export declare const getIds: (state: any) => any;
