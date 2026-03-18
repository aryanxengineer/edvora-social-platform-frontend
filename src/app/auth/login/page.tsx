import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Field, FieldError, FieldGroup } from "@/components/ui/field";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Controller, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import loginSchema from "@/schemas/loginSchema";
import * as z from "zod";
import { useNavigate } from "react-router-dom";

const Login = () => {

    const navigate = useNavigate();

    const form = useForm<z.infer<typeof loginSchema>>({
        resolver: zodResolver(loginSchema),
        mode: "onChange",
        defaultValues: {
            identifier: "",
            password: "",
        },
    });

    const onSubmit = (data: z.infer<typeof loginSchema>) => {
        console.log(data);
        navigate('/');
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-black via-gray-900 to-gray-800 px-4">
            <div className="w-full max-w-md">
                {/* Header */}
                <div className="text-center mb-6">
                    <h1 className="text-3xl font-bold text-white">
                        <span className="text-green-500">Edvora</span>
                    </h1>
                    <p className="text-gray-400 text-sm mt-1">
                        Welcome back. Please login to continue
                    </p>
                </div>

                {/* Card */}
                <Card className="bg-gray-950/80 backdrop-blur-xl border border-gray-800 shadow-xl rounded-2xl">
                    <CardContent className="pt-6">
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                            <FieldGroup>
                                {/* Username */}
                                <Controller
                                    name="identifier"
                                    control={form.control}
                                    render={({ field, fieldState }) => (
                                        <Field data-invalid={fieldState.invalid}>
                                            <Input
                                                {...field}
                                                placeholder="Username / Email / Phone no"
                                                autoComplete="identifier"
                                                className="bg-gray-900 border-gray-700 text-white"
                                            />
                                            {fieldState.error && <FieldError errors={[fieldState.error]} />}
                                        </Field>
                                    )}
                                />

                                {/* Password */}
                                <Controller
                                    name="password"
                                    control={form.control}
                                    render={({ field, fieldState }) => (
                                        <Field data-invalid={fieldState.invalid}>
                                            <Input
                                                {...field}
                                                type="password"
                                                placeholder="Password"
                                                autoComplete="current-password"
                                                className="bg-gray-900 border-gray-700 text-white"
                                            />
                                            {fieldState.error && <FieldError errors={[fieldState.error]} />}
                                        </Field>
                                    )}
                                />

                                {/* Submit */}
                                <Button
                                    className="w-full bg-green-500 hover:bg-green-600 transition-all duration-200 text-white font-semibold mt-4"
                                    type="submit"
                                    disabled={form.formState.isSubmitting}
                                >
                                    Login
                                </Button>
                            </FieldGroup>
                        </form>

                        {/* Divider */}
                        <div className="relative w-full h-px bg-gray-800 flex justify-center my-6">
                            <span className="absolute -bottom-2.5 w-10 text-center text-xs bg-gray-950 text-gray-400">
                                OR
                            </span>
                        </div>

                    </CardContent>

                    <CardFooter className="flex-col text-sm text-gray-400 gap-3">
                        <Link to="/forgot-password" className="hover:underline">
                            Forgot Password?
                        </Link>

                        <div>
                            Don’t have an account?{" "}
                            <Link to="/register" className="text-green-400 hover:underline">
                                Sign up
                            </Link>
                        </div>
                    </CardFooter>
                </Card>

                {/* Footer */}
                <footer className="mt-10 text-center text-gray-500 text-xs">
                    <p>© 2026 Edvora. All rights reserved.</p>
                </footer>
            </div>
        </div>
    );
};

export default Login;
