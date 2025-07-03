"use client"

import { GalleryVerticalEnd, Router } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useRouter } from "next/navigation"
import { useState } from "react"
import * as React from "react"
import { ComboboxDemo } from "./combobox"


export function InputForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const router = useRouter();
  const [topic, setTopic] = useState("");
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    router.push(`/search/${topic.toLowerCase()}`);
  };

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <form onSubmit={handleSubmit} >
        <div className="flex flex-col gap-6">
          <div className="flex flex-col items-center gap-2">
            {/* <a
              href="#"
              className="flex flex-col items-center gap-2 font-medium"
            > */}
              <div className="flex size-8 items-center justify-center rounded-md">
                <GalleryVerticalEnd className="size-6" />
              </div>
              <span className="sr-only"></span>
            {/* </a> */}
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
                placeholder="What's on your mind?"
                onChange={(e) => setTopic(e.target.value)}
                required
              />
              <ComboboxDemo
                authors={[
                  "Albert Einstein",
                  "Isaac Newton",
                  "Marie Curie",
                  "Galileo Galilei",
                  "Nikola Tesla",
                ]}
                
              />


            </div>
            <Button type="submit" className="w-full mt-auto">
              Search
            </Button>
          </div>
          <div className="m-2 after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
            {/* <span className="bg-background text-muted-foreground relative z-10 px-2">
              
            </span> */}
          </div>
          
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
