
import Messages from './HeaderMessages'
import HeaderMenuProfile from './HeaderMenuProfile'


export default function Header() {

  return (
    <div className='bg-white h-16 px-6 flex justify-between items-center'>
      <div>
        Titulo
      </div>
      <div className='flex items-center gap-2'>
        <Messages />
        <HeaderMenuProfile />
      </div>
    </div >
  )
}
