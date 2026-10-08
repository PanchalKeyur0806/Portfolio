"use client";
import { useEffect, useRef } from "react";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";

const Hero = () => {
  const heroIntroRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const roleRef = useRef<HTMLSpanElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);

  const codeRef = useRef<HTMLPreElement>(null);

  const codeSnippets = [
    // Object
    `const developer = {
  name: 'Keyur',
  role: 'Full-Stack Developer',
  stack: ['React', 'Next.js', 'Node.js'],
};`,

    // Function
    `function greetDeveloper(name) {
  return \`Hello, \${name}!\`;
}

const message = greetDeveloper('Keyur');`,

    // Class
    `class Developer {
  constructor(name, role) {
    this.name = name;
    this.role = role;
  }

  introduce() {
    return \`I'm \${this.name}, a \${this.role}.\`;
  }
}

const keyur = new Developer(
  'Keyur',
  'Full-Stack Developer'
);`,
  ];

  useEffect(() => {
    // get all the elements
    const heroIntro = heroIntroRef.current;
    const role = roleRef.current;
    const name = nameRef.current;
    const description = descriptionRef.current;

    // get code snippet element
    const codeSnippet = codeRef.current;
    if (!codeSnippet) return;

    // check if all the elements are present
    if (!heroIntro || !name || !role || !description) return;

    // Text For displaying
    const heroIntroText: string = "HI, I'M";
    const nameText: string = "Keyur";
    const roleText: string = "Full-Stack Developer";
    const obj = { count: 0 };

    gsap.set("#laptop", {
      x: 40,
    });

    // create a timeline
    const t1 = gsap.timeline();

    // hero intro text typing animation
    t1.to(obj, {
      count: heroIntroText.length,
      ease: "none",
      onUpdate: () => {
        if (heroIntro) {
          heroIntro.textContent = heroIntroText.slice(0, Math.floor(obj.count));
        }
      },
    });

    // name typing animation
    t1.set(obj, { count: 0 });
    t1.to(obj, {
      count: nameText.length,
      ease: "none",
      onUpdate: () => {
        if (name) {
          name.textContent = nameText.slice(0, Math.floor(obj.count));
        }
      },
    });

    // role typing animation
    t1.set(obj, { count: 0 });
    t1.to(obj, {
      count: roleText.length,
      ease: "none",
      onUpdate: () => {
        if (role) {
          role.textContent = roleText.slice(0, Math.floor(obj.count));
        }
      },
    });

    // description animation
    t1.to(description, {
      x: 0,
      opacity: 1,
      ease: "power3.in",
    });

    // buttons animations
    t1.to("#buttons", {
      x: 0,
      opacity: 1,
      ease: "power3.in",
    });

    // animate code snippet
    t1.to("#laptop", {
      x: 0,
      opacity: 1,
      ease: "back.in",
    });

    // CODE Snippet Animation
    // get the current index
    let currentIndex = 0;

    // function for incrementing the code snippet
    const typeNext = () => {
      // get current code
      const text = codeSnippets[currentIndex];

      // create timeline
      const timeline = gsap.timeline({
        onComplete: () => {
          currentIndex = (currentIndex + 1) % codeSnippets.length;
          typeNext();
        },
      });

      // set obj count to 0
      obj.count = 0;

      // typing animation
      timeline.to(obj, {
        count: text.length,
        duration: text.length * 0.05,
        ease: "none",
        onUpdate: () => {
          if (codeSnippet) {
            codeSnippet.textContent = text.slice(0, Math.floor(obj.count));
          }
        },
      });

      // delay between each code snippet
      timeline.to(
        {},
        {
          delay: 1.5,
        },
      );

      //deleting animation
      timeline.to(obj, {
        count: 0,
        duration: text.length * 0.05,
        ease: "none",
        onUpdate: () => {
          if (codeSnippet) {
            codeSnippet.textContent = text.slice(0, Math.floor(obj.count));
          }
        },
      });

      // delay after deleting
      timeline.to(
        {},
        {
          delay: 1,
        },
      );
    };

    // run the function
    typeNext();

    // kill the animation
    return () => {
      t1.kill();
      gsap.killTweensOf(obj);
    };
  }, []);

  return (
    <section className="mt-20 py-1 font-mono  h-100  w-full">
      <div className="max-w-8xl w-full mx-auto grid  lg:grid-cols-[1fr_0.6fr]">
        <div className="w-full ">
          {/* Hero Introduction */}
          <div
            ref={heroIntroRef}
            id="hero-intro"
            className="flex gap-2 text-[16px] text-[#00D4FF]"
          ></div>

          <div
            ref={nameRef}
            className="text-6xl sm:text-7xl lg:text-8xl font-bold mt-4"
          >
            {/* <h1>Keyur</h1> */}
          </div>

          <div className="mt-5 sm:text-2xl text-xl text-[#4C586A] font-medium ">
            <span ref={roleRef}></span>
            {/* <span className="ml-1 animate-pulse text-[#00D4FF]">
            |
          </span> */}
          </div>

          <div
            ref={descriptionRef}
            className="mt-5 text-[#4C586A] lg:w-[80%] opacity-0 "
          >
            <p>
              I'm a full stack developer who builds web apps end to end: the
              database, the API, and the interface people actually click on.
            </p>
          </div>

          <div
            id="buttons"
            className="mt-8 opacity-0 w-full flex flex-col sm:flex-row gap-3"
          >
            <Button
              className={` px-8 py-6 bg-[#00D4FF] text-black rounded-none  cursor-pointer hover:bg-[#00D4FF] hover:shadow-[0_0_20px_#00D4FF]    transition-shadow duration-300
`}
            >
              <span>View Projects</span>
              <span>
                <ArrowRight />
              </span>
            </Button>

            <Button
              className={`  px-8 py-6 border-white rounded-none  text-white bg-[#0A0A10] hover:bg-[#0A0A10] cursor-pointer`}
            >
              Get In Touch
            </Button>
          </div>
        </div>

        {/* CodeSnippet Component */}
        <div
          id="laptop"
          className="mt-15 lg:flex  h-85 py-3 lg:flex-col lg:justify-between opacity-0"
        >
          <div className="lg:w-[97%] xl:w-[90%] h-88 mx-auto  flex flex-col gap-3 border-2 border-[#00D4FF]/30 shadow-[0_0_6px_rgba(0,212,255,0.20)] rounded-lg overflow-hidden">
            <div className="h-3.75 px-1 py-4 bg-[#0D111A] border-b-2 border-[#0D111A] flex items-center justify-between">
              {/* circles */}
              <div className="ml-1 flex items-center justify-center gap-1">
                <div className="size-2.5 bg-orange-600 rounded-full"></div>
                <div className="size-2.5 bg-white rounded-full"></div>
                <div className="size-2.5 bg-green-800 rounded-full"></div>
              </div>

              {/* test */}
              <div className="flex items-center">
                <span className="text-[11px]">helloworld.js</span>
              </div>
            </div>

            <div className="px-1 http://localhost:3000/">
              {/* code */}
              <pre
                ref={codeRef}
                className="pointer-events-none w-full font-mono text-[11px] text-[#00D4FF]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
