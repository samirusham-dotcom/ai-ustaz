-- AI-Ustaz: схема для Supabase (PostgreSQL)
-- Запускать в SQL Editor: сначала типы и таблицы, затем RLS.

create extension if not exists "pgcrypto";

do $$
begin
  if not exists (select 1 from pg_type where typname = 'user_role') then
    create type public.user_role as enum ('student', 'teacher');
  end if;
  if not exists (select 1 from pg_type where typname = 'subject') then
    create type public.subject as enum ('math', 'physics');
  end if;
  if not exists (select 1 from pg_type where typname = 'difficulty') then
    create type public.difficulty as enum ('easy', 'medium', 'hard');
  end if;
end
$$;

create table if not exists public.users (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  role public.user_role not null,
  class_id text,
  grade integer check (grade is null or (grade between 1 and 11)),
  school text,
  avatar_url text,
  created_at timestamptz not null default now()
);

create table if not exists public.topics (
  id uuid primary key default gen_random_uuid(),
  subject public.subject not null,
  title text not null,
  description text,
  grade integer not null check (grade between 1 and 11),
  sort_order integer not null default 0
);

create table if not exists public.assignments (
  id uuid primary key default gen_random_uuid(),
  topic_id uuid not null references public.topics (id) on delete cascade,
  title text not null,
  difficulty public.difficulty not null default 'medium',
  -- [{ id, prompt, options, correctIndex, explanation, difficulty }]
  questions jsonb not null default '[]'::jsonb,
  created_at timestamptz not null default now()
);

create table if not exists public.student_progress (
  id uuid primary key default gen_random_uuid(),
  student_id uuid not null references public.users (id) on delete cascade,
  topic_id uuid not null references public.topics (id) on delete cascade,
  assignment_id uuid references public.assignments (id) on delete set null,
  completed boolean not null default false,
  score_percent numeric(5, 2) not null default 0
    check (score_percent >= 0 and score_percent <= 100),
  correct_count integer not null default 0,
  total_count integer not null default 0,
  last_attempt_at timestamptz,
  weak_areas text[] not null default '{}',
  unique (student_id, topic_id)
);

create table if not exists public.diagnostics (
  id uuid primary key default gen_random_uuid(),
  student_id uuid not null references public.users (id) on delete cascade,
  subject public.subject not null,
  taken_at timestamptz not null default now(),
  overall_score numeric(5, 2) not null default 0
    check (overall_score >= 0 and overall_score <= 100),
  -- [{ topicId, scorePercent }]
  topic_scores jsonb not null default '[]'::jsonb,
  recommended_topic_ids uuid[] not null default '{}'
);

create index if not exists users_role_idx on public.users (role);
create index if not exists users_class_id_idx on public.users (class_id);
create index if not exists topics_subject_idx on public.topics (subject);
create index if not exists assignments_topic_id_idx on public.assignments (topic_id);
create index if not exists student_progress_student_id_idx on public.student_progress (student_id);
create index if not exists student_progress_topic_id_idx on public.student_progress (topic_id);
create index if not exists diagnostics_student_id_idx on public.diagnostics (student_id);
create index if not exists diagnostics_subject_idx on public.diagnostics (subject);

alter table public.users enable row level security;
alter table public.topics enable row level security;
alter table public.assignments enable row level security;
alter table public.student_progress enable row level security;
alter table public.diagnostics enable row level security;

-- Для хакатона: чтение всем аутентифицированным, запись — тоже (уточнить перед продом).
drop policy if exists "users_select_authenticated" on public.users;
create policy "users_select_authenticated"
  on public.users for select to authenticated using (true);

drop policy if exists "users_write_authenticated" on public.users;
create policy "users_write_authenticated"
  on public.users for all to authenticated using (true) with check (true);

drop policy if exists "topics_select_authenticated" on public.topics;
create policy "topics_select_authenticated"
  on public.topics for select to authenticated using (true);

drop policy if exists "topics_write_authenticated" on public.topics;
create policy "topics_write_authenticated"
  on public.topics for all to authenticated using (true) with check (true);

drop policy if exists "assignments_select_authenticated" on public.assignments;
create policy "assignments_select_authenticated"
  on public.assignments for select to authenticated using (true);

drop policy if exists "assignments_write_authenticated" on public.assignments;
create policy "assignments_write_authenticated"
  on public.assignments for all to authenticated using (true) with check (true);

drop policy if exists "student_progress_select_authenticated" on public.student_progress;
create policy "student_progress_select_authenticated"
  on public.student_progress for select to authenticated using (true);

drop policy if exists "student_progress_write_authenticated" on public.student_progress;
create policy "student_progress_write_authenticated"
  on public.student_progress for all to authenticated using (true) with check (true);

drop policy if exists "diagnostics_select_authenticated" on public.diagnostics;
create policy "diagnostics_select_authenticated"
  on public.diagnostics for select to authenticated using (true);

drop policy if exists "diagnostics_write_authenticated" on public.diagnostics;
create policy "diagnostics_write_authenticated"
  on public.diagnostics for all to authenticated using (true) with check (true);
