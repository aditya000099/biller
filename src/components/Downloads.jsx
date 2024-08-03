import * as React from "react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart";
const chartData = [
    { date: "2024-04-01", desktop: 222, revenue: 150 },
    { date: "2024-04-02", desktop: 97, revenue: 180 },
    { date: "2024-04-03", desktop: 167, revenue: 120 },
    { date: "2024-04-04", desktop: 242, revenue: 260 },
    { date: "2024-04-05", desktop: 373, revenue: 290 },
    { date: "2024-04-06", desktop: 301, revenue: 340 },
    { date: "2024-04-07", desktop: 245, revenue: 180 },
    { date: "2024-04-08", desktop: 409, revenue: 320 },
    { date: "2024-04-09", desktop: 59, revenue: 110 },
    { date: "2024-04-10", desktop: 261, revenue: 190 },
    { date: "2024-04-11", desktop: 327, revenue: 350 },
    { date: "2024-04-12", desktop: 292, revenue: 210 },
    { date: "2024-04-13", desktop: 342, revenue: 380 },
    { date: "2024-04-14", desktop: 137, revenue: 220 },
    { date: "2024-04-15", desktop: 120, revenue: 170 },
    { date: "2024-04-16", desktop: 138, revenue: 190 },
    { date: "2024-04-17", desktop: 446, revenue: 360 },
    { date: "2024-04-18", desktop: 364, revenue: 410 },
    { date: "2024-04-19", desktop: 243, revenue: 180 },
    { date: "2024-04-20", desktop: 89, revenue: 150 },
    { date: "2024-04-21", desktop: 137, revenue: 200 },
    { date: "2024-04-22", desktop: 224, revenue: 170 },
    { date: "2024-04-23", desktop: 138, revenue: 230 },
    { date: "2024-04-24", desktop: 387, revenue: 290 },
    { date: "2024-04-25", desktop: 215, revenue: 250 },
    { date: "2024-04-26", desktop: 75, revenue: 130 },
    { date: "2024-04-27", desktop: 383, revenue: 420 },
    { date: "2024-04-28", desktop: 122, revenue: 180 },
    { date: "2024-04-29", desktop: 315, revenue: 240 },
    { date: "2024-04-30", desktop: 454, revenue: 380 },
    { date: "2024-05-01", desktop: 165, revenue: 220 },
    { date: "2024-05-02", desktop: 293, revenue: 310 },
    { date: "2024-05-03", desktop: 247, revenue: 190 },
    { date: "2024-05-04", desktop: 385, revenue: 420 },
    { date: "2024-05-05", desktop: 481, revenue: 390 },
    { date: "2024-05-06", desktop: 498, revenue: 520 },
    { date: "2024-05-07", desktop: 388, revenue: 300 },
    { date: "2024-05-08", desktop: 149, revenue: 210 },
    { date: "2024-05-09", desktop: 227, revenue: 180 },
    { date: "2024-05-10", desktop: 293, revenue: 330 },
    { date: "2024-05-11", desktop: 335, revenue: 270 },
    { date: "2024-05-12", desktop: 197, revenue: 240 },
    { date: "2024-05-13", desktop: 197, revenue: 160 },
    { date: "2024-05-14", desktop: 448, revenue: 490 },
    { date: "2024-05-15", desktop: 473, revenue: 380 },
    { date: "2024-05-16", desktop: 338, revenue: 400 },
    { date: "2024-05-17", desktop: 499, revenue: 420 },
    { date: "2024-05-18", desktop: 315, revenue: 350 },
    { date: "2024-05-19", desktop: 235, revenue: 180 },
    { date: "2024-05-20", desktop: 177, revenue: 230 },
    { date: "2024-05-21", desktop: 82, revenue: 140 },
    { date: "2024-05-22", desktop: 81, revenue: 120 },
    { date: "2024-05-23", desktop: 252, revenue: 290 },
    { date: "2024-05-24", desktop: 294, revenue: 220 },
    { date: "2024-05-25", desktop: 201, revenue: 250 },
    { date: "2024-05-26", desktop: 213, revenue: 170 },
    { date: "2024-05-27", desktop: 420, revenue: 460 },
    { date: "2024-05-28", desktop: 233, revenue: 190 },
    { date: "2024-05-29", desktop: 78, revenue: 130 },
    { date: "2024-05-30", desktop: 340, revenue: 280 },
    { date: "2024-05-31", desktop: 178, revenue: 230 },
    { date: "2024-06-01", desktop: 178, revenue: 200 },
    { date: "2024-06-02", desktop: 470, revenue: 410 },
    { date: "2024-06-03", desktop: 103, revenue: 160 },
    { date: "2024-06-04", desktop: 439, revenue: 380 },
    { date: "2024-06-05", desktop: 88, revenue: 140 },
    { date: "2024-06-06", desktop: 294, revenue: 250 },
    { date: "2024-06-07", desktop: 323, revenue: 370 },
    { date: "2024-06-08", desktop: 385, revenue: 320 },
    { date: "2024-06-09", desktop: 438, revenue: 480 },
    { date: "2024-06-10", desktop: 155, revenue: 200 },
    { date: "2024-06-11", desktop: 92, revenue: 150 },
    { date: "2024-06-12", desktop: 492, revenue: 420 },
    { date: "2024-06-13", desktop: 81, revenue: 130 },
    { date: "2024-06-14", desktop: 426, revenue: 380 },
    { date: "2024-06-15", desktop: 307, revenue: 350 },
    { date: "2024-06-16", desktop: 371, revenue: 310 },
    { date: "2024-06-17", desktop: 475, revenue: 520 },
    { date: "2024-06-18", desktop: 107, revenue: 170 },
    { date: "2024-06-19", desktop: 341, revenue: 290 },
    { date: "2024-06-20", desktop: 408, revenue: 450 },
    { date: "2024-06-21", desktop: 169, revenue: 210 },
    { date: "2024-06-22", desktop: 317, revenue: 270 },
    { date: "2024-06-23", desktop: 480, revenue: 530 },
    { date: "2024-06-24", desktop: 132, revenue: 180 },
    { date: "2024-06-25", desktop: 141, revenue: 190 },
    { date: "2024-06-26", desktop: 434, revenue: 380 },
    { date: "2024-06-27", desktop: 448, revenue: 490 },
    { date: "2024-06-28", desktop: 149, revenue: 200 },
    { date: "2024-06-29", desktop: 103, revenue: 160 },
    { date: "2024-06-30", desktop: 446, revenue: 400 },
];

const chartConfig = {
    views: {
        label: "Page Views",
    },
    desktop: {
        label: "Total Orders",
        color: "hsl(var(--chart-1))",
    },
    // revenue: {
    //     label: "Revenue",
    //     color: "hsl(var(--chart-2))",
    // },
};

export function DownloadChart() {
    const [activeChart, setActiveChart] = React.useState("desktop");

    const total = React.useMemo(
        () => ({
            desktop: chartData.reduce((acc, curr) => acc + curr.desktop, 0),
            // revenue: chartData.reduce((acc, curr) => acc + curr.revenue, 0),
        }),
        []
    );

    return (
        <Card className="rounded-xl">
            <CardHeader className="flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row">
                <div className="flex flex-1 flex-col justify-center gap-1 px-6 py-5 sm:py-6">
                    <CardTitle>Orders Volume</CardTitle>
                    <CardDescription>
                        Showing order volume for the last 3 months
                    </CardDescription>
                </div>
                <div className="flex">
                    {["desktop"].map((key) => {
                        const chart = key;
                        return (
                            <button
                                key={chart}
                                data-active={activeChart === chart}
                                className="relative z-30 flex flex-1 flex-col justify-center gap-1 border-t px-6 py-4 text-left even:border-l data-[active=true]:bg-muted/50 sm:border-l sm:border-t-0 sm:px-8 sm:py-6"
                                onClick={() => setActiveChart(chart)}
                            >
                                <span className="text-xs text-muted-foreground">
                                    {chartConfig[chart].label}
                                </span>
                                <span className="text-lg font-bold leading-none sm:text-3xl">
                                    {total[key].toLocaleString()}
                                </span>
                            </button>
                        );
                    })}
                </div>
            </CardHeader>
            <CardContent className="px-2 sm:p-6">
                <ChartContainer
                    config={chartConfig}
                    className="aspect-auto h-[250px] w-full"
                >
                    <BarChart
                        accessibilityLayer
                        data={chartData}
                        margin={{
                            left: 12,
                            right: 12,
                        }}
                    >
                        <CartesianGrid vertical={false} />
                        <XAxis
                            dataKey="date"
                            tickLine={false}
                            axisLine={false}
                            tickMargin={8}
                            minTickGap={32}
                            tickFormatter={(value) => {
                                const date = new Date(value);
                                return date.toLocaleDateString("en-US", {
                                    month: "short",
                                    day: "numeric",
                                });
                            }}
                        />
                        <ChartTooltip
                            content={
                                <ChartTooltipContent
                                    className="w-[150px]"
                                    nameKey="views"
                                    labelFormatter={(value) => {
                                        return new Date(
                                            value
                                        ).toLocaleDateString("en-US", {
                                            month: "short",
                                            day: "numeric",
                                            year: "numeric",
                                        });
                                    }}
                                />
                            }
                        />
                        <Bar
                            dataKey={activeChart}
                            fill={`var(--color-${activeChart})`}
                        />
                    </BarChart>
                </ChartContainer>
            </CardContent>
        </Card>
    );
}
