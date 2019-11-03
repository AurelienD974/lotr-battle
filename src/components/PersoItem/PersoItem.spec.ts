import { shallowMount } from '@vue/test-utils';
import PersoItem from './PersoItem.vue';
const $store = { dispatch: () => undefined };
const wrapper = shallowMount(PersoItem, {
  mocks: { $store },
  propsData: { perso: { id: 1, name: 'The Rock', traits: 'Human.Noble.Catcher', health: 5, attack:5, done: false, editing: false } },
});
describe('PersoItem',() => {

it('should not display the form when not editing', () => {
    expect(wrapper.find('form').element).toBeFalsy();
  });

  it('should enter edit mode', (done) => {
    const spy = spyOn($store, 'dispatch');

    wrapper.find('.perso__edit').trigger('click');

    wrapper.vm.$nextTick(() => {
      expect(spy).toHaveBeenCalledWith('persos/enterEditMode', {
        perso: { id: 1, name: 'The Rock', traits: 'Human.Noble.Catcher', health: 5, attack:5, done: false, editing: false },
      });
      done();
    });
  });

  it('should display the form when editing instead of the name', () => {
    wrapper.vm.$props.perso.editing = true;
    wrapper.vm.$forceUpdate();

    expect(wrapper.find('.perso__edit').element).toBeFalsy();
    expect(wrapper.find('form').element).toBeTruthy();
  });

  it('should quit edit mode when submitting a new name', () => {
    const spy = spyOn($store, 'dispatch');
    wrapper.vm.$props.perso.editing = true;
    wrapper.vm.$forceUpdate();

    wrapper.find('form').trigger('submit');

    expect(spy).toHaveBeenCalledWith('persos/quitEditMode');
  });

  it('should set a new name', () => {
    const spy = spyOn($store, 'dispatch');
    wrapper.vm.$props.perso.editing = true;
    wrapper.vm.$forceUpdate();

    wrapper.find('form input').setValue('The paper');
    wrapper.find('form').trigger('submit');

    expect(spy).toHaveBeenCalledWith('persos/setName', {
      perso: { id: 1, name: 'The Rock', done: false, editing: true },
      name: 'The paper',
    });
  });
  it('should set a new traits', () => {
    const spy = spyOn($store, 'dispatch');
    wrapper.vm.$props.perso.editing = true;
    wrapper.vm.$forceUpdate();

    wrapper.find('form input').setValue('Humanoid.riche.laid');
    wrapper.find('form').trigger('submit');

    expect(spy).toHaveBeenCalledWith('persos/setName', {
      perso: { id: 1, traits: 'Human.Noble.Catcher', done: false, editing: true },
      traits: 'Humanoid.riche.laid',
    });
  });
  it('should set a new Health', () => {
    const spy = spyOn($store, 'dispatch');
    wrapper.vm.$props.perso.editing = true;
    wrapper.vm.$forceUpdate();

    wrapper.find('form input').setValue(2);
    wrapper.find('form').trigger('submit');

    expect(spy).toHaveBeenCalledWith('persos/setName', {
      perso: { id: 1, health: 5, done: false, editing: true },
      traits: 2,
    });
  });
  it('should set a new Attack', () => {
    const spy = spyOn($store, 'dispatch');
    wrapper.vm.$props.perso.editing = true;
    wrapper.vm.$forceUpdate();

    wrapper.find('form input').setValue(1);
    wrapper.find('form').trigger('submit');

    expect(spy).toHaveBeenCalledWith('persos/setName', {
      perso: { id: 1, attack: 5, done: false, editing: true },
      attack: 1,
    });
  });
  

  it('should not set a new name when the input is empty', () => {
    const spy = spyOn($store, 'dispatch');
    wrapper.vm.$props.perso.editing = true;
    wrapper.vm.$forceUpdate();

    wrapper.find('form input').setValue('');
    wrapper.find('form').trigger('submit');

    expect(spy).not.toHaveBeenCalledWith('persos/setName', {
      perso: { id: 1, name: 'eat', done: false, editing: true },
      name: '',
    });
  });
})