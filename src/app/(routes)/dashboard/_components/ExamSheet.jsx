

"use client"

import { TrendingUp } from "lucide-react"
import { CartesianGrid, LabelList, Line, LineChart, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../../../components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "../../../../components/ui/chart"

const chartData = [
    { month: "MST 1", vac: 8, math: 3.6, science: 9.5, history: 6.8 },
    { month: "MST 2", vac: 9.3, math: 4.3, science: 7.8, history: 8.0 },
    { month: "MST 3", vac: 5.3, math: 9.3, science: 6.5, history: 6.2 },
    { month: "MST 4", vac: 9.3, math: 5.6, science: 3.0, history: 3.9 },
   
  ];
  
  

  const chartConfig = {
    vac: {
      label: "vac",
      color: "#4B0082", // Indigo
    },
    math: {
      label: "math",
      color: "#FF4500", // OrangeRed
    },
    science: {
      label: "science",
      color: "#32CD32", // LimeGreen
    },
    history: {
      label: "history",
      color: "#1E90FF", // DodgerBlue
    },
  };
  
  

export function SemesterResults() {
  return (
    <Card className="flex-grow h-full">
      <CardHeader>
      <CardTitle className="text-2xl font-bold text-black">Academic Performance</CardTitle>
               <CardDescription className="text-gray-600">Semester-wise GPA and Attendance</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              top: 20,
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
            
              tickFormatter={(value) => value.slice(1, 7)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <Line
              dataKey="vac"
              type="natural"
              stroke="var(--color-vac)"
              strokeWidth={2}
              dot={{
                fill: "var(--color-vac)",
              }}
              activeDot={{
                r: 6,
              }}
            >
              
              <LabelList
                position="top"
                offset={12}
                className="fill-foreground"
                fontSize={12}
              />
            </Line>
            <Line
              dataKey="math"
              type="natural"
              stroke="var(--color-math)"
              strokeWidth={2}
              dot={{
                fill: "var(--color-math)",
              }}
              activeDot={{
                r: 6,
              }}
            >
              
              <LabelList
                position="top"
                offset={12}
                className="fill-foreground"
                fontSize={12}
              />
            </Line>
            <Line
              dataKey="history"
              type="natural"
              stroke="var(--color-history)"
              strokeWidth={2}
              dot={{
                fill: "var(--color-history)",
              }}
              activeDot={{
                r: 6,
              }}
            >
              
              <LabelList
                position="top"
                offset={12}
                className="fill-foreground"
                fontSize={12}
              />
            </Line>
            <Line
              dataKey="science"
              type="natural"
              stroke="var(--color-science)"
              strokeWidth={2}
              dot={{
                fill: "var(--color-science)",
              }}
              activeDot={{
                r: 6,
              }}
            >
              
              <LabelList
                position="top"
                offset={12}
                className="fill-foreground"
                fontSize={12}
              />
            </Line>
          </LineChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Your performance has been decreased by 5.3%<TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
         This is the analysis of your mid term records of this academic year
        </div>
      </CardFooter>
    </Card>
  )
}
