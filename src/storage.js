import { todayISO, tomorrowISO, yesterdayISO } from './constants';

const STORAGE_KEY = 'tpo-demo-tasks';

export const SAMPLE_TASKS = [
  {
    id: '1',
    title: 'تماس با بیمه',
    description: 'پیگیری پوشش بیمه درمانی و تمدید قرارداد',
    status: 'waiting',
    priority: 'low',
    severity: 'critical',
    dueDate: yesterdayISO(),
    project: 'خانه',
    tags: ['#خرید'],
    createdAt: new Date().toISOString(),
  },
  {
    id: '2',
    title: 'آماده‌سازی اسلاید دمو',
    description: 'اسلایدهای معرفی محصول برای جلسه TPO',
    status: 'in_progress',
    priority: 'high',
    severity: 'medium',
    dueDate: todayISO(),
    project: 'پروژه TPO',
    tags: ['#فوری'],
    createdAt: new Date().toISOString(),
  },
  {
    id: '3',
    title: 'خرید میوه',
    description: 'سیب، پرتقال و موز برای هفته',
    status: 'done',
    priority: 'low',
    severity: 'low',
    dueDate: '',
    project: 'خانه',
    tags: ['#خرید'],
    createdAt: new Date().toISOString(),
  },
  {
    id: '4',
    title: 'پیاده‌سازی JWT',
    description: 'احراز هویت با JWT و Refresh Token',
    status: 'waiting',
    priority: 'medium',
    severity: 'high',
    dueDate: tomorrowISO(),
    project: 'پروژه TPO',
    tags: ['#فوری'],
    createdAt: new Date().toISOString(),
  },
];

export function loadTasks() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch {
    /* ignore */
  }
  return null;
}

export function saveTasks(tasks) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}

export function initTasks() {
  const existing = loadTasks();
  if (existing) return existing;
  saveTasks(SAMPLE_TASKS);
  return SAMPLE_TASKS;
}

export function createId() {
  return crypto.randomUUID();
}
