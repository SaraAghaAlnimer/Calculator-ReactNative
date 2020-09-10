import {types, Instance} from 'mobx-state-tree';

const NumbersModel = types.model('Numbers ', {
  numbers: types.optional(types.array(types.frozen()), []),
});

const OperatorsModel = types.model('Operators', {
  operators: types.optional(types.array(types.frozen()), []),
});
const RootStoreModel = types.model('Root', {
  numbers: NumbersModel,
  operators: OperatorsModel,
});
export {RootStoreModel};
export type Root = Instance<typeof RootStoreModel>;
export type Numbers = Instance<typeof NumbersModel>;
export type Operators = Instance<typeof OperatorsModel>;
