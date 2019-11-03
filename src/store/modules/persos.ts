import Perso from '@/models/Perso';
import { getRandomId } from '@/utils/utils';
import { Module } from 'vuex';
import axios from 'axios'
import VueAxios from 'vue-axios'
import Vue from 'vue'

Vue.use(VueAxios, axios)

function getFromLocalStorage(): Perso[] {
  const savedPersos: string | null = localStorage.getItem('persos');

  return savedPersos ? JSON.parse(savedPersos) : [];
}

const persos: Module<{ persos: Perso[] }, any> = {
  namespaced: true,
  state: {
  
    persos: getFromLocalStorage(),
    // persos: [],
  },
  getters: {
    done(state): Perso[] {
      return state.persos.filter((perso) => perso.done);
    },
  },
  mutations: {

    add(state, payload: { name: string, traits: string, health: number, attack: number }) {
      state.persos.push({
        id: getRandomId(),
        name: payload.name,
        traits: payload.traits,
        health: payload.health,
        attack: payload.attack,
        done: false,
        editing: false,
       
      });
    },
    removeDone(state) {
      state.persos = state.persos.filter((perso) => !perso.done);
    },
    setDone(state, payload: { perso: Perso; done: boolean }) {
      (state.persos.find((perso) => perso.id === payload.perso.id) as Perso).done =
        payload.done;
    },
    setName(state, payload: { perso: Perso; name: string }) {
      (state.persos.find((perso) => perso.id === payload.perso.id) as Perso).name =
        payload.name;
    },
    setTraits(state, payload: { perso: Perso; traits: string }) {
      (state.persos.find((perso) => perso.id === payload.perso.id) as Perso).traits =
        payload.traits;
    },
    setHealth(state, payload: { perso: Perso; health: number }) {
      (state.persos.find((perso) => perso.id === payload.perso.id) as Perso).health =
        payload.health;
    },
    setAttack(state, payload: { perso: Perso; attack: number }) {
      (state.persos.find((perso) => perso.id === payload.perso.id) as Perso).attack =
        payload.attack;
    },
   
    enterEditMode(state, payload: { perso: Perso }) {
      state.persos = state.persos.map((perso) => ({
        ...perso,
        editing: perso.id === payload.perso.id,
      }));
    },
    quitEditMode(state) {
      state.persos = state.persos.map((perso) => ({ ...perso, editing: false }));
    },
  },
  actions: {
   
    add(context, payload: { name: string, traits: string, health: number, attack:number }) {
      context.commit('add', payload);
    },
    removeDone(context) {
      context.commit('removeDone');
    },
    setDone(context, payload: { perso: Perso; done: boolean }) {
      context.commit('setDone', payload);
    },
    setName(context, payload: { perso: Perso; name: string }) {
      context.commit('setName', payload);
    },
    setTraits(context, payload: { perso: Perso; traits: string }) {
      context.commit('setTraits', payload);
    },
    setHealth(context, payload: { perso: Perso; health: number }) {
      context.commit('setHealth', payload);
    },
    setAttack(context, payload: { perso: Perso; attack: number }) {
      context.commit('setAttack', payload);
    },
 
    enterEditMode(context, payload: { perso: Perso }) {
      context.commit('enterEditMode', payload);
    },
    quitEditMode(context) {
      context.commit('quitEditMode');
    },
  },
};

export default persos;
