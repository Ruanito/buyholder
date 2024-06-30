import { SignIn } from '@clerk/clerk-react';

const SignInPage = () => {
  return (
    <div className="grid justify-items-center mt-10">
      <div>
        <SignIn signUpUrl="/sign-up" />
      </div>
    </div>
  );
};

export default SignInPage;
