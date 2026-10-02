import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

function App(): React.JSX.Element {
  return (
    <main className="flex min-h-screen items-center justify-center p-8">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Electron React Starter</CardTitle>
          <CardDescription>Electron · React · TypeScript · shadcn/ui</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-sm text-muted-foreground">Your desktop starter is ready.</p>
          <Button type="button" variant="secondary" disabled>
            shadcn/ui is configured
          </Button>
          <p className="text-xs text-muted-foreground">
            Electron {window.app.versions.electron} · Chromium {window.app.versions.chrome} · Node{' '}
            {window.app.versions.node}
          </p>
        </CardContent>
      </Card>
    </main>
  )
}

export default App
