"use client"

// import { GalleryVerticalEnd} from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { useRouter } from "next/navigation"
import { useState } from "react"
import * as React from "react"
import { ComboboxDemo } from "./combobox"
import { ComboboxTopic } from "./comboboxtopic"
import { Separator } from "@/components/ui/separator"


export function InputForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const router = useRouter();
  const [topic, setTopic] = useState("");
  const [author, setAuthor] = useState("");
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    router.push(`/search/${topic.toLowerCase()}?author=${author? author.toLowerCase() : ""}`);
  };

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <form onSubmit={handleSubmit} >
        <div className="flex flex-col gap-4">
          <div className="flex flex-col items-center gap-2">
            <h1 className="text-2xl text-center md:text-5xl text-shadow-lg/20 font-bold">Qoute Generator</h1>
            <div className="mt-2 text-center text-gray-700/80 text-md/20 text-shadow-md">
              Your Daily Dose of Motivation!
            </div>
          </div>
          <div className="flex flex-col gap-8 my-2">
            <div className="grid gap-3">
              <Label className="text-md/20 text-shadow-md">Topic:</Label>
              <ComboboxTopic
                value={topic}
                onChange={setTopic}/>
              <Label className="text-md/20 text-shadow-md">Author:</Label>
              <ComboboxDemo
                value={author}
                onChange={setAuthor}
                topic={topic}
              />
            </div>
            <Button type="submit" className="w-full mt-auto transition duration-600 ease-in-out hover:-translate-y-1">
              Search
            </Button>
            <Separator className="mt-2"/>
          </div>
          
        </div>
      </form>
      <div className="text-muted-foreground *:[a]:hover:text-primary text-center text-xs text-balance *:[a]:underline *:[a]:underline-offset-4 text-md/20 text-shadow-md">
        <p>
           Developed for <a href="https://www.nexium.ltd/" className="font-semibold underline">NEXIUM</a> by <a href="https://www.linkedin.com/in/mmak285/" className="font-semibold underline">Musab Ali</a>
        </p>
      </div>
    </div>
  )
}
