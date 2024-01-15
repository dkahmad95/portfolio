import Link from "next/link";
import React from "react";
import { RiArrowDownSLine, RiBriefcase4Fill, RiTeamFill, RiTodoFill } from "react-icons/ri";
import { Button } from "./ui/button";
import { Download, Send } from "lucide-react";
import Socials from "./Socials";
import DevImg from "./DevImg";
import Badge from "./Badge";

const Hero = () => {
  return (
    <section className="py-12 xl:py-24 h-[84vh] xl:pt-10 bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none ">
      <div className="container mx-auto">
        <div className="flex justify-between gap-x-8">

          {/* text */}
          <div className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
            <div className="text-sm uppercase font-semibold nb-4 text-primary tracking-[4px]">
              Web Developer
            </div>
            <h1 className="h1 mb-4">Hello, my name is Ahmad Dekmak</h1>
            <p className="subtitle max-w-[490px] mx-auto xl:mx-0">
            With over two years of experience as a full-stack web developer, I've mastered front-end technologies like React.js, Next.js and back-end frameworks such as Node.js.
             {/* My role involves crafting seamless user experiences and collaborating across teams. I stay updated on industry trends, and I'm eager to specialize further and embrace emerging technologies to enhance my contributions in web development */}
            </p>

            {/* buttons */}
            <div className="flex flex-col gap-y-3 xl:flex-row gap-x-3 mx-auto xl:mx-0 mb-12">
              <Link href="/contact">
                <Button className="gap-x-2">
                  Contact me <Send size={18} />
                </Button>
              </Link>
              <Button variant="secondary" className="gap-x-2">
                Download CV <Download size={18} />
              </Button>
            </div>

            {/* socials */}
            <Socials
              containerStyles="flex gap-x-6 mx-auto xl:mx-0"
              iconsStyles="text-foreground text-[22px] hover:text-primary transition-all"
            />
          </div>

          {/* image */}
          <div className="hidden xl:flex relative">

            {/* badge 1 */}
            <Badge
            containerStyles='absolute top-[24%] -left-[5rem]'
              icon={<RiBriefcase4Fill />}
              endCountNum={2}
              badgeText="Years Of Experience"
            />
            {/* badge 2 */}
            <Badge
            containerStyles='absolute top-[80%] -left-[1rem]'
              icon={<RiTodoFill />}
              endCountNum={9}
              // endCountText='k'
              badgeText="Finished Projects"
            />
            {/* badge 3 */}
            <Badge
            containerStyles='absolute top-[55%] -right-8'
              icon={<RiTeamFill />}
              endCountNum={3}
              badgeText="Happy Clients"
            />
            <div className="bg-hero_shape2_light dark:bg-hero_shape2_dark w-[500px] h-[500px] bg-no-repeat absolute -top-1 -right-2"></div>
            <DevImg
              containerStyles="bg-hero_shape w-[510px] h-[462px] bg-no-repeat relative bg-bottom"
              imgSrc="/hero/developer.png"
            />
          </div>
        </div>

        {/* icons */}
        <div className="hidden xl:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce">
          <RiArrowDownSLine className="text-3xl text-primary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
