import {
  formatDate,
  getPriority,
  getSeverity,
  getStatus,
  isOverdue,
} from '../constants';

export default function TaskCard({ task, onEdit, onDelete, onSplitSubtasks, aiLoading }) {
  const status = getStatus(task.status);
  const priority = getPriority(task.priority);
  const severity = getSeverity(task.severity);
  const overdue = isOverdue(task.dueDate) && task.status !== 'done';

  return (
    <article className={`task-card${overdue ? ' overdue' : ''}`}>
      <div className="task-card-header">
        <h3>{task.title}</h3>
        <div className="badges">
          <span className="badge" style={{ background: `${status.color}22`, color: status.color }}>
            {status.label}
          </span>
          <span className="badge" style={{ background: `${priority.color}22`, color: priority.color }}>
            {priority.label}
          </span>
          <span className={`badge severity-${task.severity}`}>{severity.label}</span>
          {overdue && <span className="badge overdue">Overdue</span>}
        </div>
      </div>

      {task.description && <p>{task.description}</p>}

      <div className="task-meta">
        <span>📁 {task.project}</span>
        <span>📅 {formatDate(task.dueDate)}</span>
        {task.tags.length > 0 && <span>{task.tags.join(' ')}</span>}
      </div>

      {task.subtasks?.length > 0 && (
        <div className="subtasks">
          <h4>زیروظایف</h4>
          <ul>
            {task.subtasks.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      )}

      <div className="task-actions">
        <button type="button" className="btn btn-secondary" onClick={() => onEdit(task)}>
          ویرایش
        </button>
        <button
          type="button"
          className="btn btn-ai"
          disabled={aiLoading}
          onClick={() => onSplitSubtasks(task)}
        >
          ✨ تقسیم به Subtask
        </button>
        <button type="button" className="btn btn-danger" onClick={() => onDelete(task.id)}>
          حذف
        </button>
      </div>
    </article>
  );
}
