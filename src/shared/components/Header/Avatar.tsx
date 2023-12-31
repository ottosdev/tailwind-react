import { Menu } from "@headlessui/react";

interface Props {
  name: string;
  url?: string;
}

export default function Avatar({ name }: Props) {
  return (
    <Menu.Button className="mt-2 inline-flex rounded-full focus:outline-none focus:ring-2 focus:ring-neutral-400">
      <div className='h-10 w-10 rounded-full bg-sky-500 bg-no-repeat bg-center' style={{ backgroundImage: 'url("https://source.unsplash.com/80x80?face")' }}>
        <span className='sr-only'>{name}</span>
      </div>
    </Menu.Button>
  )
}
