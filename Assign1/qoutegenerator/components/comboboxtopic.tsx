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
}

interface Quote{
  id: number;
  text : string;
  author: string;
  topic: string;
}

export function ComboboxTopic({value, onChange}: ComboboxDemoProps) {
  const [open, setOpen] = useState(false)
  const quotes = data.filter((quote: Quote) => quote);
  const topics = Array.from(new Set(quotes.map((quote: Quote) => quote.topic[0].toUpperCase() + quote.topic.slice(1).toLowerCase())));
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between hover:shadow-md hover:bg-gray-100 transition duration-300 ease-in-out font-light"
        >
          {value
            ? topics.find((topic) => topic === value)
            : "Select topic..."}
          <ChevronsUpDown className="opacity-50" />
        </Button>
      </PopoverTrigger>
    <PopoverContent align="start" className="p-0 ">
      <Command>
        <CommandInput placeholder="Search topic..." className="h-9" />
        <CommandList>
        <CommandEmpty>No topic found.</CommandEmpty>
        <CommandGroup>
          {topics.map((topic) => (
            <CommandItem
            key={topic}
            value={topic}
            onSelect={(currentValue) => {
              onChange?.(currentValue)
              setOpen(false)
            }}
            >
            {topic}
            <Check
              className={cn(
                "ml-auto",
                value === topic ? "opacity-100" : "opacity-0"
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