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



export function ComboboxDemo({ authors }: { authors: string[] }) {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between "
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
              setValue(currentValue === value ? "" : currentValue)
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