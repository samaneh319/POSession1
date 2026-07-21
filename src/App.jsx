import { useMemo, useState } from 'react';
import { splitIntoSubtasks } from './aiMock';
import TaskCard from './components/TaskCard';
import TaskForm from './components/TaskForm';
import { PRIORITIES, PROJECTS, SEVERITIES, STATUSES, TAGS } from './constants';
import { createId, initTasks, saveTasks } from './storage';
import { filterTasks, getStats } from './utils';

export default function App() {
  const [tasks, setTasks] = useState(() => initTasks());
  const [showForm, setShowForm] = useState(false);
  const [editingTask, setEditingTask] = useState(null);
  const [aiLoadingId, setAiLoadingId] = useState(null);
  const [searchError, setSearchError] = useState('');

  const [search, setSearch] = useState('');
  const [useRegex, setUseRegex] = useState(false);
  const [filters, setFilters] = useState({
    status: '',
    priority: '',
    severity: '',
    project: '',
    tag: '',
    overdueOnly: false,
  });

  const stats = useMemo(() => getStats(tasks), [tasks]);

  const visibleTasks = useMemo(() => {
    try {
      setSearchError('');
      return filterTasks(tasks, { search, useRegex, ...filters });
    } catch (err) {
      setSearchError(err.message);
      return [];
    }
  }, [tasks, search, useRegex, filters]);

  function persist(nextTasks) {
    setTasks(nextTasks);
    saveTasks(nextTasks);
  }

  function handleSave(formData) {
    if (editingTask) {
      persist(
        tasks.map((t) =>
          t.id === editingTask.id ? { ...t, ...formData, id: t.id, createdAt: t.createdAt } : t
        )
      );
      setEditingTask(null);
    } else {
      persist([
        ...tasks,
        {
          ...formData,
          id: createId(),
          createdAt: new Date().toISOString(),
          subtasks: [],
        },
      ]);
      setShowForm(false);
    }
  }

  function handleDelete(id) {
    if (!confirm('آیا از حذف این وظیفه مطمئن هستید؟')) return;
    persist(tasks.filter((t) => t.id !== id));
  }

  function handleEdit(task) {
    setEditingTask(task);
    setShowForm(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  async function handleSplitSubtasks(task) {
    setAiLoadingId(task.id);
    try {
      const subtasks = await splitIntoSubtasks(task.title);
      persist(tasks.map((t) => (t.id === task.id ? { ...t, subtasks } : t)));
    } catch (err) {
      alert(err.message);
    } finally {
      setAiLoadingId(null);
    }
  }

  function updateFilter(key, value) {
    setFilters((prev) => ({ ...prev, [key]: value }));
  }

  function selectProject(project) {
    updateFilter('project', project);
  }

  function selectTag(tag) {
    updateFilter('tag', filters.tag === tag ? '' : tag);
  }

  function resetFilters() {
    setSearch('');
    setUseRegex(false);
    setFilters({
      status: '',
      priority: '',
      severity: '',
      project: '',
      tag: '',
      overdueOnly: false,
    });
    setSearchError('');
  }

  function resetDemoData() {
    if (!confirm('داده‌های دمو دوباره بارگذاری شوند؟')) return;
    localStorage.removeItem('tpo-demo-tasks');
    setTasks(initTasks());
    resetFilters();
    setShowForm(false);
    setEditingTask(null);
  }

  return (
    <div className="app">
      <header className="header">
        <div>
          <h1>📝 مدیریت وظایف شخصی</h1>
          <p>SPA فارسی — سبک، سریع، با کمک AI</p>
        </div>
        <div className="stats">
          <div className="stat">
            <strong>{stats.total}</strong>
            <span>کل</span>
          </div>
          <div className="stat">
            <strong>{stats.active}</strong>
            <span>فعال</span>
          </div>
          <div className="stat">
            <strong>{stats.done}</strong>
            <span>انجام‌شده</span>
          </div>
        </div>
      </header>

      <div className="layout">
        <aside className="sidebar">
          <h3>پروژه‌ها</h3>
          <ul className="sidebar-list">
            <li>
              <button
                type="button"
                className={`sidebar-btn${!filters.project ? ' active' : ''}`}
                onClick={() => selectProject('')}
              >
                همه
              </button>
            </li>
            {PROJECTS.map((p) => (
              <li key={p}>
                <button
                  type="button"
                  className={`sidebar-btn${filters.project === p ? ' active' : ''}`}
                  onClick={() => selectProject(p)}
                >
                  {p}
                </button>
              </li>
            ))}
          </ul>

          <h3>برچسب‌ها</h3>
          <ul className="sidebar-list">
            {TAGS.map((tag) => (
              <li key={tag}>
                <button
                  type="button"
                  className={`sidebar-btn${filters.tag === tag ? ' active' : ''}`}
                  onClick={() => selectTag(tag)}
                >
                  {tag}
                </button>
              </li>
            ))}
          </ul>

          <button type="button" className="btn btn-secondary" style={{ width: '100%' }} onClick={resetDemoData}>
            🔄 بازنشانی دمو
          </button>
        </aside>

        <main className="main-panel">
          <div className="toolbar">
            <div className="toolbar-row">
              <input
                type="text"
                placeholder="جستجو در عنوان، توضیحات، پروژه و برچسب..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  checked={useRegex}
                  onChange={(e) => setUseRegex(e.target.checked)}
                />
                Regex
              </label>
              <button type="button" className="btn btn-secondary" onClick={resetFilters}>
                پاک کردن فیلترها
              </button>
            </div>

            <div className="filters">
              <select value={filters.status} onChange={(e) => updateFilter('status', e.target.value)}>
                <option value="">همه وضعیت‌ها</option>
                {STATUSES.map((s) => (
                  <option key={s.value} value={s.value}>
                    {s.label}
                  </option>
                ))}
              </select>

              <select
                value={filters.priority}
                onChange={(e) => updateFilter('priority', e.target.value)}
              >
                <option value="">همه اولویت‌ها</option>
                {PRIORITIES.map((p) => (
                  <option key={p.value} value={p.value}>
                    {p.label}
                  </option>
                ))}
              </select>

              <select
                value={filters.severity}
                onChange={(e) => updateFilter('severity', e.target.value)}
              >
                <option value="">همه Severity</option>
                {SEVERITIES.map((s) => (
                  <option key={s.value} value={s.value}>
                    {s.label}
                  </option>
                ))}
              </select>

              <label className="checkbox-label">
                <input
                  type="checkbox"
                  checked={filters.overdueOnly}
                  onChange={(e) => updateFilter('overdueOnly', e.target.checked)}
                />
                فقط Overdue
              </label>
            </div>

            {searchError && <div className="error-banner">{searchError}</div>}
          </div>

          {!showForm && !editingTask && (
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => setShowForm(true)}
            >
              + وظیفه جدید
            </button>
          )}

          {(showForm || editingTask) && (
            <TaskForm
              initial={editingTask ?? undefined}
              onSave={handleSave}
              onCancel={() => {
                setShowForm(false);
                setEditingTask(null);
              }}
            />
          )}

          <div className="task-list">
            {visibleTasks.length === 0 ? (
              <div className="empty-state">
                {searchError ? 'جستجو ناموفق بود.' : 'وظیفه‌ای یافت نشد.'}
              </div>
            ) : (
              visibleTasks.map((task) => (
                <TaskCard
                  key={task.id}
                  task={task}
                  onEdit={handleEdit}
                  onDelete={handleDelete}
                  onSplitSubtasks={handleSplitSubtasks}
                  aiLoading={aiLoadingId === task.id}
                />
              ))
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
