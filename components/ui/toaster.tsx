import {
  Toaster as Sonner
} from "sonner"

export function Toaster() {
  return (
    <Sonner
      position="top-center"
      toastOptions={{
        classNames: {
          toast: "bg-background border",
          title: "text-foreground",
          description: "text-muted-foreground",
        },
      }}
    />
  )
}
