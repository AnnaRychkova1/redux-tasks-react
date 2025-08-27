// import { useSelector } from 'react-redux';
// import { Task } from '../Task/Task';
// import { getTasks, getStatusFilter } from '../../redux/selectors';
// import css from './TaskList.module.css';
// import { statusFilters } from '../../redux/constants';

// const getVisibleTasks = (tasks, statusFilter) => {
//   switch (statusFilter) {
//     case statusFilters.active:
//       return tasks.filter(task => !task.completed);
//     case statusFilters.completed:
//       return tasks.filter(task => task.completed);
//     default:
//       return tasks;
//   }
// };

// export const TaskList = () => {
//   const tasks = useSelector(getTasks);
//   const statusFilter = useSelector(getStatusFilter);
//   const visibleTasks = getVisibleTasks(tasks, statusFilter);

//   return (
//     <ul className={css.list}>
//       {visibleTasks.map(task => (
//         <li className={css.listItem} key={task.id}>
//           <Task task={task} />
//         </li>
//       ))}
//     </ul>
//   );
// };

// import { useSelector } from 'react-redux';
// import { Task } from '../Task/Task';
// import { selectTasks, selectStatusFilter } from '../../redux/selectors';
// import { statusFilters } from '../../redux/constants';
// import css from './TaskList.module.css';

// const getVisibleTasks = (tasks, statusFilter) => {
//   switch (statusFilter) {
//     case statusFilters.active:
//       return tasks.filter(task => !task.completed);
//     case statusFilters.completed:
//       return tasks.filter(task => task.completed);
//     default:
//       return tasks;
//   }
// };

// export const TaskList = () => {
//   const tasks = useSelector(selectTasks);
//   const statusFilter = useSelector(selectStatusFilter);
//   const visibleTasks = getVisibleTasks(tasks, statusFilter);

//   return (
//     <ul className={css.list}>
//       {visibleTasks.map(task => (
//         <li className={css.listItem} key={task.id}>
//           <Task task={task} />
//         </li>
//       ))}
//     </ul>
//   );
// };

// import { useSelector } from 'react-redux';
// import { Task } from '../Task/Task';
// import { selectVisibleTasks } from '../../redux/selectors';
// import css from './TaskList.module.css';

// export const TaskList = () => {
//   const tasks = useSelector(selectVisibleTasks);

//   return (
//     <ul className={css.list}>
//       {tasks.map(task => (
//         <li className={css.listItem} key={task.id}>
//           <Task task={task} />
//         </li>
//       ))}
//     </ul>
//   );
// };

import { useSelector } from 'react-redux';
import { Task } from '../Task/Task';
import { selectAllTasks } from '../../redux/tasks/selectors';
import css from './TaskList.module.css';

export const TaskList = () => {
  const tasks = useSelector(selectAllTasks);

  return (
    <ul className={css.list}>
      {tasks.map(({ id, text }) => (
        <li key={id}>
          <Task id={id} text={text} />
        </li>
      ))}
    </ul>
  );
};
