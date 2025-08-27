"use client";
import React, { useEffect } from "react";
import { FcGoogle } from "react-icons/fc";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

const SocialLogin = () => {
  const router = useRouter();
  const session = useSession();

  const handleSocialLogin =  (providerName) => {
     signIn(providerName);
};

useEffect(()=> {
  if(session?.status === "authenticated"){
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Login Successful',
      showConfirmButton: false,
      timer: 1500
    })
    router.push('/')
  }
},[session?.status])

  return (
    <div>
      <div className="flex justify-center gap-8">
        <p
          onClick={() => handleSocialLogin("google")}
          className="rounded-full p-3 cursor-pointer hover:bg-gray-100"
        >
          <FcGoogle size={28} />
        </p>
      </div>
    </div>
  );
};

export default SocialLogin;
