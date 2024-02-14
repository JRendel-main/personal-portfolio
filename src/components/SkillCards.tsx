import React from 'react'
import {
  Card,
  CardContent,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

interface SkillCardsProps {
  skillName: string;
  skillImage: string;
}

const SkillCards: React.FC<SkillCardsProps> = ({ skillName, skillImage }) => {
  return (
    <div>
      <Card className='hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110 w-100 h-100 animated-border border-2 border-gray-200 rounded-lg dark:bg-zinc-800 shadow-md p-2
      '>
        <CardContent>
          <div className="flex flex-col justify-center items-center">
            <div className="">
              <Image src={`/icons/${skillImage}.svg`} width={50} height={50} alt="icon"/>
            </div>
            <CardTitle
            className='text-center text-sm font-bold dark:text-gray-200'
            >{skillName}</CardTitle>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default SkillCards
