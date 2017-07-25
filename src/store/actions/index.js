import { SPREADSHEET } from '../../constants';
import {
  parseResponse,
  saveToLocalStorage,
  getFromLocalStorage,
  getObjectIndex,
  without,
} from '../../utilities';

export const fetchProjectList = (context) => {
  const remaining = getFromLocalStorage('remaining_projects');

  if (remaining && remaining.length) {
    return context.commit('setRemainingProjects', remaining);
  };

  if (!SPREADSHEET) {
    return console.error('Did not find a link to a web-published Google Spreadsheet in src/constants.js');
  }

  fetch(SPREADSHEET)
    .then(response => response.json())
    .then(response => {
      const projects = parseResponse(response);

      if (projects.length) {
        saveToLocalStorage('remaining_projects', projects);
        context.commit('setRemainingProjects', projects);
      }
    })
    .catch(error => console.error('error', error));
};

export const addActiveProjectToRemaining = (context, project) => {
  const projects = getFromLocalStorage('remaining_projects');
  const remaining = projects.concat(project);

  context.commit('setRemainingProjects', remaining);
  saveToLocalStorage('remaining_projects', remaining);
};

export const setActiveProject = (context, projectName) => {
  if (!projectName) {
    return context.commit('setActiveProjectMutate', {
      id: null,
      projectName: '',
      projectLink: '',
      projectPresentationLink: '',
    });
  }

  const projects = getFromLocalStorage('remaining_projects');
  const index = getObjectIndex(projects, { projectName }, 'projectName');
  const remaining = without(index, projects);

  context.commit('setActiveProjectMutate', projects[index]);
  context.commit('setRemainingProjects', remaining);
  saveToLocalStorage('remaining_projects', remaining);
};
