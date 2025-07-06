"use client"

import data from "@/data/qoutes.json";
import { useSearchParams } from "next/navigation";
import { useParams } from "next/navigation";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"

interface Quote {
    id: number;
    text : string;
    author: string;
    topic: string;
}


export default function TopicPage() {
    const searchParams = useSearchParams();
    const rawTopic = useParams().topic;
    const topic = (Array.isArray(rawTopic) ? rawTopic[0] : rawTopic)?.toLowerCase() || "";
    const author = searchParams.get("author")?.toLowerCase() || "";
    const quotes: Quote[] = data.filter((quote: Quote) => 
        quote.topic.toLowerCase() === topic && 
        (author ? quote.author.toLowerCase() === author : true)
    );

    if (quotes.length === 0) {
        return <div className="bg-radial from-gray-600 to-gray-300 min-h-screen items-center text-center">No quotes found for this topic.</div>;
    }


    return (
        <div className="bg-radial from-gray-600 to-gray-300  p-6 min-h-screen font-mono justify-center w-full mx-auto bg-gray-200">
            <div className="text-4xl font-semibold mb-4 p-2">Quotes on {topic.charAt(0).toUpperCase() + topic.slice(1)}...</div>
            <ScrollArea className="rounded-b-xl h-[calc(100vh-24vh)] border-collapse w-auto mx-2 px-6 py-2 ">
            {quotes.map((quote) => (
                <Card className="my-4 shadow-2xl border-2 bg-green-100 rounded-xl border-gray-100 mx-2 hover:-translate-y-1 hover:cursor-pointer hover:shadow-xl delay-150 duration-500" key={quote.id}>
                    <CardHeader>
                        <CardTitle className="font-bold">{quote.author}~</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>{quote.text}</p>
                    </CardContent>
                </Card>
            ))}
            </ScrollArea>
        </div>
    );
}