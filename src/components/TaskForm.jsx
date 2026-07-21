import { useState } from 'react';
import { suggestTitle, expandDescription } from '../aiMock';
import { PRIORITIES, PROJECTS, SEVERITIES, STATUSES, TAGS } from '../constants';

const emptyForm = {
  title: '',
  description: '',
  status: 'waiting',
  priority: 'medium',
  severity: 'medium',
  dueDate: '',
  project: PROJECTS[0],
  tags: [],
};

export default function TaskForm({ initial, onSave, onCancel }) {
  const [form, setForm] = useState(initial ?? emptyForm);
  const [aiLoading, setAiLoading] = useState(null);

  function update(field, value) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  function toggleTag(tag) {
    setForm((prev) => ({
      ...prev,
      tags: prev.tags.includes(tag)
        ? prev.tags.filter((t) => t !== tag)
        : [...prev.tags, tag],
    }));
  }

  async function handleSuggestTitle() {
    setAiLoading('title');
    try {
      const title = await suggestTitle(form.description);
      update('title', title);
    } catch (err) {
      alert(err.message);
    } finally {
      setAiLoading(null);
    }
  }

  async function handleExpandDescription() {
    setAiLoading('description');
    try {
      const description = await expandDescription(form.description);
      update('description', description);
    } catch (err) {
      alert(err.message);
    } finally {
      setAiLoading(null);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!form.title.trim()) {
      alert('عنوان وظیفه الزامی است.');
      return;
    }
    onSave(form);
  }

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <h2>{initial ? 'ویرایش وظیفه' : 'وظیفه جدید'}</h2>

      <div className="form-grid">
        <div className="form-field full">
          <label htmlFor="description">توضیحات</label>
          <textarea
            id="description"
            value={form.description}
            onChange={(e) => update('description', e.target.value)}
            placeholder="توضیح کوتاه یا کامل وظیفه..."
          />
          <div className="form-actions" style={{ marginTop: '0.5rem' }}>
            <button
              type="button"
              className="btn btn-ai"
              disabled={!!aiLoading}
              onClick={handleSuggestTitle}
            >
              {aiLoading === 'title' ? '⏳ در حال تولید...' : '✨ پیشنهاد عنوان توسط AI'}
            </button>
            <button
              type="button"
              className="btn btn-ai"
              disabled={!!aiLoading}
              onClick={handleExpandDescription}
            >
              {aiLoading === 'description' ? '⏳ در حال تکمیل...' : '✨ تکمیل توضیحات'}
            </button>
          </div>
        </div>

        <div className="form-field full">
          <label htmlFor="title">عنوان</label>
          <input
            id="title"
            value={form.title}
            onChange={(e) => update('title', e.target.value)}
            placeholder="عنوان وظیفه"
          />
        </div>

        <div className="form-field">
          <label htmlFor="status">وضعیت</label>
          <select id="status" value={form.status} onChange={(e) => update('status', e.target.value)}>
            {STATUSES.map((s) => (
              <option key={s.value} value={s.value}>
                {s.label}
              </option>
            ))}
          </select>
        </div>

        <div className="form-field">
          <label htmlFor="priority">اولویت</label>
          <select
            id="priority"
            value={form.priority}
            onChange={(e) => update('priority', e.target.value)}
          >
            {PRIORITIES.map((p) => (
              <option key={p.value} value={p.value}>
                {p.label}
              </option>
            ))}
          </select>
        </div>

        <div className="form-field">
          <label htmlFor="severity">Severity</label>
          <select
            id="severity"
            value={form.severity}
            onChange={(e) => update('severity', e.target.value)}
          >
            {SEVERITIES.map((s) => (
              <option key={s.value} value={s.value}>
                {s.label}
              </option>
            ))}
          </select>
        </div>

        <div className="form-field">
          <label htmlFor="dueDate">Due Date</label>
          <input
            id="dueDate"
            type="date"
            value={form.dueDate}
            onChange={(e) => update('dueDate', e.target.value)}
          />
        </div>

        <div className="form-field">
          <label htmlFor="project">پروژه</label>
          <select
            id="project"
            value={form.project}
            onChange={(e) => update('project', e.target.value)}
          >
            {PROJECTS.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
        </div>

        <div className="form-field full">
          <label>برچسب‌ها</label>
          <div className="tag-picker">
            {TAGS.map((tag) => (
              <button
                key={tag}
                type="button"
                className={`tag-chip${form.tags.includes(tag) ? ' selected' : ''}`}
                onClick={() => toggleTag(tag)}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="form-actions">
        <button type="submit" className="btn btn-primary">
          {initial ? 'ذخیره تغییرات' : 'افزودن وظیفه'}
        </button>
        {onCancel && (
          <button type="button" className="btn btn-secondary" onClick={onCancel}>
            انصراف
          </button>
        )}
      </div>
    </form>
  );
}
