// app/api/poll/results/route.ts

import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";

const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

const POLL_ID = "a10e1000-0000-4000-8000-000000000001";

export async function GET() {
  const { data, error } = await supabaseAdmin
    .from("poll_options")
    .select("id, vote_count")
    .eq("poll_id", POLL_ID);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ options: data });
}