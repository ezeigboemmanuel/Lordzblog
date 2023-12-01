// About Page

import Image from "next/image";
import React from "react";

function AboutPage() {
  return (
    <article className="mx-5 flex flex-col items-center">
      {/* Image URL gotten from https://freepik.com */}
      <Image
        src="https://img.freepik.com/free-vector/businessman-working-laptop-computer-office-3d-character-isolated-white-background_40876-3756.jpg?w=740&t=st=1701246953~exp=1701247553~hmac=a67cc9ab1f8b10fcc57d040bce60d0b7e7ea4ccb481dc171e91ba6a6a6e89c50"
        width={400}
        height={400}
        alt="about_me"
      />
      <h1 className="text-4xl font-bold mb-6">Hello, I'm Lordz</h1>
      
      <p className="text-lg mb-4">
        Welcome to my corner of the internet! I'm a passionate developer who loves turning ideas into reality through code. With a background in development, I enjoy the challenge of solving complex problems and creating elegant solutions.
      </p>

      <p className="text-lg mb-4">
        My journey in the world of programming started 5 years ago, and since then, I've had the opportunity to work on a diverse range of projects. Whether it's building web applications, crafting mobile apps, or diving into the world of data science, I thrive on the excitement of learning and pushing the boundaries of what's possible.
      </p>

      <p className="text-lg mb-4">
        When I'm not immersed in lines of code, you can find me playing games. I believe in the power of continuous learning, and I'm always exploring new technologies and methodologies to stay at the forefront of the ever-evolving tech landscape.
      </p>

      <p className="text-lg mb-4">
        This blog is my way of sharing my experiences, insights, and tips with the community. I hope you find inspiration and valuable information here. Feel free to reach out if you have any questions or just want to connect!
      </p>

      <p className="text-lg">
        Let's code something amazing together!
      </p>
    </article>
  );
}

export default AboutPage;
