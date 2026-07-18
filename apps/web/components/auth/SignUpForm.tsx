import Link from "next/link";

export default function SignUpForm() {
  return (
    <main className="min-h-screen bg-[#FFDDB0] flex items-center justify-center px-36 py-8">
      <div className="flex w-full max-w-7xl min-h-[610px] overflow-hidden rounded-3xl bg-white shadow-xl">

        <section className="flex w-1/2 items-center justify-center bg-[#FFFCE1]">
        <div className="flex h-full w-full max-w-md flex-col justify-start">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-[#181818] px-20 pt-8">
            Create your account
          </h2> 
          <p className="mt-3 text-[16px] font-semibold leading-7 text-[#303030] px-16 ">
            Enter your email below to create account  
          </p>
        </div>

        <div className="mt-9 space-y-4.5">
          <div>
          <label htmlFor="fullname" className="mb-2 block text-sm font-medium text-[#181818]">
          Full Name
          </label>

          <input id="fullname" type="text" placeholder="John Doe"className="w-full rounded-xl border border-[#D8D1C7] bg-white px-2 py-2 outline-none transition-all duration-200 focus:border-[#181818]"/>
          </div>
          <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium text-[#181818] ">
            Email
          </label>

          <input id="email" type="email" placeholder="xyz@example.com" className="w-full rounded-xl border border-[#D8D1C7] bg-white px-2 py-2 outline-none transition-all duration-200 focus:border-[#181818]"/>
          <p className="mt-3 text-[16px] leading-7 text-[#303030]  ">
            We'll use this to contact you . We will not share your email with anyone else 
          </p>
          </div>

          <div className="grid grid-cols-2 gap-4 ">
            <div>
            <label htmlFor="password" className="mb-2 block text-sm font-medium text-[#181818]">
              Password
            </label>

            <input id="password" type="password" placeholder="••••••••"className="w-full rounded-xl border border-[#D8D1C7] bg-white px-2 py-2 outline-none transition-all duration-200 focus:border-[#181818]"/>
            </div>

            <div>
            <label htmlFor="confirmPassword" className="mb-2 block text-sm font-medium text-[#181818]">
              Confirm Password
            </label>

            <input id="confirmPassword" type="password" placeholder="••••••••" className="w-full rounded-xl border border-[#D8D1C7] bg-white px-2 py-2 outline-none transition-all duration-200 focus:border-[#181818]"/>
            </div>
          </div>

        </div>
       
        <div className="mt-8">
          <button type="submit" className="w-full rounded-xl bg-[#1B1B1B] py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-[#2D2D2D] active:scale-[0.98]">
            Create Account
          </button>
        </div>
        <p className="mt-4 px-18 text-[16px] leading-7 text-[#303030]">
          Already have an account?{" "}
          <Link href="/signin" className="font-semibold text-[#1B1B1B] underline">
            Sign In
          </Link>
        </p>
        </div>
        </section>

        <section className="w-1/2">
        <video
          className="h-full w-full object-cover" autoPlay loop muted playsInline>
        <source src="/videos/intro.mp4" type="video/mp4" />
        </video>
        </section>

      </div>
    </main>
  );
}