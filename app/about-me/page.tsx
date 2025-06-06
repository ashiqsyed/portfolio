"use client"

import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel";

import Image from 'next/image'
export default function AboutMe() {
    
    return (
        <div className="bg-gray-900 min-h-screen text-gray-100 flex items-center justify-center flex-col">
            <div className=" w-2/3">
                <div className="w-full h-1/3 flex m-8">
                    
                    <div className="w-1/3 h-full flex items-center justify-center">
                        <Image 
                            src="/ashiq.jpg"
                            width={300}
                            height={300}
                            alt="Picture of myself"
                            // className="rounded-full"
                        />
                    </div>
                    <div className="w-1/3 h-full flex flex-col items-center justify-center">
                        <h1 className="text-3xl w-full">About Me</h1>
                        <p className="w-full">I'm a recent Computer Science graduate from the University of Georgia with a background in software engineering, having strengthened my skills through coursework and by participating in hackathons.</p>                                     
                        <p className="w-full">While I structured my coursework around software engineering, I also developed an interest in other fields of computer science - such as data, cybersecurity, and IT - through other courses and am open to roles across the field, where I can continue to learn, grow, and contribute.</p>
                    </div>
                    <div className="w-1/3 h-full flex items-center justify-center">
                        <Image 
                            src="/ugahackspic.jpg"
                            width={400}
                            height={300}
                            alt="UGAHacks 2025"
                        />
                    </div>
                    
                </div>

                <div className="w-full h-1/3 flex m-8 border border-white">
                    <div className="w-2/3 h-full flex justify-center items-center border border-white">
                        <div>
                            <p className="w-full border border-orange-500">I now stay active by working on personal projects, learning about new technologies and expanding my skills.</p>
                            <p className="w-full">I am currently seeking a full-time entry-level position or internship where I am able to make an impact.</p>
                            <p className="w-full"> Aside from programming, I enjoy playing guitar, going to the gym, traveling, and playing video games. I have gotten more into bouldering and cooking. I also enjoy discovering new types of music and expanding my taste.</p>
                        </div>
                        
                    </div>
                    <div className="w-1/3 h-full  flex items-center justify-center">
                      <Carousel className="w-full max-w-xs">
                        <CarouselContent>                            
                            <CarouselItem>
                                <Image 
                                    src="/ny1.jpg"
                                    width={400}
                                    height={400}
                                    alt="UGA Hacks 2025"
                                />
                            </CarouselItem>
                            {/* <CarouselItem>
                                <Image 
                                    src="/ny2.jpg"
                                    width={400}
                                    height={400}
                                    alt="UGA Hacks 2025"
                                />
                            </CarouselItem> */}
                            <CarouselItem>
                                <Image 
                                    src="/ny3.jpg"
                                    width={400}
                                    height={400}
                                    alt="UGA Hacks 2025"
                                />
                            </CarouselItem>
                            <CarouselItem>
                                <Image 
                                    src="/ny4.jpg"
                                    width={400}
                                    height={400}
                                    alt="UGA Hacks 2025"
                                />
                            </CarouselItem>
                            <CarouselItem>
                                <Image 
                                    src="/bos1.jpg"
                                    width={400}
                                    height={400}
                                    alt="UGA Hacks 2025"
                                />
                            </CarouselItem>
                            <CarouselItem>
                                <Image 
                                    src="/bos2.jpg"
                                    width={400}
                                    height={400}
                                    alt="UGA Hacks 2025"
                                />
                            </CarouselItem>
                            <CarouselItem>
                                <Image 
                                    src="/la1.jpg"
                                    width={400}
                                    height={400}
                                    alt="UGA Hacks 2025"
                                />
                            </CarouselItem>
                            <CarouselItem>
                                <Image 
                                    src="/sf1.jpg"
                                    width={400}
                                    height={400}
                                    alt="UGA Hacks 2025"
                                />
                            </CarouselItem>
                            <CarouselItem>
                                <Image 
                                    src="/sm1.jpg"
                                    width={400}
                                    height={400}
                                    alt="UGA Hacks 2025"
                                />
                            </CarouselItem>
                            {/* <CarouselItem>
                                <Image 
                                    src="/ha1.jpg"
                                    width={400}
                                    height={400}
                                    alt="UGA Hacks 2025"
                                />
                            </CarouselItem> */}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                        </Carousel>
                    </div>
                </div>

                <div className="w-full h-1/3 flex items-center justify-center m-8">
                    <iframe className="w-1/2" src="https://open.spotify.com/embed/playlist/1tgoewEoIaoLZHfVxi3Upz?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                </div>
            </div>
            
            
        </div>
    )
}

{/* <div className="w-1/2 h-7/8 flex items-center justify-center">
                <div className="w-full h-2/3 overflow-auto">
                    
                    
                </div>
                <div className="border border-white w-full h-2/3">
                    Carousel Here
                </div>
            </div> */}