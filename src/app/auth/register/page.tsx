import { Card, CardContent } from "@/components/ui/card";
import { Field, FieldError, FieldGroup } from "@/components/ui/field";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Controller, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import registerSchema from "@/schemas/registerSchema";
import * as z from "zod";

const Register = () => {
  const form = useForm<z.input<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    mode: "onChange",
    defaultValues: {
      fullname: "",
      username: "",
      email: "",
      phoneNumber: "",
      password: "",
      dateOfBirth: undefined,
      profilePicture: null,
      gender: 2,
    },
  });

  const onSubmit = (data: z.input<typeof registerSchema>) => {
    const validatedData = registerSchema.parse(data);
    console.log(validatedData);
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4 py-6">

  <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 rounded-3xl overflow-hidden border border-white/10 shadow-2xl">

    {/* LEFT SIDE (Visible only on large screens) */}
    <div className="hidden lg:flex flex-col justify-between p-10 bg-linear-to-br from-green-500/10 via-black to-black relative">

      {/* Glow Effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,197,94,0.2),transparent_60%)]" />

      <div className="relative z-10">
        <h1 className="text-4xl font-extrabold text-white leading-tight">
          Learn.<br />Build.<br />Scale.
        </h1>

        <p className="text-gray-400 mt-4 text-sm max-w-sm">
          Join Edvora and start building real-world skills with modern tech.
        </p>
      </div>

      <div className="relative z-10 text-sm text-gray-500">
        © 2026 Edvora
      </div>
    </div>

    {/* RIGHT SIDE (FORM) */}
    <div className="bg-white/5 backdrop-blur-2xl p-6 sm:p-8 lg:p-10">

      {/* Branding (only mobile) */}
      <div className="text-center mb-6 lg:hidden">
        <h1 className="text-3xl font-bold text-white">
          <span className="text-green-400">Edvora</span>
        </h1>
        <p className="text-gray-400 text-sm mt-1">
          Start your learning journey
        </p>
      </div>

      <Card className="bg-transparent border-none shadow-none">
        <CardContent className="p-0">

          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-5"
          >
            <FieldGroup>

              {/* Inputs */}
              {[
                { name: "fullname", placeholder: "Full Name" },
                { name: "username", placeholder: "Username" },
                { name: "email", placeholder: "Email", type: "email" },
                { name: "phoneNumber", placeholder: "Phone Number", type: "tel" },
                { name: "password", placeholder: "Password", type: "password" },
              ].map((input) => (
                <Controller
                  key={input.name}
                  name={input.name as any}
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <Input
                        {...field}
                        type={input.type || "text"}
                        placeholder={input.placeholder}
                        className="h-11 bg-white/5 border border-white/10 text-white placeholder:text-gray-500 focus:ring-2 focus:ring-green-500 transition-all"
                      />
                      {fieldState.error && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  )}
                />
              ))}

              {/* Date */}
              <Controller
                name="dateOfBirth"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <Input
                      type="date"
                      value={
                        field.value instanceof Date
                          ? field.value.toISOString().split("T")[0]
                          : (field.value as string) || ""
                      }
                      onChange={(e) => field.onChange(e.target.value)}
                      className="h-11 bg-white/5 border border-white/10 text-white focus:ring-2 focus:ring-green-500"
                    />
                    {fieldState.error && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />

              {/* CTA */}
              <Button
                type="submit"
                disabled={form.formState.isSubmitting}
                className="w-full h-11 mt-4 bg-linear-to-r from-green-400 to-emerald-500 hover:scale-[1.02] transition-all text-black font-semibold rounded-xl"
              >
                Create Account
              </Button>

            </FieldGroup>
          </form>

          {/* Divider */}
          <div className="relative w-full h-px bg-white/10 flex justify-center my-6">
            <span className="absolute -bottom-2.5 px-2 text-xs bg-black text-gray-500">
              OR
            </span>
          </div>

          {/* Footer */}
          <div className="text-sm text-gray-400 text-center">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-green-400 hover:text-green-300"
            >
              Login
            </Link>
          </div>

        </CardContent>
      </Card>
    </div>
  </div>
</div>
  );
};

export default Register;