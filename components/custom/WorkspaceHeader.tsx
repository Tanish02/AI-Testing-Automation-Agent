import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'

const WorkspaceHeader = () => {
  return (
    <div className="flex w-full justify-between p-4">
      {/* LOGO*/}
      <Image src={'/logo.svg'} alt="logo" width={200} height={400} />

      {/* center menu options */}
      <ul className="flex gap-5 text-xl">
        <li className="hover:text-blue-700 cursor-pointer">Workspace</li>
        <li className="hover:text-blue-700 cursor-pointer">priceing</li>
        <li className="hover:text-blue-700 cursor-pointer">Support</li>
      </ul>

      {/*user button on right */}
      <UserButton />
    </div>
  )
}

export default WorkspaceHeader
