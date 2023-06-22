import { ReactNode } from "react";
import addPd from '../../asset/image/dp.jpg';

type ImageType = React.ComponentProps<"img">;

export const Profile = ({ className,  ...props }: ImageType) => {
    return (
        <img src={addPd} alt="dp" className={className} />
    )
}

