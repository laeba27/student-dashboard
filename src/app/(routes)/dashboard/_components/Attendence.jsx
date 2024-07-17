"use client";
import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  LabelList,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../../../components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "../../../../components/ui/chart";


const chartData = [
  { month: "Computer", desktop: 79, mobile: "32/40" },
  { month: "Mathematics", desktop: 90, mobile: "31/34"},
  { month: "Biology", desktop: 73, mobile: "12/28" },
  { month: "Physics", desktop: 45, mobile: "15/28" },
  { month: "Chemistry", desktop: 96, mobile: "20/24" },
  { month: "English", desktop: 99, mobile: "30/35" },
];

const chartConfig = {
  desktop: {
    label: "Attendance",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Class attended",
    color: "hsl(var(--chart-2))",
  },
  label: {
    color: "hsl(var(--background))",
  },
}; // Keep this as is, no semicolon before it.

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip  border-l-8 border-l-amber-500 bg-white p-2 rounded shadow-lg">
        <p className="label font-bold">{`${payload[0].payload.month}`}</p>
        <p className="intro">{`Class attended: ${payload[0].payload.mobile}`}</p>
      </div>
    );
  }

  return null;
};

const Attendence = () => {
  return (
    
     
      <div className="bg-sky-100  h-[400px] rounded-lg  w-full ">
      <Card className="h-full flex flex-col">
          <CardHeader className="flex-shrink-0">
            <CardTitle>Attendance</CardTitle>
            <CardDescription>January - June 2024</CardDescription>
          </CardHeader>
          <CardContent className=" overflow-hidden">
            <ChartContainer config={chartConfig}>
            
              <BarChart
                accessibilityLayer
                data={chartData}
                layout="vertical"
                margin={{
                  right: 20,
                }}
              >
                <CartesianGrid horizontal={false} />
                <YAxis
                  dataKey="month"
                  type="category"
                  tickLine={false}
                  tickMargin={10}
                  axisLine={false}
                  tickFormatter={(value) => value.slice(0, 3)}
                  hide
                />
                <XAxis dataKey="desktop" type="number" hide />
                <Tooltip content={<CustomTooltip />} />
                <Bar
                  dataKey="desktop"
                  layout="vertical"
                  fill="var(--color-desktop)"
                  radius={5}
                >
                  <LabelList
                    dataKey="month"
                    position="insideLeft"
                    offset={8}
                    className="fill-[--color-label]"
                    fontSize={12}
                  />
                  <LabelList
                    dataKey="desktop"
                    position="right"
                    offset={8}
                    className="fill-foreground"
                    fontSize={12}
                  />
                </Bar>
              </BarChart>
           
            </ChartContainer>
          </CardContent>
          <CardFooter className="flex-col items-start gap-2 text-sm">
            <div className="leading-none text-muted-foreground">
              Attendance Should be above 75%
            </div>
          </CardFooter>
        </Card>
      </div>
      
   
  );
};

export default Attendence;

