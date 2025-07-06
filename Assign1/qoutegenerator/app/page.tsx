import { InputForm } from "@/components/search-form"

export default function LoginPage() {
  return (
    <div className="bg-radial from-gray-500 to-gray-300 flex min-h-svh flex-col items-center justify-center p-6 md:p-10">
      <div className="w-2xl max-w-sm md:max-w-full font-mono shadow-2xl border-2 bg-green-100 rounded-xl border-gray-100 p-8 ">
        <InputForm  />
      </div>
    </div>
  )
}
