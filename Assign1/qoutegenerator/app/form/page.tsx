import { InputForm } from "@/components/search-form"

export default function LoginPage() {
  return (
    <div className="bg-hero bg-gray-700 flex min-h-svh flex-col items-center justify-center p-6 md:p-10">    
      <div className="w-full max-w-sm md:max-w-3xl font-mono border-2 bg-green-100/85 rounded-xl p-8 ">
        <InputForm  />
      </div>
    </div>
  )
}
