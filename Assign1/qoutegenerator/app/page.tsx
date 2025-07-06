import { InputForm } from "@/components/search-form"

export default function LoginPage() {
  return (
    <div className="bg-radial from-gray-600 to-gray-300  flex min-h-svh flex-col items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm md:max-w-3xl font-mono border-2 bg-green-100 shadow-green-100 rounded-xl p-8 ">
        <InputForm  />
      </div>
    </div>
  )
}
