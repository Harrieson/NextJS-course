export default function AboutLayout({
    children,
}:{
    children: React.ReactNode
}){
    return (
        <>
        <nav>The about NavBar</nav>
        <main>
            {children}
        </main>
        </>
    )
}