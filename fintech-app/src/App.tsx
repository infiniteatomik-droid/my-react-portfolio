import { useEffect, useState, type ContextType } from "react";
interface TransactionItemProps {
    id: string | number;
    amount: number;
    type: 'income' | 'expense';
}
function useIntervalLog(message: string = 'One minute left', delay: number) {
    useEffect(() => {
    const intervarlId = setInterval(() => {
        console.log(message, delay);
    }, delay);
    return() => {
        clearInterval(intervarlId);
    };
}, [message, delay]);
}
function getFilteredTransactions(transactions:TransactionItemProps[], filter: 'income' | 'expense' | 'all', ) {
    if(filter === 'all')
        return transactions;
    return transactions.filter((item) => {
            return item.type === filter;
        });
}
const [activeTransaction, setActiveTransaction] = useState<TransactionItemProps | null>(null);
const [filter, setFilter] = useState<'income' | 'expense' | 'all'>('all');

const handleAmountInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const num = Number(e.target.value);
    if(isNaN(num)){
        console.log(0);
    } else {
    console.log(num);
    }
};
const handleSelectTransaction = (e: React.MouseEvent<HTMLButtonElement>, id: string | number) => {
    
}

interface CryptoAssetProps {
    id: string | number;
    name: string;
    price: number;
    status: 'profit' | 'loss' | 'stable';
}
function useAssetTracker(assetName: string) {
    useEffect(() => {
        const interval = setInterval(() => {
            console.log(`Обновляем курс для актива: ${assetName}`)
        }, 10000);
        return () => {
            clearInterval(interval);
        }
    }, [assetName])
}

function getProfitableAssets(active: CryptoAssetProps[]){
    active.filter((i) => {
        return i.status === 'profit';
    })
}


interface TableProps<T> {
    items: T[];
    renderRow: (i: T) => React.ReactNode
}
export function Table<T,>({items, renderRow}: TableProps<T>) {
    return(
    <table>
        <tbody>
            {items.map((i) => renderRow(i))}
        </tbody>
    </table>
    )}

interface SelectProps<T> {
    items: T[];
    onSelect: (i: T) => void;
}

export const Select = <T extends unknown>({ items, onSelect }: SelectProps<T>) => {
  return (
    <select
    onChange={(e)=>{
        const selectIndex = Number(e.target.value);
        const selectItem = items[selectIndex];
        onSelect(selectItem);
    }}>
        {items.map((i, index)=> (
        <option key={index} value={index}>
            {String(i)}
        </option>
        ))}
    </select>
  );
};


interface Product {
    id: string | number;
    title: string;
    description: string;
    price: number;
    categoty: string;
    createdAt: Date;
}
type ProductInput = Partial<Omit< Product, 'id' | 'createdAt'>>

interface Article {
  id: string;
  title: string;
  description: string;
  content: string;
  authorId: string;
  viewsCount: number;
  tags: string[];
}
type ArticlePreview = Pick< Article, 'title' | 'description'>
import axios from 'axios';
import { data } from "react-router-dom";
const fetchUserProfile = async (): Promise<Product[]> =>{
    const response = await axios.get<Product[]>('/api/products')
    const res = response.data
    return res
}

interface ApiResponse<T> {
    status: string;
    data: T;
}
const userResponse: ApiResponse<{name: string; age: number}> = {
    status: 'succes',
    data:{
        name: 'Aziz',
        age: 16
    }
}
const goodsResponse: ApiResponse<string[]> = {
    status: 'succes',
    data: ['auto', 'house']
}

interface UserProfile {
  id: number;
  username: string;
  email: string;
  avatarUrl: string;
  isAdmin: boolean;
}
type Profile = Omit<UserProfile, 'id' | 'isAdmin'>
type UpdateProfile = Partial<UserProfile>


interface Box<T> {
    label: string;
    content: T;
}
const numberBox: Box<number> = {
    label: "Мой числовой бокс",
    content: 40
}
const stringArrBox: Box<string[]> = {
    label: "Бокс со строками",
    content: ['react', 'typescript']
}

interface Car {
  id: string;
  brand: string;
  model: string;
  year: number;
  isSold: boolean;
}
type NewCarForm = Omit<Car, 'id' | 'isSold'>
type EditCarForm = Partial<Car>

interface WalletBalance {
    balance: number
}
type WalletAction = 
    | {type: 'Dep'; payload: number}
    | {type: 'Width'; payload: number}
    | { type: 'Clear'}

function walletReducer(state: WalletBalance, action: WalletAction): WalletBalance {
        switch(action.type) {
            case 'Dep':
                return {balance: state.balance + action.payload}
            case 'Width':
                return {balance: state.balance - action.payload}
            case 'Clear': 
                return {balance: 0}
        }
    }

    interface UserProfile {
        id: number;
        name: string;
        email: string;
        theme: 'light' | 'dark';
        currency: 'USD' | 'EUR'
}
type EditProfile = Partial<Pick<UserProfile, 'currency' | 'theme'>>

export function returnNewProfile(newUserProfile: EditProfile, fstProfile: UserProfile){
    const updatedProfile = {...fstProfile, ...newUserProfile}
    return updatedProfile
}

interface ListProps<T extends {id: number | string}> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
}
export const List = <T extends {id: number | string}>({items, renderItem}: ListProps<T>) => {
    return(
        items.map((item) => (
            renderItem(item))
    ))
}