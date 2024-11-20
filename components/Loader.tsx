import Image from "next/image"

const Loader = () => {
    return (
        <div className="flex justify-center items-center h-screen w-full">
            <Image
                src="/loading-circle.svg"
                alt="loading"
                width={50}
                height={50}
            />
        </div>
    )
}
export default Loader