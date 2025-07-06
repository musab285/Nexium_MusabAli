import { InputForm } from "@/components/search-form"

export default function LoginPage() {
  return (
    <div className="bg-gradient-to-br from-gray-100 to-gray-600 flex min-h-svh flex-col items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm md:max-w-3xl font-mono shadow-xl border-2 bg-gray-100 rounded-xl p-8 ">
        <InputForm  />
      </div>
    </div>
  )
}
