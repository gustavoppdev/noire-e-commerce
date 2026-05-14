import Image from "next/image";
import FormAuth from "../../components/FormAuth";
import { heroImg } from "@/assets";

const SignInPage = () => {
  return (
    <main className="grid grid-cols-1 lg:grid-cols-5 section-container">
      {/* Left side: Form */}
      <FormAuth type="sign-in" />

      {/* Right side: Image */}
      <div className="hidden lg:block relative min-h-[916px] w-full bg-neutral-100 lg:col-span-2">
        <Image
          src={heroImg}
          alt="Fashion Model wearing white suit"
          fill
          className="object-cover object-[80%_center] max-h-[916px]"
          priority
        />
      </div>
    </main>
  );
};

export default SignInPage;
