"use server";

import { redirect } from "@/i18n/navigation";
import { createClient } from "@/lib/supabase/server";
import { getLocale } from "next-intl/server";

type SignUpPayload = {
  email: string;
  password: string;
  name: string;
};

export async function signUp({ email, password, name }: SignUpPayload) {
  const supabase = await createClient();
  const locale = await getLocale();

  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        full_name: name,
      },
      emailRedirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/auth/confirm`,
    },
  });

  if (error) {
    return { error: error.message };
  }

  redirect({
    href: "/auth/sign-up/confirmation",
    locale: locale,
  });
}

export async function signIn({ email, password }: Omit<SignUpPayload, "name">) {
  const supabase = await createClient();
  const locale = await getLocale();

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    return { error: error.message };
  }

  redirect({ href: "/", locale });
}
