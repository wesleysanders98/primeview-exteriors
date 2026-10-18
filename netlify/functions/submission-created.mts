// Netlify runs this function automatically for every verified form submission
// (the file name "submission-created" is the trigger). It mirrors the lead into
// the Supabase `leads` table. Email notifications are handled separately by
// Netlify Forms, so a failure here never blocks the email to the inbox.
//
// Required environment variables (Netlify > Site configuration > Environment):
//   SUPABASE_URL                e.g. https://xxxx.supabase.co
//   SUPABASE_SERVICE_ROLE_KEY   server-only key, never exposed to the browser

import type { Context } from '@netlify/functions';
import { createClient } from '@supabase/supabase-js';

export default async (req: Request, _context: Context) => {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) {
    console.warn('submission-created: Supabase env vars not set; skipping mirror.');
    return new Response('skipped', { status: 200 });
  }

  const body = await req.json();
  const payload = body?.payload ?? {};
  const data = payload.data ?? {};

  const supabase = createClient(url, key, { auth: { persistSession: false } });
  const { error } = await supabase.from('leads').insert({
    netlify_submission_id: payload.id ?? null,
    form_name: payload.form_name ?? 'estimate',
    name: data.name ?? null,
    phone: data.phone ?? null,
    email: data.email ?? null,
    zip: data.zip ?? null,
    service: data.service ?? null,
    message: data.message ?? null,
    consent: data.consent === 'yes',
    referrer: data.referrer ?? payload.referrer ?? null,
    submitted_at: payload.created_at ?? new Date().toISOString(),
    raw: payload,
  });

  if (error) {
    console.error('submission-created: insert failed', error);
    return new Response('insert failed', { status: 500 });
  }
  return new Response('ok', { status: 200 });
};
