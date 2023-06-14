import "@/styles/globals.css"
import { Metadata } from "next"
import Link from "next/link"

import { siteConfig } from "@/config/site"
import { fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { SiteHeader } from "@/components/site-header"
import { TailwindIndicator } from "@/components/tailwind-indicator"
import { ThemeProvider } from "@/components/theme-provider"

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
}

export default function IndexPage() {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            fontSans.variable
          )}
        >
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <div className="relative flex min-h-screen flex-col">
              <SiteHeader />
              <div className="flex-1">
                <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
                  <div className="flex max-w-[980px] flex-col items-start gap-2">
                    <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
                      Beautifully designed components{" "}
                      <br className="hidden sm:inline" />
                      built with Radix UI and Tailwind CSS.
                    </h1>
                    <p className="max-w-[700px] text-lg text-muted-foreground">
                      Accessible and customizable components that you can copy
                      and paste into your apps. Free. Open Source. And Next.js
                      13 Ready.
                    </p>
                  </div>
                  <div className="flex gap-4">
                    <Link
                      href={siteConfig.links.docs}
                      target="_blank"
                      rel="noreferrer"
                      className={buttonVariants()}
                    >
                      Documentation
                    </Link>
                    <Link
                      target="_blank"
                      rel="noreferrer"
                      href={siteConfig.links.github}
                      className={buttonVariants({ variant: "outline" })}
                    >
                      GitHub
                    </Link>
                  </div>
                </section>
              </div>
            </div>
            <TailwindIndicator />
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}
