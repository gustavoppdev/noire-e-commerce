import { type EmailOtpType } from "@supabase/supabase-js";

import { type NextRequest } from "next/server";

import { createClient } from "@/lib/supabase/server";
import { redirect } from "@/i18n/navigation";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ locale: string }> },
) {
  const { searchParams } = new URL(request.url);
  const token_hash = searchParams.get("token_hash");
  const type = searchParams.get("type") as EmailOtpType | null;
  const { locale } = await params;

  if (token_hash && type) {
    const supabase = await createClient();

    const { error } = await supabase.auth.verifyOtp({
      type,
      token_hash,
    });
    if (!error) {
      // redirect user to specified redirect URL or root of app
      redirect({
        href: "/",
        locale: locale,
      });
    }
  }

  // redirect the user to an error page with some instructions
  redirect({
    href: "/auth/auth-code-error",
    locale: locale,
  });
}
