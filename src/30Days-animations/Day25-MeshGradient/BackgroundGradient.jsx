import "./BackgroundGradient.css"
const BackgroundGradient = () => {
  return (
    <div
      className="min-h-screen w-full flex items-center justify-center"
      style={{
        backgroundColor: '#fdf4ff',
        backgroundImage: `
      radial-gradient(ellipse at 20% 30%, #C4B5FDaa 0%, transparent 55%),
      radial-gradient(ellipse at 80% 20%, #F9A8D4aa 0%, transparent 55%),
      radial-gradient(ellipse at 70% 80%, #BAE6FD88 0%, transparent 55%),
      radial-gradient(ellipse at 30% 75%, #A5F3D0aa 0%, transparent 55%)
    `,
        animation: 'meshShift 8s ease infinite alternate',
      }}
    /> )
}

export default BackgroundGradient

// linear - gradient(135deg, #FCA5A5, #FDBA74, #FDE68A, #F9A8D4)