export const setRemainingProjects = (state, projects) => {
  state.remaining_projects = projects;
};

export const setActiveProjectMutate = (state, project) => {
  state.active_project = Object.assign({}, project);
};
