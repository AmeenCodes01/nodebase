"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { toast } from "sonner";
import { z } from "zod";
import { Button } from "@/components/ui/button"

import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { authClient } from "@/lib/auth-client"

const loginSchema = z.object({
    email: z.email("Please enter a valid email"),
    password: z.string().min(4, "Min 4 characters Password is required")
})

type LoginFormValues = z.infer<typeof loginSchema>

export function LoginForm() {
    const router = useRouter()
    const form = useForm<LoginFormValues>({

        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: "",
            password: ""
        }
    }
    )
    const onSubmit = async (values: LoginFormValues) => {
await authClient.signIn.email({
    email:values.email,
    password: values.password,
    callbackURL: "/"
}, {
onSuccess: ()=>{
    router.push("/")
},
onError: (ctx)=>{
    toast.error(ctx.error.message)
}
})
    }

    const isPending = form.formState.isSubmitting

    return (
        <div className="flex flex-col gap-6">
            <Card>
                <CardHeader className="text-center">
                    <CardTitle>
                        Welcome back
                    </CardTitle>
                    <CardDescription>Login to Continue</CardDescription>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                        <form action="" onSubmit={form.handleSubmit(onSubmit)}>

                            <div className="grid gap-6">
                                <div className="flex flex-col gap-4">

                                    <Button variant={"outline"} className="w-full" type="button" disabled={isPending}>
                                       <Image src="/github.svg" alt="github" height={20} width={20}/>
                                        Continue with Github
                                    </Button>
                                    <Button variant={"outline"} className="w-full" type="button" disabled={isPending}>
                                        Continue with Google
                                    </Button>
                                </div>
                                <div className="grid gap-6">
                                    <FormField control={form.control}
                                        name="email"
                                        render={({ field }) => {
                                            return (
                                                <FormItem>
                                                    <FormLabel>Email</FormLabel>
                                                    <FormControl>
                                                        <Input
                                                            type="email"
                                                            placeholder="a@example.com"
                                                            {...field}
                                                        />
                                                    </FormControl>
                                                </FormItem>

                                            )
                                        }}
                                    />
                                    <FormField control={form.control}
                                        name="password"
                                        render={({ field }) => {
                                            return (
                                                <FormItem>
                                                    <FormLabel>Password</FormLabel>
                                                    <FormControl>
                                                        <Input
                                                            type="password"
                                                            placeholder="******"
                                                            {...field}
                                                        />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>

                                            )
                                        }}
                                    />
                                    <Button type="submit" className="w-full" disabled={isPending}>Login</Button>
                                </div>
                                    <div className="text-center text0sm">
                                        Don&apo;st have an account ? {" "}
                                        <Link href={"/signup"}
                                        className="underline underline-offset-4"
                                        >Sign up</Link>

                                    </div>
                            </div>

                        </form>
                    </Form>
                </CardContent>
            </Card>

        </div>
    )

}