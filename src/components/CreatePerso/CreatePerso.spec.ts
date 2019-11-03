//étant non-fonctionnel les tests ne sont pas vérifiés

import { shallowMount } from '@vue/test-utils';
import CreatePerso from './CreatePerso.vue';

const $store = { dispatch: () => undefined };
const wrapper = shallowMount(CreatePerso, { mocks: { $store } });

describe('CreatePerso', () => {
  it('should add a perso on form submission', () => {
    const spy = spyOn($store, 'dispatch');

    wrapper.find('Name').setValue('The rock');
    wrapper.find('Traits').setValue('Human.Noble.Catcher');

    wrapper.find('Health').setValue(5);
    wrapper.find('Attack').setValue(5);

    wrapper.find('form').trigger('submit');

    expect(spy).toHaveBeenCalledWith('persos/add', { name: 'The Rock', traits:'Human.Noble.Catcher', health:5, attack:5, });
  });

  it('should not add a perso when submitting an empty value', () => {
    const spy = spyOn($store, 'dispatch');

    wrapper.find('form').trigger('submit');

    expect(spy).not.toHaveBeenCalled();
  });


});
