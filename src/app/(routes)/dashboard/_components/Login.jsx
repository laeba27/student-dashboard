import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Login() {
  return (
    <div>
 

<section className="relative flex flex-wrap lg:h-screen lg:items-center">
  <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
    <div className="mx-auto max-w-lg text-center">
    <Image src="/logo1.png" alt='logo' width={500} height={500}/>

      <p className="mt-4 text-gray-500">
      Unlock Your Academic Potential!
      </p>
    </div>

    <form action="#" className="mx-auto mb-0 mt-8 max-w-md space-y-4">
      <div>
        <label htmlFor="email" className="sr-only">Email</label>

        <div className="relative">
          <input
            type="email"
            className="w-full rounded-lg border border-sky-600 p-4 pe-12 text-sm shadow-sm"
            placeholder="Enter your Registration Number"
          />

          <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
            
          </span>
        </div>
      </div>

      <div>
        <label htmlFor="password" className="sr-only">Password</label>

        <div className="relative">
          <input
            type="password"
            className="w-full rounded-lg border-sky-600 border p-4 pe-12 text-sm shadow-sm"
            placeholder="Enter password"
          />

          <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-4 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
          </span>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-500 cursor-pointer">
          Forget Password?
         
        </p>
<Link href={"/dashboard"}>
<button
          type="submit"
          className="inline-block w-44 rounded-lg hover:font-bold hover:bg-blue-600 bg-blue-500 px-5 py-3 text-sm font-medium text-white"
        >
         Log in
        </button>
</Link>
        
      </div>
    </form>
  </div>

  <div className="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
  
    <Image
      alt="login image"
      src="/loginimg.webp"
      width={600}
      height={800}
      className="absolute inset-0 h-full w-full object-cover"
    />
  </div>
</section>
    </div>
  )
}

export default Login
