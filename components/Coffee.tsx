import Image from "next/image";
import Link from "next/link";
import React from "react";

const Coffee = () => {
  return (
    <div className="mb-4">
      <p className="text-xl mb-3">
        🚀 If you found value in this blog post
        and want to see more quality coding content, please consider supporting
        me with a virtual coffee ☕. Your support helps me keep creating and
        sharing knowledge with the coding community. It&apos;s the small gestures
        that make a big difference. Thank you!
      </p>
      <Link
        target="_blank"
        href="yourbuymeacoffeelink"
        className="bg-yellow-500 text-white font-medium rounded-md px-4 py-2 flex items-center justify-center hover:bg-yellow-600 transition duration-300 ease-in-out shadow-lg"
      >
        <span className="text-lg mr-2">☕</span>
        Buy me a coffee
      </Link>
    </div>
  );
};

export default Coffee;