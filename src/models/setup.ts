import {RootStoreModel} from '.';
import {onSnapshot} from 'mobx-state-tree';
export const setupRootStore = () => {
  const rootTree = RootStoreModel.create({
    numbers: ['1', '2', '3', '4', '5', '6', '7', '9', '9', '=', '0', '.'],
    operators: ['/', '*', '-', '+'],
  });
  onSnapshot(rootTree);
  // onSnapshot(rootTree, (snapshot) => console.log('snapshot: ' + snapshot));
  // const currentRootTree = getSnapshot(rootTree);
  return {rootTree};
};
