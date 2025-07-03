import data from "@/data/qoutes.json";

interface Quote {
    id: number;
    text : string;
    author: string;
    topic: string;
}

export async function generateStaticParams() {
    const topics = Array.from(new Set(data.map((quote: Quote) => quote.topic.toLowerCase())));
    return topics.map((topic) => ({ topic }));
}

export default async function TopicPage({ params }: { params: { topic: string } }) {
    const topic = params.topic.toLowerCase();
    const quotes = data.filter((quote: Quote) => quote.topic.toLowerCase() === topic);

    if (quotes.length === 0) {
        return <div className="text-center">No quotes found for this topic.</div>;
    }

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Quotes on {topic}</h1>
            <ul className="space-y-4">
                {quotes.map((quote) => (
                    <li key={quote.id} className="border p-4 rounded-md">
                        <p className="text-lg">{quote.text}</p>
                        <p className="text-sm text-gray-500">- {quote.author}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}