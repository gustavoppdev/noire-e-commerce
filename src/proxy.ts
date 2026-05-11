import createIntlMiddleware from "next-intl/middleware";
import { type NextRequest } from "next/server";
import { routing } from "./i18n/routing";
import { updateSession } from "@/lib/supabase/proxy";

const handleI18nRouting = createIntlMiddleware(routing);

export default async function middleware(request: NextRequest) {
  // 1. Executa o middleware de internacionalização para lidar com rotas/locales
  const intlResponse = handleI18nRouting(request);

  // 2. Passa a resposta do next-intl para o Supabase atualizar a sessão (cookies, redirects de auth)
  return await updateSession(request, intlResponse);
}

export const config = {
  matcher: [
    "/((?!api|trpc|_next|_vercel|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)$).*)",
  ],
};
