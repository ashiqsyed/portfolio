"use client"

import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel";

import Image from 'next/image'
export default function AboutMe() {
    
    return (
        <div className="bg-gray-900 text-gray-100 flex items-center justify-center flex-col min-h-screen p-4">
            <div className="w-3/4 flex flex-col items-center">
            {/* first third */}
                <div className="w-full sm:flex sm:m-8 sm:p-8 m-4 p-4 flex-col sm:flex-row items-center justify-center text-center  ">
                    <div className="sm:w-1/3 md:max-xl:w-1/2 h-full flex items-center justify-center">
                        <Image 
                            src="/ashiq.jpg"
                            width={300}
                            height={300}
                            alt="Picture of myself"
                            className="border-[#374151] border-3 rounded-xl"
                        />
                    </div>
                    <div className="sm:w-1/3 flex flex-col sm:text-left items-center justify-center m-2 md:max-xl:w-1/2 md:max-xl:text-center">
                        <h1 className="text-3xl w-full">About Me</h1>
                        <p className="w-full text-gray-400 mt-2 mb-1 text-xl">I&apos;m a recent Computer Science graduate from the University of Georgia with a background in software engineering, having strengthened my skills through coursework and by participating in hackathons.</p>                                     
                        <p className="w-full text-gray-400 mt-1 mb-2 text-xl">While I structured my coursework around software engineering, I also developed an interest in other fields of computer science - such as data, cybersecurity, and IT - through other courses and am open to roles across the field, where I can continue to learn, grow, and contribute.</p>
                    </div>
                    <div className="sm:w-1/3 md:max-xl:w-1/2 h-full flex items-center justify-center">
                        <Image 
                            src="/ugahackspic.jpg"
                            width={400}
                            height={300}
                            alt="UGAHacks 2025"
                            className="border-[#374151] border-3 rounded-xl"
                        />
                    </div>
                </div>

                {/* second third */}
                <div className="w-full flex sm:m-8 sm:p-8 m-2 p-4 sm:flex-row flex-col">
                    <div className="sm:w-2/3 flex justify-center items-center text-center sm:text-left text-gray-400">
                        <div className="text-xl">
                            <p className="w-full mb-2 ">I now stay active by working on personal projects, learning about new technologies and expanding my skills.</p>
                            <p className="w-full mt-1 mb-1">I am currently seeking a full-time entry-level position or internship where I am able to make an impact.</p>
                            <p className="w-full mt-1 mb-2"> Aside from programming, I enjoy playing guitar, going to the gym, traveling, and playing video games. I have gotten more into bouldering and cooking. I also enjoy discovering new types of music and expanding my taste.</p>
                        </div>
                        {/* include the last few pictures here maybe? */}
                        
                    </div>
                    <div className="sm:w-1/3 h-full flex items-center justify-center sm:ml-10 mt-4 sm:mt-0 md:max-xl:ml-16">
                      <Carousel className="w-full max-w-xs ">
                        <CarouselContent>                            
                            <CarouselItem>
                                <Image 
                                    src="/ny1.JPG"
                                    width={400}
                                    height={400}
                                    alt="UGA Hacks 2025"
                                    className="border-[#374151] border-3 rounded-xl"
                                />
                            </CarouselItem>
                            <CarouselItem>
                                <Image 
                                    src="/ny3.JPG"
                                    width={400}
                                    height={400}
                                    alt="NY3"
                                    className="border-[#374151] border-3 rounded-xl"
                                />
                            </CarouselItem>
                            <CarouselItem>
                                <Image 
                                    src="/ny4.JPG"
                                    width={400}
                                    height={400}
                                    alt="NY4"
                                    className="border-[#374151] border-3 rounded-xl"
                                />
                            </CarouselItem>
                            <CarouselItem>
                                <Image 
                                    src="/bos1.JPG"
                                    width={400}
                                    height={400}
                                    alt="BOS1"
                                    className="border-[#374151] border-3 rounded-xl"
                                />
                            </CarouselItem>
                            <CarouselItem>
                                <Image 
                                    src="/bos2.JPG"
                                    width={400}
                                    height={400}
                                    alt="BOS2"
                                    className="border-[#374151] border-3 rounded-xl"
                                />
                            </CarouselItem>
                            <CarouselItem>
                                <Image 
                                    src="/la1.JPG"
                                    width={400}
                                    height={400}
                                    alt="LA1"
                                    className="border-[#374151] border-3 rounded-xl"
                                />
                            </CarouselItem>
                            <CarouselItem>
                                <Image 
                                    src="/sf1.JPG"
                                    width={400}
                                    height={400}
                                    alt="SF1"
                                    className="border-[#374151] border-3 rounded-xl"
                                />
                            </CarouselItem>
                            <CarouselItem>
                                <Image 
                                    src="/sm1.JPG"
                                    width={400}
                                    height={400}
                                    alt="SM1"
                                    className="border-[#374151] border-3 rounded-xl"
                                />
                            </CarouselItem>
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                        </Carousel>
                    </div>
                </div>

                {/* third third */}
                <div className="w-full flex items-center justify-center sm:m-8 sm:p-8 m-4 p-4">
                    <iframe className="sm:w-1/2" src="https://open.spotify.com/embed/playlist/1tgoewEoIaoLZHfVxi3Upz?utm_source=generator" width="100%" height="352"  allowFullScreen allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                </div>
            </div>
            
            
        </div>
    )
}