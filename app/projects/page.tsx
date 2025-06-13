import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
export default function Projects() {
    return (
        <div className="bg-gray-900 text-gray-100 flex items-center justify-evenly flex-col min-h-screen">
                    {/* project card */}
                    <Link href="https://github.com/ashiqsyed/Cost-Settler" target="_blank" className="sm:w-1/2 rounded-xl sm:h-64 sm:ml-8 sm:mr-8 sm:mt-8 sm:mb-4 mt-4 ml-4 mr-4 mb-10 transition-all duration-150 hover:shadow-[8px_8px_8px_rgba(255,255,255,0.4)]">
                        <Card className="w-full sm:h-full">
                            <CardContent className="flex items-center h-full flex-col-reverse sm:flex-row">
                                <div className="sm:w-3/4 w-11/12 text-center sm:text-left h-full flex flex-col sm:p-1">
                                    <h1 className="text-2xl h-1/6 w-full mt-1 ml-2 mr-2">Cost Settler</h1>
                                    <div className="flex flex-col justify-between  h-5/6 mb-4 sm:mr-2 sm:ml-2 w-full">
                                        <p>Android app built using Java and Google Firebase for the realtime database and user authentication. Users within a household have a shared shopping list and have their own individual shopping carts. They can make purchases, see their purchase history, and settle the cost with their roommates.</p>
                                        <p className="text-blue-500">Click the card to see the repository</p>
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

                    <Link href="https://github.com/ashiqsyed/state-capitals-quiz" target="_blank" className="rounded-xl sm:w-1/2  sm:h-64 sm:ml-8 sm:mr-8 sm:mt-8 sm:mb-4 mt-4 ml-4 mr-4 mb-10  transition-all  duration-150 hover:shadow-[8px_8px_8px_rgba(255,255,255,0.4)] ">
                        <Card className="w-full sm:h-full">
                            <CardContent className="flex items-center h-full flex-col-reverse sm:flex-row-reverse">
                                <div className="sm:w-3/4 w-11/12 text-center sm:text-left h-full flex flex-col sm:p-1">
                                    <h1 className="text-2xl h-1/6 w-full mt-1 ml-2 mr-2">State Capitals Quiz</h1>
                                    <div className="flex flex-col justify-between  h-5/6 mb-4 sm:mr-2 sm:ml-2 w-full">
                                        <p>Android app built, with a partner, using Java and SQLite for the database. A CSV file containing the states and 3 cities is read and stored in a table. The player is given a six question quiz, displaying their score at the end. Users are able to view their previous attempts.</p>
                                        <p className="text-blue-500">Click the card to see the repository</p>
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

                    <Link href="https://github.com/ashiqsyed/remindeer" target="_blank" className="rounded-xl sm:w-1/2  sm:h-64 sm:ml-8 sm:mr-8 sm:mt-8 sm:mb-4 mt-4 ml-4 mr-4 mb-10  transition-all duration-150 hover:shadow-[8px_8px_8px_rgba(255,255,255,0.4)] ">
                        <Card className="w-full sm:h-full">
                            <CardContent className="flex items-center h-full flex-col-reverse sm:flex-row">
                                <div className="sm:w-3/4 w-11/12 text-center sm:text-left h-full flex flex-col sm:p-1">
                                    <h1 className="text-2xl h-1/6 w-full mt-1 ml-2 mr-2">Remindeer</h1>
                                    <div className="flex flex-col justify-between  h-5/6 mb-4 sm:ml-2  w-full">
                                        <p>Web app built, in a team of four, using Next.js, Express.js, and MongoDB. Users can create their own accounts and perform basic CRUD operations, keeping track of reminders. Authentication is handled using JWTs that are verified in the backend.</p>
                                        <p className="text-blue-500">Click the card to see the repository</p>
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