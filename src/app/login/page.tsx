import AuthButton from "@/components/AuthButton";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { CiUser } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { CiLock } from "react-icons/ci";

export default function Login () {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="flex px-3 sm:px-5 md:px-7 pt-4 sm:pt-6 md:pt-8 pb-3.5 sm:pb-5 w-fit h-fit bg-surface rounded-card">
        <div className="flex flex-col">
          <h1 className="text-2xl sm:text-[32px] text-center mb-1.5 sm:mb-3">Log into your existing account</h1>
          <div className="">
            <form action="#">
              <div className="form-item">
                <label htmlFor="">Email</label>
                <div className="form-input">
                  <input type="text" placeholder="email" name="email" />
                  <span><CiMail /></span>
                </div>
              </div>

              <div className="form-item">
                <label htmlFor="">Password</label>
                <div className="form-input">
                  <input type="text" placeholder="password" name="password" />
                  <span><CiLock /></span>
                </div>
              </div>

            </form>

            <AuthButton>Log in</AuthButton>

            <div className="or-divider">or</div>

            <div className="flex flex-col items-center gap-1 text-secondary">
              <span className="flex gap-3 items-center cursor-pointer">
                <FcGoogle className="text-3xl" />Log in with Google
              </span>
              <span>Don’t have account yet?  <Link href="/signup" className="underline">Create a new account.</Link></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}