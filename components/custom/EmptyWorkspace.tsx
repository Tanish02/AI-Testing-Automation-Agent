import Image from 'next/image'
const EmptyWorkspace = () => {
  return (
    <div className="flex flex-col mt-10 items-center justify-center ">
      <Image src={'/folder.png'} alt="folder" width={70} height={70} />
      <h2 className="font-medium text-3xl ">No Repository Addded</h2>
    </div>
  )
}

export default EmptyWorkspace
