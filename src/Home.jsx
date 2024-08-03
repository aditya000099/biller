import React from "react";
import { DataTable } from "./components/DataTable";
import { DownloadChart } from "./components/Downloads";
import { NewBill } from "./components/Newbill";
import { ThemeProvider } from "./components/theme-provider";
import NavBar from "./components/NavBar";
import { ChartTwo } from "./components/charttwo";

const HomePage = () => {
    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <div className="flex flex-col items-center justify-center px-12  text-slate-100">
                <NavBar />
            </div>
            {/* <div className="flex h-svh flex-col items-center justify-center space-y-4  text-slate-100"> */}
            <div className="flex flex-col p-12">
                <div className="flex flex-row p-12">
                    <div className="w-1/2">
                        <DownloadChart />
                    </div>
                    <div className="ml-40 flex justify-center">
                        {/* <NewBill />  */}
                        <ChartTwo />
                    </div>
                </div>
                {/* <div className="flex flex-col items-center justify-center space-y-4"> */}
                <DataTable />
                {/* </div> */}
            </div>
        </ThemeProvider>
    );
};

export default HomePage;
