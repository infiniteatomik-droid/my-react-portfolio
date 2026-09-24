interface RouteParams {
    projectId: string;
}
interface UserLayout {
    children: React.ReactNode;
    params: Promise<RouteParams>
}
export default async function Layout({children, params}: UserLayout) {
    const {projectId} = await params
    return(
        <div>
            <h1>Управление проектом: {projectId}</h1>
        {children}
        </div>
    )
}