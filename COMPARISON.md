# مقایسه عمیق: Todo List شما در برابر اپ‌های معروف دنیا

## اول: «Todo List» در دنیا واقعی یعنی چه؟

اپ‌های معروف Todo فقط «لیست کار» نیستند؛ هر کدام یک **فلسفه مدیریت زمان** دارند:

| اپ | فلسفه اصلی | مخاطب |
|---|---|---|
| **Todoist** | GTD + ساختار پروژه‌ای | حرفه‌ای‌ها، فریلنسرها |
| **Microsoft To Do** | سادگی + یکپارچگی اکوسیستم مایکروسافت | کاربران Outlook/Teams |
| **Things 3** | تمرکز روی «امروز» و زیبایی UI | کاربران Apple |
| **TickTick** | همه‌چیز در یک جا (تسک + تقویم + عادت) | power userها |
| **Notion** | تسک به‌عنوان بخشی از workspace | تیم‌ها و knowledge workerها |
| **Google Tasks** | حداقلی، داخل Gmail/Calendar | کاربران Google |
| **Apple Reminders** | یادآوری هوشمند با Siri | کاربران iPhone/Mac |
| **Any.do** | تقویم + صدا + location | کاربران موبایل |

نمونه شما در دسته **Single-page personal task manager** قرار می‌گیرد — شبیه هسته اولیه Google Tasks یا Wunderlist قبل از پیچیده شدن.

---

## دسته‌بندی فیچرها (چیزهایی که اپ‌های بزرگ دارند)

### ۱. مدیریت پایه تسک (Core CRUD)
| فیچر | Todoist | To Do | TickTick | **نمونه شما** |
|---|---|---|---|---|
| افزودن تسک | ✅ | ✅ | ✅ | ✅ |
| ویرایش | ✅ | ✅ | ✅ | ✅ |
| حذف | ✅ | ✅ | ✅ | ✅ (با تأیید) |
| توضیحات | ✅ Rich text | ✅ | ✅ Markdown | ✅ متن ساده |
| Subtask / Checklist | ✅ | ✅ | ✅ | ❌ |
| Drag & drop مرتب‌سازی | ✅ | ✅ | ✅ | ❌ (فقط sort خودکار) |

**جمع‌بندی:** هسته CRUD شما کامل است. چیزی که ندارید **زیرتسک** و **مرتب‌سازی دستی** است.

---

### ۲. وضعیت و اولویت (Status & Priority)
| فیچر | Todoist | To Do | TickTick | **نمونه شما** |
|---|---|---|---|---|
| وضعیت (todo/done) | ✅ | ✅ | ✅ | ✅ (۳ حالت: انتظار / در حال انجام / انجام‌شده) |
| اولویت P1–P4 | ✅ | ⭐ (ستاره) | ✅ | ✅ (کم/متوسط/بالا) |
| Severity / Impact | ❌ (معمولاً ندارند) | ❌ | ❌ | ✅ **مزیت شما** |
| Kanban board | ❌ native | ❌ | ✅ | ❌ |
| Eisenhower Matrix | ❌ | ❌ | ✅ | ❌ |

**نکته جالب:** فیلد **Severity** (شدت/اهمیت) که شما اضافه کردید، در اکثر اپ‌های مصرفی نیست — بیشتر شبیه ابزارهای **مدیریت Incident** (مثل Jira، PagerDuty) است. این یک تمایز هوشمندانه است، ولی برای کاربر عادی ممکن است با Priority اشتباه گرفته شود.

---

### ۳. زمان‌بندی (Scheduling) — **بزرگ‌ترین شکاف شما**
| فیچر | Todoist | To Do | TickTick | **نمونه شما** |
|---|---|---|---|---|
| Due date (مهلت) | ✅ | ✅ | ✅ | ❌ |
| Reminder / Notification | ✅ | ✅ Push | ✅ | ❌ |
| Recurring tasks | ✅ | ✅ | ✅ | ❌ |
| Snooze | ✅ | ❌ | ✅ | ❌ |
| Calendar view | ✅ | ✅ | ✅ | ❌ |
| «My Day» / Today focus | ❌ | ✅ | ✅ | ❌ |

**این مهم‌ترین تفاوت است.** Todoist و To Do بدون **تاریخ سررسید** تقریباً بی‌معنی می‌شوند. نمونه شما فقط `createdAt` دارد — یعنی «کی ساخته شد»، نه «کی باید انجام شود».

---

### ۴. سازماندهی (Organization)
| فیچر | Todoist | To Do | TickTick | **نمونه شما** |
|---|---|---|---|---|
| Projects / Lists | ✅ | ✅ | ✅ | ❌ (یک لیست flat) |
| Tags / Labels | ✅ | ❌ | ✅ | ❌ |
| Folders / Areas | ✅ | ❌ | ✅ | ❌ |
| Sections / Headings | ✅ | ❌ | ✅ | ❌ |
| Color coding | ✅ | ✅ | ✅ | ✅ (badge رنگی) |

**جمع‌بندی:** همه تسک‌ها در یک سطح هستند. وقتی تعداد تسک‌ها از ~۲۰–۳۰ تا بیشتر شود، اپ‌های بزرگ با **Projects** و **Tags** مشکل را حل می‌کنند.

---

### ۵. جستجو و فیلتر (Search & Filter)
| فیچر | Todoist | To Do | TickTick | **نمونه شما** |
|---|---|---|---|---|
| جستجوی متنی | ✅ | ✅ | ✅ | ✅ |
| فیلتر وضعیت | ✅ | ✅ Smart Lists | ✅ | ✅ |
| فیلتر اولویت | ✅ | ❌ | ✅ | ✅ |
| فیلتر severity | ❌ | ❌ | ❌ | ✅ |
| Query language | ✅ (`#work & p1`) | ❌ | ✅ | ❌ |
| Saved filters | ✅ | ❌ | ✅ | ❌ |
| Sort options | ✅ | محدود | ✅ | ✅ (۴ حالت) |

**جمع‌بندی:** برای یک MVP، فیلتر شما **قوی‌تر از Microsoft To Do** است (که فقط Smart Lists دارد). ولی **Saved Filters** و **Query Language** Todoist را ندارید.

---

### ۶. همکاری و اشتراک (Collaboration)
| فیچر | Todoist | To Do | Notion | **نمونه شما** |
|---|---|---|---|---|
| Share list | ✅ | ✅ | ✅ | ❌ |
| Assign to person | ✅ | ✅ | ✅ | ❌ |
| Comments | ✅ | ❌ | ✅ | ❌ |
| Real-time sync | ✅ Cloud | ✅ Cloud | ✅ Cloud | ❌ (localStorage) |
| Multi-device | ✅ | ✅ | ✅ | ❌ |

**جمع‌بندی:** کاملاً شخصی و آفلاین. داده فقط در همان مرورگر/دستگاه باقی می‌ماند.

---

### ۷. یکپارچگی (Integrations)
| فیچر | Todoist | To Do | TickTick | **نمونه شما** |
|---|---|---|---|---|
| Gmail / Email to task | ✅ | ❌ | ✅ | ❌ |
| Calendar sync | ✅ | ✅ Outlook | ✅ | ❌ |
| Slack / Teams | ✅ | ✅ | ❌ | ❌ |
| API / Webhook | ✅ | ✅ Graph API | ✅ | ❌ |
| Voice input (Siri/Alexa) | ✅ | ✅ Cortana | ✅ | ❌ |
| Natural language parsing | ✅ «فردا ساعت ۳» | ❌ | ✅ | ❌ |

---

### ۸. بهره‌وری پیشرفته (Productivity Extras)
| فیچر | TickTick | Todoist | Notion | **نمونه شما** |
|---|---|---|---|---|
| Pomodoro timer | ✅ | ❌ | ❌ | ❌ |
| Habit tracker | ✅ | ❌ | ❌ | ❌ |
| Karma / Gamification | ❌ | ✅ | ❌ | ❌ |
| Statistics / Reports | ✅ | ✅ Premium | ✅ | ✅ (۳ عدد ساده: کل/فعال/انجام‌شده) |
| Templates | ❌ | ✅ | ✅ | ❌ |
| AI suggestions | ✅ | ✅ | ✅ | ❌ |

---

### ۹. UX و پلتفرم
| فیچر | اپ‌های بزرگ | **نمونه شما** |
|---|---|---|
| Mobile app (iOS/Android) | ✅ | ❌ (responsive web) |
| Offline-first | ✅ | ✅ (localStorage) |
| Dark mode | ✅ | ✅ |
| RTL / فارسی | ❌ (اکثراً) | ✅ **مزیت شما** |
| Keyboard shortcuts | ✅ | ❌ |
| Undo | ✅ | ❌ |
| Accessibility (a11y) | ✅ | ⚠️ پایه |

---

## نقشه مقایسه بصری

```
                    سادگی ←————————————————→ قدرت
                         │
    Google Tasks ●       │
                         │    ● Microsoft To Do
    نمونه شما ●          │
                         │         ● Things 3
                         │              ● Todoist
                         │                   ● TickTick
                         │                        ● Notion
                         │
                    شخصی ←————————————————→ تیمی
```

**نمونه شما** در گوشه **پایین-چپ** است: ساده، شخصی، بدون cloud — شبیه Google Tasks در سال ۲۰۱۸.

---

## امتیازدهی خلاصه (از ۱۰)

| بعد | Todoist | To Do | TickTick | **نمونه شما** |
|---|---|---|---|---|
| CRUD پایه | 10 | 10 | 10 | **9** |
| زمان‌بندی | 10 | 9 | 10 | **1** |
| سازماندهی | 9 | 7 | 9 | **2** |
| فیلتر/جستجو | 10 | 6 | 9 | **7** |
| همکاری | 8 | 8 | 6 | **0** |
| Sync/Cloud | 10 | 10 | 9 | **1** |
| UX/UI | 9 | 8 | 8 | **7** (برای MVP عالی) |
| فارسی/RTL | 2 | 2 | 2 | **10** |

---

## چیزهایی که نمونه شما **بهتر یا منحصربه‌فرد** دارد

1. **Severity جدا از Priority** — در اکثر اپ‌های مصرفی نیست؛ برای تیم‌های DevOps/Support معنا دارد.
2. **RTL و فارسی کامل** — Todoist و To Do فارسی native ندارند.
3. **بدون ثبت‌نام / بدون اینترنت** — privacy-first؛ داده جایی نمی‌رود.
4. **سبک و سریع** — بدون bloat؛ Todoist با ۱۵ سال feature creep سنگین شده.
5. **سه وضعیت workflow** — To Do فقط done/not done دارد؛ شما in-progress هم دارید.

---

## چیزهایی که **حیاتی** کم دارید (اگر بخواهید رقیب جدی باشید)

| اولویت | فیچر | چرا مهم است |
|---|---|---|
| 🔴 بالا | **Due date + Reminder** | بدون این، Todo List «یادآور» نیست |
| 🔴 بالا | **Projects / Lists** | بدون ساختار، scale نمی‌کند |
| 🟡 متوسط | **Subtasks** | تقریباً همه اپ‌های بزرگ دارند |
| 🟡 متوسط | **Cloud sync** | کاربر انتظار multi-device دارد |
| 🟢 پایین | **Recurring tasks** | برای عادت‌های روزانه |
| 🟢 پایین | **Tags** | جایگزین سبک‌تر Projects |

---

## جمع‌بندی نهایی

نمونه شما یک **MVP آموزشی/شخصی قوی** است که:

- **هسته مدیریت تسک** (CRUD + status + priority + filter) را درست پیاده کرده
- برای **پروژه کلاسی یا استفاده شخصی سبک** کافی است
- در برابر Todoist/TickTick، **۳ ستون اصلی** کم دارد: **زمان‌بندی، ساختار، همکاری**

اگر بخواهید به سطح «محصول واقعی» برسد، مسیر منطقی این است:

```
فاز ۱: Due date + Projects
فاز ۲: Subtasks + Tags  
فاز ۳: Backend + Sync
فاز ۴: Notifications + Recurring
```

اگر بخواهید، می‌توانم یکی از این فازها را روی همین پروژه پیاده کنم — مثلاً **Due date** یا **Projects/Lists** که بیشترین تأثیر را دارند.