import { signIn, signUp } from "@/app/[locale]/(store)/auth/actions";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { useForm } from "react-hook-form";
import z from "zod";

export function useAuthForm(type: "sign-in" | "sign-up") {
  const t = useTranslations("Auth.Errors");
  const [serverError, setServerError] = useState<string | null>(null);

  const formSchema = z
    .object({
      name:
        type === "sign-up"
          ? z
              .string()
              .trim()
              .min(2, { message: t("minLengthName") })
              .max(100, { message: t("maxLengthName") })
              .regex(/^[\p{Letter}\s'-]+$/u, {
                message: t("invalidNameCharacters"),
              })
          : z.string().optional(),

      email: z
        .string()
        .trim()
        .toLowerCase()
        .min(1, { message: t("emailRequired") })
        .max(255, { message: t("maxLengthEmail") })
        .pipe(z.email({ message: t("invalidEmail") })),

      password: z
        .string()
        .min(6, { message: t("passwordTooShort") })
        .max(100, { message: t("passwordTooLong") })
        .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).*$/, {
          message: t("passwordComplexity"),
        }),

      confirmPassword:
        type === "sign-up"
          ? z.string().min(1, { message: t("confirmPasswordRequired") })
          : z.string().optional(),

      marketing: z.boolean().optional(),
    })
    .superRefine((data, ctx) => {
      if (type === "sign-up") {
        if (!data.name || data.name.length < 2) {
          ctx.addIssue({
            code: "custom",
            message: t("nameRequired"),
            path: ["name"],
          });
        }

        // Comparação de senhas (somente no cadastro)
        if (data.password !== data.confirmPassword) {
          ctx.addIssue({
            code: "custom",
            message: t("passwordsDoNotMatch"),
            path: ["confirmPassword"],
          });
        }
      }
    });

  type FormValues = z.infer<typeof formSchema>;

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      marketing: false,
    },
  });

  const { isSubmitting } = form.formState;

  const onSubmit = async (data: FormValues) => {
    setServerError(null);

    const result =
      type === "sign-up"
        ? await signUp({
            email: data.email,
            password: data.password,
            name: data.name ?? "",
          })
        : await signIn({ email: data.email, password: data.password });

    // Se a action retornou (ao invés de fazer redirect),
    // significa que houve erro
    if (result?.error) {
      setServerError(result.error);
      // debug
      alert(result.error);
    }
  };

  return { form, onSubmit, serverError, isSubmitting };
}
