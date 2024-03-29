import {ReactNode} from "react";
import {IoAlarm, IoAnalyticsSharp, IoAperture, IoBagHandle} from 'react-icons/io5'

function DashboardStats() {
    return (
        <div className='flex gap-4 w-full'>
            <BoxWrapper>
                <BoxWrapperContent title='All sales' price={2000} icon={<IoBagHandle className='text-2xl text-white'/>} color='bg-sky-500'/>
            </BoxWrapper>
            <BoxWrapper>
                <BoxWrapperContent title='Product Month' price={20} icon={<IoAnalyticsSharp className='text-2xl text-white'/>} color='bg-red-500'/>
            </BoxWrapper>
            <BoxWrapper>
                <BoxWrapperContent title={'Invoicing'} price={50000} icon={<IoAperture className='text-2xl text-white'/>} color='bg-green-500'/>
            </BoxWrapper>
            <BoxWrapper>
                <BoxWrapperContent title={'We are more...'} price={10000} icon={<IoAlarm className='text-2xl text-white'/>} color='bg-purple-500'/>
            </BoxWrapper>
        </div>
    );
}

export default DashboardStats;

interface IBox {
    children: ReactNode
}

function BoxWrapper({children}: IBox) {
    return <div className='bg-white rounded p-4 flex-1 border border-gray-200 flex items-center'>{children}</div>;
}

interface IBoxContent {
    icon: ReactNode;
    color: string
    title: string
    price: number
}

function BoxWrapperContent({icon, color, title, price}: IBoxContent) {
    return <>
        <div className={`rounded-full h-12 w-12 flex items-center justify-center ${color}`}>
            {icon}
        </div>
        <div className='pl-4'>
            <span className='text-sm text-gray-500 font-light'>{title}</span>
            <div className='flex items-center'>
                <strong className='text-xl text-gray-700 font-semibold'>${price}</strong>
                {/*<span className='text-sm text-green-500 pl-2'>+200</span>*/}
            </div>
        </div>
    </>;
}