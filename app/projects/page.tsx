import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
export default function Projects() {
    return (
        <div className="bg-gray-900 text-gray-100 flex items-center justify-center flex-col">
                    {/* project card */}
                    <Link href="https://github.com/ashiqsyed/Cost-Settler" target="_blank" className="w-1/2 h-64 ml-8 mr-8 mt-8 mb-4 transition-all  duration-300 ease-in-out hover:w-2/3 hover:h-80 ">
                        <Card className="w-full h-full">
                            <CardContent className="flex items-center h-full">
                                <div className="w-3/4 rounded-l-xl h-full flex flex-col">
                                    <h1 className="text-2xl h-1/6 w-full mt-4 ml-2 mr-2">Cost Settler</h1>
                                    <div className="flex flex-col justify-between  h-5/6 mb-4 mr-2 ml-2 w-full">
                                        <p>Android app built using Java and Google Firebase for the realtime database and user authentication. Users within a household have a shared shopping list and have their own individual shopping carts. They can make purchases, see their purchase history, and settle the cost with their roommates.</p>
                                        <p>Click the card to see the repository</p>
                                    </div>
                                </div>                          
                                <Image 
                                    src="/costsettler.png"
                                    width={300}
                                    height={300}
                                    alt="Cost Settler PNG"
                                    className="w-1/3 rounded-r-xl h-full"
                                />
                            </CardContent>
                        </Card>
                    </Link>
                    
                    <Link href="https://github.com/ashiqsyed/state-capitals-quiz" className="w-1/2 h-64 ml-8 mr-8 mt-4 mb-4 transition-all  duration-300 ease-in-out hover:w-2/3 hover:h-80" target="_blank">
                        <Card className="w-full h-full">
                            <CardContent className="flex items-center h-full">
                                <Image 
                                    src="/statecapitalsquiz.png"
                                    width={300}
                                    height={300}
                                    alt="State Capitals Quiz"
                                    className="w-1/3 rounded-l-xl h-full"
                                />
                                <div className="w-3/4 rounded-l-xl h-full flex flex-col">
                                    <h1 className="text-2xl h-1/6 w-full mt-4 ml-2 mr-2">State Capitals Quiz</h1>
                                    <div className="flex flex-col justify-between  h-5/6 mb-4 mr-2 ml-2 w-full">
                                        <p>Android app built using Java and SQLite for the database. A CSV file containing the states and 3 cities is read and stored in a table. The player is given a six question quiz, displaying their score at the end. Users are able to view their previous attempts.</p>
                                        <p>Click the card to see the repository</p>
                                    </div>
                                </div>
                            </CardContent>                        
                        </Card>
                    </Link>
                    
                    <Link href="https://github.com/ashiqsyed/remindeer" className="w-1/2 h-64 ml-8 mr-8 mt-4 mb-8 transition-all  duration-300 ease-in-out hover:w-2/3 hover:h-80" target="_blank">
                        <Card className="w-full h-full">
                            <CardContent className="flex items-center h-full">                            
                                <div className="w-3/4 rounded-l-xl h-full flex flex-col">
                                    <h1 className="text-2xl h-1/6 w-full mt-4 ml-2 mr-2">Remindeer</h1>
                                    <div className="flex flex-col justify-between  h-5/6 mb-4 mr-2 ml-2 w-full">
                                        <p>Web app built using Next.js, Express.js, and MongoDB. Users can create their own accounts and perform basic CRUD operations, keeping track of reminders. Authentication is handled using JWTs and verifying them in the backend.</p>
                                        <p>Click the card to see the repository</p>
                                    </div>
                                </div>
                                <Image 
                                    src="/remindeer.png"
                                    width={300}
                                    height={300}
                                    alt="Remindeer"
                                    className="w-1/3 rounded-r-xl h-full"
                                />
                            </CardContent>
                        </Card>
                    </Link>
                    
          </div>
    )
}