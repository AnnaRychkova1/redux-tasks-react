// export const getTasks = state => state.tasks;

// export const getStatusFilter = state => state.filters.status;

// one more

// export const selectTasks = state => state.tasks.items;

// export const selectIsLoading = state => state.tasks.isLoading;

// export const selectError = state => state.tasks.error;

// export const selectStatusFilter = state => state.filters.status;

// one more

// import { statusFilters } from './constants';

// export const selectTasks = state => state.tasks.items;

// export const selectIsLoading = state => state.tasks.isLoading;

// export const selectError = state => state.tasks.error;

// export const selectStatusFilter = state => state.filters.status;

// export const selectVisibleTasks = state => {
//   const tasks = selectTasks(state);
//   const statusFilter = selectStatusFilter(state);

//   switch (statusFilter) {
//     case statusFilters.active:
//       return tasks.filter(task => !task.completed);
//     case statusFilters.completed:
//       return tasks.filter(task => task.completed);
//     default:
//       return tasks;
//   }
// };

// export const selectTaskCount = state => {
//   const tasks = selectTasks(state);

//   return tasks.reduce(
//     (count, task) => {
//       if (task.completed) {
//         count.completed += 1;
//       } else {
//         count.active += 1;
//       }
//       return count;
//     },
//     { active: 0, completed: 0 }
//   );
// };

// one more

import { createSelector } from '@reduxjs/toolkit';
import { statusFilters } from './constants';

export const selectTasks = state => state.tasks.items;

export const selectIsLoading = state => state.tasks.isLoading;

export const selectError = state => state.tasks.error;

export const selectStatusFilter = state => state.filters.status;

export const selectVisibleTasks = createSelector(
  [selectTasks, selectStatusFilter],
  (tasks, statusFilter) => {
    console.log('Calculating visible tasks');

    switch (statusFilter) {
      case statusFilters.active:
        return tasks.filter(task => !task.completed);
      case statusFilters.completed:
        return tasks.filter(task => task.completed);
      default:
        return tasks;
    }
  }
);

export const selectTaskCount = createSelector([selectTasks], tasks => {
  console.log('Calculating task count');

  return tasks.reduce(
    (count, task) => {
      if (task.completed) {
        count.completed += 1;
      } else {
        count.active += 1;
      }
      return count;
    },
    { active: 0, completed: 0 }
  );
});
