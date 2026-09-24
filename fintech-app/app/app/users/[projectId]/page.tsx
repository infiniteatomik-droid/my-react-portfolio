/*import {ToggleFunction} from './BalanceToggler';
import  Setting  from './settings/setting';
interface RouteParams {
    projectId: string;
}
interface PageProps {
    params: Promise<RouteParams>;
}
interface Project {
  id: string;
  name: string;
  description: string;
  budget: number;
}

export default async function UserPage({params}: PageProps) {
    const {projectId} = await params
    const api = `https://mockprojects.com[projectId]`;
    //const response = await fetch(api);
    const data: Project = {
  id: '123',
  name: 'Финансовый Дашборд',
  description: 'CRM-система нового поколения',
  budget: 80000
};
return(
    <div>
        <h1>Главная страница проекта: {projectId}</h1>
        <div>Имя проекта: {data.name}  Номер проекта: {data.id}
            <ToggleFunction balance={data.budget}/>
            <Setting/>
        </div>
    </div>
)
}*/
import Image from "next/image";
interface User {
    name: string;
    email: string;
    id: number;
    username: string
}
export default async function App() {
    try{
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    if(!response.ok) {
        throw new Error('Ошибка загрузки данных');
    }
    const data: User[] = await response.json()
    return(
        <div>
            {data.map((user) => (
                <li key={user.id}>
                    {user.name}
                </li>
            ))}
            <Image
        src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500" 
        alt="Avatar image" 
        width={200} 
        height={200} />
        </div>
    )
} catch(error){
    console.error(error)
    return(
        <div>
            Произошла ошибка при загрузке пользователей
        </div>
    )
}
}