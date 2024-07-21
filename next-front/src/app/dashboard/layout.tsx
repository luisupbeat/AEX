export default function DashboardLayout({
    children,
}:{
    children: React.ReactNode
}) {
    return (
        <section>
            <div className="bg-info">
                layout dashboard
            </div>
            {/* <nav>todo lo que hay del nav</nav> */}
            {children}
        </section>
    )
}