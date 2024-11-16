"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Wallet, User2, Loader2 } from "lucide-react";
import { useAccount, useConfig } from "wagmi";
import { shortenAddress } from "@/lib/utils"; // You'll need to create this utility
import { DynamicButton } from "@/components/dynamic/DynamicButton";
import { registerENS, setPrimaryName } from "@/lib/ens";

const formSchema = z.object({
  name: z
    .string()
    .min(2, {
      message: "Name must be at least 2 characters.",
    })
    .max(20, {
      message: "Name must be less than 20 characters.",
    })
    .regex(/^[a-zA-Z0-9-]+$/, {
      message: "Name can only contain letters, numbers, and hyphens.",
    }),
});

type FormData = z.infer<typeof formSchema>;

export default function RegistrationForm() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { address, isConnected } = useAccount();
  const config = useConfig();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
    },
  });

  async function onSubmit(values: FormData) {
    if (!address) {
      throw new Error("No address found");
    }

    setIsLoading(true);
    try {
      // Add your ENS registration logic here
      console.log(
        `Registering ${values.name}.foodiverse.eth for address ${address}`,
      );
      await registerENS(config, values.name, address);
      await setPrimaryName(config, values.name + ".foodiverse.eth");
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  if (!isConnected) {
    return (
      <Card className="w-full max-w-md mx-auto">
        <CardHeader>
          <CardTitle>Connect Wallet</CardTitle>
          <CardDescription>
            Please connect your wallet to register your Foodiverse name
          </CardDescription>
        </CardHeader>
        <CardContent>
          <DynamicButton />
          <Button className="w-full" disabled>
            Connect Wallet First
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Register Your Foodiverse Name</CardTitle>
        <CardDescription>
          Create your unique Foodiverse identity
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Wallet Address Display */}
        <div className="flex items-center space-x-2 p-4 bg-muted rounded-lg">
          <Wallet className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm text-muted-foreground">
            Connected: {address && shortenAddress(address)}
          </span>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Choose your name</FormLabel>
                  <FormControl>
                    <div className="relative flex items-center">
                      <User2 className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                      <Input
                        placeholder="yourname"
                        className="pl-8 pr-32"
                        {...field}
                      />
                      <span className="absolute right-3 text-sm text-muted-foreground">
                        .foodiverse.eth
                      </span>
                    </div>
                  </FormControl>
                  <FormDescription>
                    This will be your unique identifier in the Foodiverse
                    ecosystem.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Creating Profile...
                </>
              ) : (
                "Create Profile"
              )}
            </Button>
          </form>
        </Form>
      </CardContent>
      <CardFooter className="flex justify-center">
        <p className="text-sm text-muted-foreground">
          Names are permanent and cannot be changed once registered
        </p>
      </CardFooter>
    </Card>
  );
}
