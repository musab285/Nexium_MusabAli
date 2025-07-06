"use client"
import * as React from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

import { Check, ChevronsUpDown } from "lucide-react"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { useState } from "react"
import data from "@/data/qoutes.json";

interface ComboboxDemoProps {
  value?: string
  onChange?: (value: string) => void
  topic?: string
}

interface Quote{
  id: number;
  text : string;
  author: string;
  topic: string;
}

export function ComboboxDemo({value, onChange, topic}: ComboboxDemoProps) {
  const [open, setOpen] = useState(false)
  const quotes = data.filter((quote: Quote) => quote.topic.toLowerCase() === topic);
  const authors = quotes.map((quote: Quote) => quote.author)
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between hover:shadow-md hover:bg-white"
        >
          {value
            ? authors.find((author) => author === value)
            : "Select author..."}
          <ChevronsUpDown className="opacity-50" />
        </Button>
      </PopoverTrigger>
    <PopoverContent align="start" className="p-0 ">
      <Command>
        <CommandInput placeholder="Search author..." className="h-9" />
        <CommandList>
        <CommandEmpty>No author found.</CommandEmpty>
        <CommandGroup>
          {authors.map((author) => (
            <CommandItem
            key={author}
            value={author}
            onSelect={(currentValue) => {
              onChange?.(currentValue)
              setOpen(false)
            }}
            >
            {author}
            <Check
              className={cn(
                "ml-auto",
                value === author ? "opacity-100" : "opacity-0"
              )}
            />
            </CommandItem>
          ))}
        </CommandGroup>
        </CommandList>
      </Command>
    </PopoverContent>
    </Popover>
  )
}