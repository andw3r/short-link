import AuthButton from "@/components/AuthButton";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { CiUser } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { CiLock } from "react-icons/ci";

export default function SignUp () {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="flex px-7 pt-8 pb-5 w-fit h-fit bg-surface rounded-card">
        <div className="flex flex-col">
          <h1 className="text-[32px] text-center mb-3">Create a new account</h1>
          <div className="">
            <form action="#">
              <div className="form-item">
                <label htmlFor="">First Name</label>
                <div className="form-input">
                  <input type="text" placeholder="first name" name="first-name" />
                  <span><CiUser /></span>
                </div>
              </div>

              <div className="form-item">
                <label htmlFor="">Last Name</label>
                <div className="form-input">
                  <input type="text" placeholder="last name" name="last-name" />
                  <span><CiUser /></span>
                </div>
              </div>

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

            <AuthButton>Create account</AuthButton>

            <div className="or-divider">or</div>

            <div className="flex flex-col items-center gap-1 text-secondary">
              <span className="flex gap-3 items-center cursor-pointer">
                <FcGoogle className="text-3xl" />Sign up with Google
              </span>
              <span>Already have an account? <Link href="/login" className="underline">Sign in</Link></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}