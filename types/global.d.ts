// Type declarations for CSS file imports
declare module '*.css' {
  const content: Record<string, string>
  export default content
}
