import FormAuth from "../../components/FormAuth";

const SignUpPage = () => {
  return (
    <main className="grid grid-cols-1 lg:grid-cols-2 section-container">
      {/* Left side: Form */}
      <FormAuth type="sign-up" />

      {/* Right side: Image */}
      <div className="hidden lg:block relative min-h-[916px] w-full bg-neutral-100">
        {/* <Image
          src={heroImg}
          alt="Fashion Model wearing white suit"
          fill
          className="object-cover object-[80%_center]"
          priority
        /> */}
      </div>
    </main>
  );
};

export default SignUpPage;
