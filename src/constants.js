export const STATUSES = [
  { value: 'waiting', label: 'انتظار', color: '#6b7280' },
  { value: 'in_progress', label: 'در حال انجام', color: '#3b82f6' },
  { value: 'done', label: 'انجام شده', color: '#22c55e' },
];

export const PRIORITIES = [
  { value: 'low', label: 'کم', color: '#22c55e' },
  { value: 'medium', label: 'متوسط', color: '#f97316' },
  { value: 'high', label: 'زیاد', color: '#ef4444' },
];

export const SEVERITIES = [
  { value: 'low', label: 'Low' },
  { value: 'medium', label: 'Medium' },
  { value: 'high', label: 'High' },
  { value: 'critical', label: 'Critical' },
];

export const PROJECTS = ['خانه', 'پروژه TPO', 'سلامت'];

export const TAGS = ['#فوری', '#ایمیل', '#خرید'];

export function getStatus(value) {
  return STATUSES.find((s) => s.value === value) ?? STATUSES[0];
}

export function getPriority(value) {
  return PRIORITIES.find((p) => p.value === value) ?? PRIORITIES[0];
}

export function getSeverity(value) {
  return SEVERITIES.find((s) => s.value === value) ?? SEVERITIES[0];
}

export function isOverdue(dueDate) {
  if (!dueDate) return false;
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const due = new Date(dueDate);
  due.setHours(0, 0, 0, 0);
  return due < today;
}

export function formatDate(dateStr) {
  if (!dateStr) return '—';
  return new Date(dateStr).toLocaleDateString('fa-IR');
}

export function todayISO() {
  return new Date().toISOString().slice(0, 10);
}

export function yesterdayISO() {
  const d = new Date();
  d.setDate(d.getDate() - 1);
  return d.toISOString().slice(0, 10);
}

export function tomorrowISO() {
  const d = new Date();
  d.setDate(d.getDate() + 1);
  return d.toISOString().slice(0, 10);
}
