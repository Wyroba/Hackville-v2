import Image from "next/image";
import { Inter } from "next/font/google";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Avatar } from "@/components/ui/avatar";
import { AvatarFallback } from "@/components/ui/avatar";
import { AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Camera } from "lucide-react";
import { MapPin } from "lucide-react";
import { MessageSquare } from "lucide-react";
import Tutorial from "@/components/tutorial";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="w-screen h-screen">
      <div className="flex flex-col h-screen">
        <header className="flex justify-between items-center px-4 py-3 bg-white dark:bg-black shadow-md">
          <h1 className="text-xl font-bold">hoomie.club</h1>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="Profile" />
            <AvatarFallback className="dark:text-white">P</AvatarFallback>
          </Avatar>
        </header>
        <main className="flex-grow flex items-center justify-center px-4 py-2">
          <div className="w-full h-full mt-2">
            <div className="aspect-w-16 aspect-h-9 bg-gray-300 dark:bg-black w-full h-full rounded-xl overflow-hidden shadow-lg"></div>
          </div>
        </main>
        <footer className="flex justify-around items-center p-4 bg-white dark:bg-black">
          <Button
            variant="outline"
            className="rounded-full text-primary bg-primary-100 dark:bg-primary-800 dark:text-white"
          >
            <MessageSquare className="h-6 w-6" />
          </Button>
          <Button
            variant="outline"
            className="rounded-full text-primary bg-primary-100 dark:bg-primary-800 dark:text-white"
          >
            <Camera className="h-6 w-6" />
          </Button>
          <Button
            variant="outline"
            className="rounded-full text-primary bg-primary-100 dark:bg-primary-800 dark:text-white"
          >
            <MapPin className="h-6 w-6" />
          </Button>
        </footer>
      </div>
    </div>
  );
}
