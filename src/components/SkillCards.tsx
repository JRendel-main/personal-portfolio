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
      <Card className='hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110 w[200px] h-[200px] animated-border border-2 border-gray-200 rounded-lg dark:bg-zinc-800 shadow-md p-5
      '>
        <CardContent>
          <div className="flex flex-col justify-center items-center">
            <div className="mb-5">
              <Image src={`/icons/${skillImage}.svg`} width={100} height={100} alt="icon"/>
            </div>
            <CardTitle>{skillName}</CardTitle>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default SkillCards
