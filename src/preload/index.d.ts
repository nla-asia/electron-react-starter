export interface AppAPI {
  readonly versions: {
    readonly electron: string
    readonly chrome: string
    readonly node: string
  }
}

declare global {
  interface Window {
    app: AppAPI
  }
}
