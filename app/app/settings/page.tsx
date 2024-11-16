"use client";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { ArrowLeft } from "lucide-react";
import { Form, FormItem, FormLabel, FormField } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

import StoreNavBar from "@/components/StoreNavBar";
import { useSettings, Settings } from "@/components/providers/SettingsProvider";

export default function SettingsPage() {
  const router = useRouter();
  const { toast } = useToast();
  const { settings, updateSettings } = useSettings();

  const form = useForm({
    defaultValues: {
      authProvider: settings.authProvider,
    },
  });

  const onSubmit = (data: Partial<Settings>) => {
    updateSettings(data);
  };

  return (
    <>
    <StoreNavBar />
    <main className="container h-full flex flex-col items-center p-4">
      <div className="flex items-center w-full mb-4">
        <Button
          className="w-6 mr-2"
          onClick={() => router.back()}
          variant="link"
        >
          <ArrowLeft />
        </Button>
        <h1 className="text-2xl font-bold">Settings</h1>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="authProvider"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="authProvider">
                  Select Auth Provider:
                </FormLabel>
                <Select {...field} onValueChange={field.onChange}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select an option" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="privy">Privy</SelectItem>
                    <SelectItem value="dynamic">Dynamic</SelectItem>
                  </SelectContent>
                </Select>
              </FormItem>
            )}
          />
          <Button type="submit">Save Settings</Button>
        </form>
      </Form>
    </main>
    </>
  );
}
