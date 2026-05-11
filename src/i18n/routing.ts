import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ["en", "pt-br"],

  // Used when no locale matches
  defaultLocale: "en",

  pathnames: {
    "/": "/",
    "/auth/sign-in": {
      en: "/auth/login",
      "pt-br": "/auth/entrar",
    },
    "/auth/sign-up": {
      en: "/auth/register",
      "pt-br": "/auth/cadastro",
    },
    "/auth/sign-up/confirmation": {
      en: "/auth/sign-up/confirmation",
      "pt-br": "/auth/cadastro/confirmacao",
    },
    "/auth/auth-code-error": {
      en: "/auth/auth-error",
      "pt-br": "/auth/erro-de-autenticacao",
    },
  },
});
