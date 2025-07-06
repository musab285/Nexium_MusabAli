"use client"

import { GalleryVerticalEnd} from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useRouter } from "next/navigation"
import { useState } from "react"
import * as React from "react"
import { ComboboxDemo } from "./combobox"
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
            
              <div className="flex size-8 items-center justify-center rounded-md">
                <GalleryVerticalEnd className="size-6" />
              </div>
              <span className="sr-only"></span>
           
            <h1 className="text-4xl font-extrabold">Qoute Generator</h1>
            <div className="mt-2 text-center text-sm">
              Your Daily Dose of Motivation!
            </div>
          </div>
          <div className="flex flex-col gap-8 my-4">
            <div className="grid gap-3">
              <Label className="text-lg ">Topic</Label>
              <Input
                id="topic"
                type="text"
                className="bg-white hover:shadow-md "
                placeholder="Select from motivation, success, belief..."
                onChange={(e) => setTopic(e.target.value)}
                required
              />
              <ComboboxDemo
                value={author}
                onChange={setAuthor}
                topic={topic}
              />
            </div>
            <Button type="submit" className="w-full mt-auto">
              Search
            </Button>
          </div>
          <Separator className="m-2" />
        </div>
      </form>
      <div className="text-muted-foreground *:[a]:hover:text-primary text-center text-xs text-balance *:[a]:underline *:[a]:underline-offset-4">
        <p>
           Developed for NEXIUM by Musab Ali
        </p>
      </div>
    </div>
  )
}
