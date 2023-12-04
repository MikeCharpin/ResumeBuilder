import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const formSchema = z.object({
  educationSchoolName: z.string().min(2, {
    message: "School name must be at least 2 characters.",
  }),
  educationTitle: z.string().min(2, {
    message: "Degree Title must be atleast 2 characters",
  }),
  educationEndDate: z.string().min(4, {
    message: "Gradutation year must be 4 digits long",
  }).max(4, {
    message: "No more than 4 digits."
  }),
  educationLocation: z.string().min(2, {
    message: "School location must be at least 2 characters.",
  }),
})

export default function EducationForm({educationInfo}) {
   const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      educationSchoolName: `${educationInfo.educationSchoolName}`,
      educationTitle: `${educationInfo.educationTitle}`,
      educationEndDate: `${educationInfo.educationEndDate}`,
      educationLocation: `${educationInfo.educationLocation}`
    },
  })

    function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.  
        console.log(values)
    }

    return (
        <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
            control={form.control}
            name="educationSchoolName"
            render={({ field }) => (
                <FormItem>
                <FormLabel>School Name</FormLabel>
                <FormControl>
                    <Input placeholder="School name here" {...field} />
                </FormControl>
                <FormMessage />
                </FormItem>
            )}
            />
                        <FormField
            control={form.control}
            name="educationTitle"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Education Title / Degree</FormLabel>
                <FormControl>
                    <Input placeholder="Degree or certificate name" {...field} />
                </FormControl>
                <FormMessage />
                </FormItem>
            )}
            />
                        <FormField
            control={form.control}
            name="educationEndDate"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Completion Year</FormLabel>
                <FormControl>
                    <Input placeholder="4 digit year" {...field} />
                </FormControl>
                <FormMessage />
                </FormItem>
            )}
            />
                        <FormField
            control={form.control}
            name="educationLocation"
            render={({ field }) => (
                <FormItem>
                <FormLabel>School Location</FormLabel>
                <FormControl>
                    <Input placeholder="Boston, MA" {...field} />
                </FormControl>
                <FormMessage />
                </FormItem>
            )}
            />
            <Button variant="outline" type="submit">Save</Button>
            <Button variant="destructive" >Remove</Button>

        </form>
        </Form>
    )
}

