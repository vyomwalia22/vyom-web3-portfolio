/** Fixed, decorative page background: masked grid, faint noise, one slow-drifting glow. */
export function Backdrop() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="bg-grid absolute inset-0" />
      <div
        className="glow-drift absolute -top-[30vh] left-1/2 h-[70vh] w-[90vw] max-w-[1100px] -translate-x-1/2 rounded-full opacity-60 blur-3xl"
        style={{
          background:
            'radial-gradient(closest-side, rgb(143 123 255 / 0.16), rgb(84 210 230 / 0.05) 55%, transparent 100%)',
        }}
      />
      <div className="bg-noise absolute inset-0" />
    </div>
  )
}
