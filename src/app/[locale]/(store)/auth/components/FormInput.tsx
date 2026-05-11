"use client";

import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { Control, Controller, FieldValues, Path } from "react-hook-form";

type Props<T extends FieldValues> = {
  label: string;
  name: Path<T>;
  control: Control<T>;
  placeholder?: string;
  type: React.InputHTMLAttributes<HTMLInputElement>["type"];
};

const FormInput = <T extends FieldValues>({
  label,
  type,
  placeholder,
  name,
  control,
}: Props<T>) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <Field data-invalid={fieldState.invalid} className="space-y-2">
          <FieldLabel
            htmlFor={field.name}
            className="uppercase text-[10px] font-bold tracking-widest text-neutral-900"
          >
            {label}
          </FieldLabel>
          <div className="relative">
            <Input
              {...field}
              id={field.name}
              aria-invalid={fieldState.invalid}
              type={showPassword && type === "password" ? "text" : type}
              className="rounded-none h-12 border-neutral-300 focus-visible:ring-1 focus-visible:ring-neutral-900 placeholder:text-neutral-400 placeholder:font-normal text-sm px-4"
              placeholder={placeholder}
            />
            {type === "password" && (
              <button
                type="button"
                onClick={handleShowPassword}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-600 transition-colors"
              >
                {showPassword ? (
                  <EyeOff className="w-[18px] h-[18px]" strokeWidth={1.5} />
                ) : (
                  <Eye className="w-[18px] h-[18px]" strokeWidth={1.5} />
                )}
              </button>
            )}
          </div>
          {fieldState.invalid && (
            <FieldError className="-mt-2 text-xs" errors={[fieldState.error]} />
          )}
        </Field>
      )}
    />
  );
};

export default FormInput;
