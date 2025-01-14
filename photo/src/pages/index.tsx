import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import { Sidebar } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button"


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
      <main 
        className={"flex flex-col gap-8 row-start-2 items-center sm:items-start"}
      >
        <h1>Hello</h1>
        <Button>Click Me</Button>
         
        
      </main> 
  );
}




