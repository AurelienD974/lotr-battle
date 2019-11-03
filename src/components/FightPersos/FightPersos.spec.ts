//étant non-fonctionnel les tests ne sont pas vérifiés

import { shallowMount } from '@vue/test-utils';
import FightPersos from './FightPersos.vue';

const $store = { dispatch: () => undefined };
const wrapper = shallowMount(FightPersos, { mocks: { $store } });

describe('FightPersos', () => {
    it('should show list of perso', () => {


    })
    it('shoul show the winner of the fight'){

    })
})