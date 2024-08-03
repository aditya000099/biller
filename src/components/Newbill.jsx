import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { ThemeProvider } from "./theme-provider"

export function NewBill() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <div className="flex flex-col items-center justify-center px-12 mt-24  text-slate-100">
    <Card className="w-[350px] rounded-xl">
      <CardHeader>
        <CardTitle>Create new Order</CardTitle>
        <CardDescription></CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Customer Name" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Email</Label>
              <Input id="name" placeholder="Customer Email" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Product</Label>
              <Input id="name" placeholder="Product Name" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Price</Label>
              <Input id="name" placeholder="Product Price" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="framework">Status</Label>
              <Select>
                <SelectTrigger id="framework">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="next">Paid</SelectItem>
                  <SelectItem value="sveltekit">Unpaid</SelectItem>
                  <SelectItem value="astro">EMI</SelectItem>
                  {/* <SelectItem value="nuxt">Nuxt.js</SelectItem> */}
                </SelectContent>
              </Select>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" className="rounded-xl">Cancel</Button>
        <Button className="rounded-xl">Create Order</Button>
      </CardFooter>
    </Card>
    </div>
    </ThemeProvider>
  )
}
