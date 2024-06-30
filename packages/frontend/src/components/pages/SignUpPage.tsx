import { SignUp } from '@clerk/clerk-react';

const SignUpPage = () => {
  return (
    <div className="grid justify-items-center mt-10">
      <div>
        <SignUp signInUrl="/sign-in" />
      </div>
    </div>
  );
};

export default SignUpPage;
