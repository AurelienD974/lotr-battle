import Perso from '@/models/perso';
import { Plugin } from 'vuex';

const localStoragePlugin: Plugin<{ persos: { persos: Perso[] } }> = (store) => {
  store.subscribe((mutation, state) => {
    switch (mutation.type) {
      case 'persos/add':
      case 'persos/removeDone':
      case 'persos/setDone':
      case 'persos/setName':
        localStorage.setItem(
          'persos',
          JSON.stringify(
            state.persos.persos.map((perso) => ({ ...perso, editing: false })),
          ),
        );
        break;
      default:
        break;
    }
  });
};

export default localStoragePlugin;
