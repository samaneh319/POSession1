import { isOverdue } from './constants';

export function filterTasks(tasks, { search, useRegex, status, priority, severity, project, tag, overdueOnly }) {
  let result = [...tasks];

  if (search.trim()) {
    const query = search.trim();
    if (useRegex) {
      let regex;
      try {
        regex = new RegExp(query, 'i');
      } catch {
        throw new Error('عبارت Regular Expression نامعتبر است.');
      }
      result = result.filter(
        (t) =>
          regex.test(t.title) ||
          regex.test(t.description) ||
          t.tags.some((tagItem) => regex.test(tagItem)) ||
          regex.test(t.project)
      );
    } else {
      const lower = query.toLowerCase();
      result = result.filter(
        (t) =>
          t.title.toLowerCase().includes(lower) ||
          t.description.toLowerCase().includes(lower) ||
          t.tags.some((tagItem) => tagItem.toLowerCase().includes(lower)) ||
          t.project.toLowerCase().includes(lower)
      );
    }
  }

  if (status) result = result.filter((t) => t.status === status);
  if (priority) result = result.filter((t) => t.priority === priority);
  if (severity) result = result.filter((t) => t.severity === severity);
  if (project) result = result.filter((t) => t.project === project);
  if (tag) result = result.filter((t) => t.tags.includes(tag));
  if (overdueOnly) result = result.filter((t) => isOverdue(t.dueDate) && t.status !== 'done');

  return result;
}

export function getStats(tasks) {
  return {
    total: tasks.length,
    active: tasks.filter((t) => t.status !== 'done').length,
    done: tasks.filter((t) => t.status === 'done').length,
  };
}
