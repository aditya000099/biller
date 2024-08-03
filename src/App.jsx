import { DataTable } from "./components/DataTable";
import { DownloadChart } from "./components/Downloads";
import { ThemeProvider } from "./components/theme-provider";

const App = () => {
    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            {/* <div className="flex h-svh flex-col items-center justify-center space-y-4  text-slate-100"> */}
            <div className="flex flex-col p-12">
                <div className="flex flex-row p-12">
                    <div className="w-1/2">
                        <DownloadChart />
                    </div>
                </div>
                {/* <div className="flex flex-col items-center justify-center space-y-4"> */}
                <DataTable />
                {/* </div> */}
            </div>
        </ThemeProvider>
    );
};

export default App;
