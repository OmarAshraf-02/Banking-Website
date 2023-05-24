import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import { UsersIcon } from "@heroicons/react/24/solid";
import { PageTitle, Footer } from "../widgets/layout";
import { FeatureCard, TeamCard } from "../widgets/cards";
import { featuresData, teamData, contactData } from "../data";

export function Home() {
  return (
    <>
      <div className="relative flex h-screen content-center items-center justify-center pt-16 pb-32">
        <div className="absolute top-0 h-full w-full bg-[url('https://images.unsplash.com/photo-1501167786227-4cba60f6d58f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/75 bg-cover bg-center" />
        <div className="max-w-8xl container relative mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
              <Typography
                variant="h1"
                color="white"
                className="mb-6 font-black"
              >
                Your Financial Success starts with us.
              </Typography>
              <Typography variant="lead" color="white" className="opacity-80">
              At 404 Bank, we understand that each customer has different financial requirements and aspirations. That's why we offer a diverse portfolio of banking products and services tailored to your needs. Whether you're looking for personal banking solutions such as savings accounts, checking accounts, loans, or credit cards, or seeking business banking services like business accounts, merchant services, or commercial loans, our dedicated team of professionals is here to assist you.
              </Typography>
            </div>
          </div>
        </div>
      </div>
      <section className="-mt-32 bg-gray-50 px-4 pb-20 pt-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map(({ color, title, icon, description }) => (
              <FeatureCard
                key={title}
                color={color}
                title={title}
                icon={React.createElement(icon, {
                  className: "w-5 h-5 text-white",
                })}
                description={description}
              />
            ))}
          </div>
          <div className="mt-32 flex flex-wrap items-center">
            <div className="mx-auto -mt-8 w-full px-4 md:w-5/12">
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-white p-3 text-center shadow-lg">
                <UsersIcon className="h-6 w-6 text-blue-gray-900" />
              </div>
              <Typography
                variant="h3"
                className="mb-3 font-bold"
                color="blue-gray"
              >
                Banking with us is a pleasure
              </Typography>
              <Typography className="mb-8 font-normal text-blue-gray-500">
              We strive to provide an exceptional banking experience that goes beyond mere transactions. Our commitment to customer satisfaction is unwavering, and we continuously endeavor to exceed your expectations. Our friendly and knowledgeable staff is dedicated to assisting you with all your financial needs, ensuring that every interaction leaves you feeling valued and supported. 
                <br />
                <br />
                We understand that your time is precious, which is why we have streamlined our processes to offer quick and efficient services, allowing you to spend more time on the things that matter most to you. With cutting-edge technology and innovative solutions, we make banking convenient and accessible, empowering you to manage your finances with ease. Trust and security are the cornerstones of our operations, and we employ robust measures to safeguard your personal information and financial assets.
              </Typography>
            </div>
            <div className="mx-auto mt-24 flex w-full justify-center px-4 md:w-4/12 lg:mt-0">
              <Card className="shadow-lg shadow-gray-500/10">
                <CardHeader className="relative h-56">
                  <img
                    alt="Card Image"
                    src="/src/assets/bank.jpeg"
                    className="h-full w-full"
                  />
                </CardHeader>
                <CardBody>
                  <Typography
                    variant="h5"
                    color="blue-gray"
                    className="mb-3 font-bold"
                  >
                    Flexible Services
                  </Typography>
                  <Typography className="font-normal text-blue-gray-500">
                  Choose from a range of account options tailored to your needs. Whether you're saving for a goal, managing your day-to-day expenses, or planning for retirement, we have the right account for you.
                  </Typography>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </section>
      
      <section className="relative bg-blue-gray-50/50 py-24 px-4">
        <div className="container mx-auto">
          <PageTitle heading="Build for the Future">
          Backed by the expertise of our dedicated team, we understand the importance of staying ahead in today's rapidly changing financial landscape. That's why we leverage cutting-edge technology and innovative solutions to ensure your banking experience is seamless, efficient, and tailored to your unique needs.
          </PageTitle>
          <div className="mx-auto mt-20 mb-48 grid max-w-5xl grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3">
            {contactData.map(({ title, icon, description }) => (
              <Card
                key={title}
                color="transparent"
                shadow={false}
                className="text-center text-blue-gray-900"
              >
                <div className="mx-auto mb-6 grid h-14 w-14 place-items-center rounded-full bg-white shadow-lg shadow-gray-500/20">
                  {React.createElement(icon, {
                    className: "w-5 h-5",
                  })}
                </div>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                  {title}
                </Typography>
                <Typography className="font-normal text-blue-gray-500">
                  {description}
                </Typography>
              </Card>
            ))}
          </div>
        </div>
        <div className="bg-blue-gray-50/50">
        <Footer />
      </div>
      </section>

    </>
  );
}

export default Home;
