const WaveFooter = () =>{
    return(
        <>
        <main>

<div class="header">
  
  <h1>SVG waves animation</h1>
</div>

<div>
  <svg class="waves" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28" preserveAspectRatio="none">
    <defs>
      <linearGradient id="wave-gradient" gradientTransform="rotate(90)">
        <stop offset="5%" stop-color="#4286f4" />
        <stop offset="35%" stop-color="#373b44" />
      </linearGradient>
      <path id="a" d="M-160 44c30 0 58-18 88-18s58 18 88 18 58-18 88-18 58 18 88 18v44h-352z" />
    </defs>
    <g class="wave-paths">
      <use xlink:href="#a" x="0" />
      <use xlink:href="#a" x="50" y="3" />
      <use xlink:href="#a" x="100" y="5" />
      <use xlink:href="#a" x="150" y="7" />
    </g>
  </svg>
</div>

</main>

        </>
    )
}