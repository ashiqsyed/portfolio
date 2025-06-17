import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { TextEffect } from "@/components/motion-primitives/text-effect"
export default function Projects() {
    return (
        <div className=" text-gray-100 flex items-center justify-evenly flex-col min-h-screen p-4">
                    <h1 className=" text-4xl w-full sm:h-16 sm:w-1/2 flex items-center sm:text-left sm:justify-normal justify-center text-shadow-[4px_4px_4px_rgba(59,130,246,10)]"><TextEffect per="char" preset="slide">Projects</TextEffect></h1>
                    {/* project card */}
                    <Link href="https://github.com/ashiqsyed/Cost-Settler" target="_blank" className="sm:w-1/2 rounded-xl sm:h-64 sm:ml-8 sm:mr-8 sm:mt-8 sm:mb-4 mt-4 ml-4 mr-4 mb-10 transition-all duration-150 hover:shadow-[8px_8px_8px_rgba(55,65,81,0.7)]">
                        <Card className="w-full sm:h-full">
                            <CardContent className="flex items-center h-full flex-col-reverse sm:flex-row">
                                <div className="sm:w-3/4 w-11/12 text-center sm:text-left h-full flex flex-col sm:p-1">
                                    <h1 className="text-2xl h-1/6 w-full mt-1 ml-2 mr-2"><TextEffect delay={1}>Cost Settler</TextEffect></h1>
                                    <div className="flex flex-col justify-between  h-5/6 mb-4 sm:mr-2 sm:ml-2 w-full text-gray-400">
                                        <div><TextEffect per="line" delay={2}>Android app built using Java and Google Firebase for the realtime database and user authentication. Users within a household have a shared shopping list and have their own individual shopping carts. They can make purchases, see their purchase history, and settle the cost with their roommates.</TextEffect></div>
                                        <div className="text-blue-500 decoration-dotted underline"><TextEffect per="line" delay={2}>Click the card to see the repository</TextEffect></div>
                                    </div>
                                </div>                          
                                <Image 
                                    src="/costsettler.png"
                                    width={300}
                                    height={300}
                                    alt="Cost Settler IMG"
                                    className="sm:w-1/3 rounded-t-xl sm:rounded-r-xl sm:rounded-l-none sm:h-full w-full"
                                />
                            </CardContent>
                        </Card>
                    </Link>

                    <Link href="https://github.com/ashiqsyed/state-capitals-quiz" target="_blank" className="rounded-xl sm:w-1/2  sm:h-64 sm:ml-8 sm:mr-8 sm:mt-8 sm:mb-4 mt-4 ml-4 mr-4 mb-10  transition-all  duration-150 hover:shadow-[8px_8px_8px_rgba(55,65,81,0.7)] ">
                        <Card className="w-full sm:h-full">
                            <CardContent className="flex items-center h-full flex-col-reverse sm:flex-row-reverse">
                                <div className="sm:w-3/4 w-11/12 text-center sm:text-left h-full flex flex-col sm:p-1">
                                    <h1 className="text-2xl h-1/6 w-full mt-1 ml-2 mr-2"><TextEffect delay={1}>State Capitals Quiz</TextEffect></h1>
                                    <div className="flex flex-col justify-between  h-5/6 mb-4 sm:mr-2 sm:ml-2 w-full text-gray-400">
                                        <div><TextEffect per="line" delay={2}>Android app built, with a partner, using Java and SQLite for the database. A CSV file containing the states and 3 cities is read and stored in a table. The player is given a six question quiz, displaying their score at the end. Users are able to view their previous attempts.</TextEffect></div>
                                        <div className="text-blue-500 underline decoration-dotted"><TextEffect per="line" delay={2}>Click the card to see the repository</TextEffect></div>
                                    </div>
                                </div>                          
                                <Image 
                                    src="/statecapitalsquiz.png"
                                    width={300}
                                    height={300}
                                    alt="State Capitals Quiz IMG"
                                    className="sm:w-1/3 rounded-t-xl sm:rounded-l-xl sm:rounded-r-none sm:h-full w-full"
                                />
                            </CardContent>
                        </Card>
                    </Link>

                    <Link href="https://github.com/ashiqsyed/remindeer" target="_blank" className="rounded-xl sm:w-1/2  sm:h-64 sm:ml-8 sm:mr-8 sm:mt-8 sm:mb-4 mt-4 ml-4 mr-4 mb-10  transition-all duration-150 hover:shadow-[8px_8px_8px_rgba(55,65,81,0.7)] ">
                        <Card className="w-full sm:h-full">
                            <CardContent className="flex items-center h-full flex-col-reverse sm:flex-row">
                                <div className="sm:w-3/4 w-11/12 text-center sm:text-left h-full flex flex-col sm:p-1">
                                    <h1 className="text-2xl h-1/6 w-full mt-1 ml-2 mr-2"><TextEffect delay={1}>Remindeer</TextEffect></h1>
                                    <div className="flex flex-col justify-between  h-5/6 mb-4 sm:ml-2  w-full text-gray-400">
                                        <div><TextEffect per="line" delay={2}>Web app built, in a team of four, using Next.js, Express.js, and MongoDB. Users can create their own accounts and perform basic CRUD operations, keeping track of reminders. Authentication is handled using JWTs that are verified in the backend.</TextEffect></div>
                                        <div className="text-blue-500 underline decoration-dotted"><TextEffect per="line" delay={2}>Click the card to see the repository</TextEffect></div>
                                    </div>
                                </div>                          
                                <Image 
                                    src="/remindeer.png"
                                    width={300}
                                    height={300}
                                    alt="Remindeer IMG"
                                    className="sm:w-1/3 rounded-t-xl sm:rounded-r-xl sm:rounded-l-none sm:h-full w-full"
                                />
                            </CardContent>
                        </Card>
                    </Link>
                    
                    
                    
          </div>

    
    )
}