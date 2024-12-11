'use client'

import { Button } from '@/components/ui/button'
import ThemeDemo from './_components/ThemeDemo'
import { Switch } from '@/components/ui/switch'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Label } from '@/components/ui/label'
import useSettings from './_hooks/useSettings'

export default function Settings() {
  const { appTheme, setAppTheme } = useSettings()

  return (
    <div className="container pb-4">
      <div className="my-8 flex items-center justify-between md:mt-0">
        <h1 className="text-3xl font-bold">Settings</h1>
        <Button disabled>Save Chnages</Button>
      </div>
      <div className="mb-8 flex flex-col gap-4 lg:flex-row">
        <div className="flex-1 shrink-0">
          <h1 className="mb-1 font-bold">Notifications</h1>
          <p className="text-xs text-muted-foreground">Manage how you receive your notifications</p>
        </div>
        <div className="flex flex-[2] flex-col gap-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="mb-1">Email</h1>
              <p className="text-xs text-muted-foreground">Receive notifications via email</p>
            </div>
            <Switch />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="mb-1">Web Application</h1>
              <p className="text-xs text-muted-foreground">Receive notifications via web app</p>
            </div>
            <Switch />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 lg:flex-row">
        <div className="flex-1 shrink-0">
          <h1 className="mb-1 font-bold">Appearance</h1>
          <p className="text-xs text-muted-foreground">Manage how your app looks</p>
        </div>
        <RadioGroup
          className="flex flex-[2] flex-wrap justify-center gap-4 md:justify-start"
          value={appTheme}
          onValueChange={setAppTheme}
        >
          <Label htmlFor="theme-light">
            <ThemeDemo />
            <div className="mt-2 flex items-center justify-center gap-2 md:justify-start">
              <RadioGroupItem value="light" id="theme-light" />
              <h1>Light</h1>
            </div>
          </Label>
          <Label htmlFor="theme-dark">
            <ThemeDemo theme="dark" />
            <div className="mt-2 flex items-center justify-center gap-2 md:justify-start">
              <RadioGroupItem value="dark" id="theme-dark" />
              <h1>Dark</h1>
            </div>
          </Label>
          <Label htmlFor="theme-system">
            <div className="relative h-[150px] w-[250px] overflow-hidden rounded-xl border">
              <div className="absolute left-1/2 top-0 h-full w-full bg-black">
                <ThemeDemo theme="dark" />
              </div>
              <div className="absolute left-0 top-0 h-full w-1/2 overflow-hidden">
                <ThemeDemo theme="light" />
              </div>
            </div>
            <div className="mt-2 flex items-center justify-center gap-2 md:justify-start">
              <RadioGroupItem value="system" id="theme-system" />
              <h1>Auto</h1>
            </div>
          </Label>
        </RadioGroup>
      </div>
    </div>
  )
}
