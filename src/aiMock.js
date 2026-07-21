const TITLE_PATTERNS = [
  (text) => {
    if (text.includes('گزارش')) return 'ارسال گزارش ماهانه';
    if (text.includes('JWT') || text.includes('احراز')) return 'پیاده‌سازی احراز هویت';
    if (text.includes('بیمه')) return 'تماس با بیمه';
    if (text.includes('اسلاید') || text.includes('دمو')) return 'آماده‌سازی ارائه دمو';
    return null;
  },
];

const SUBTASK_MAP = {
  jwt: ['طراحی دیتابیس', 'پیاده‌سازی Login', 'JWT', 'Refresh Token', 'Unit Test', 'Deploy'],
  default: ['بررسی نیازمندی‌ها', 'پیاده‌سازی', 'تست', 'مستندسازی'],
};

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function suggestTitle(description) {
  await delay(800);
  const text = description.trim();
  if (!text) throw new Error('ابتدا توضیحات را وارد کنید.');

  for (const pattern of TITLE_PATTERNS) {
    const title = pattern(text);
    if (title) return title;
  }

  const firstSentence = text.split(/[.!؟?]/)[0].trim();
  if (firstSentence.length <= 40) return firstSentence;
  return firstSentence.slice(0, 37) + '…';
}

export async function expandDescription(sentence) {
  await delay(900);
  const text = sentence.trim();
  if (!text) throw new Error('ابتدا یک جمله وارد کنید.');
  return `${text}\n\nاین کار شامل بررسی جزئیات، هماهنگی با ذینفعان و ثبت نتیجه نهایی در سیستم است.`;
}

export async function splitIntoSubtasks(title) {
  await delay(1000);
  const lower = title.toLowerCase();
  if (lower.includes('jwt') || lower.includes('احراز')) {
    return SUBTASK_MAP.jwt;
  }
  return SUBTASK_MAP.default;
}
