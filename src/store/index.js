import Vue from 'vue';
import Vuex from 'vuex';
import { getRemainingProjects, getActiveProject } from './getters';
import { fetchProjectList, setActiveProject, addActiveProjectToRemaining } from './actions';
import { setRemainingProjects, setActiveProjectMutate } from './mutations';

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    active_project: {
      id: null,
      projectName: '',
      projectLink: '',
      projectPresentationLink: '',
    },
    remaining_projects: [],
  },
  mutations: {
    setRemainingProjects,
    setActiveProjectMutate,
  },
  getters: {
    getRemainingProjects,
    getActiveProject,
  },
  actions: {
    fetchProjectList,
    setActiveProject,
    addActiveProjectToRemaining,
  },
});

export default store;
