import Image from "next/image"

const Brand = ({ ...props }) => (
    <Image
        src="/brand.svg"
        alt="Constellation Logomark"
        {...props}
        width={200}
        height={100}
        priority
    />
)
export default Brand