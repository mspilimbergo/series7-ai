import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { type AvatarProps } from "@radix-ui/react-avatar";
import { type User } from "next-auth";

interface Props extends AvatarProps {
  user: Pick<User, "name" | "image">;
}

const UserAvatar = ({ user, ...props }: Props) => {
  return (
    <Avatar {...props}>
      {user.image ? (
        <div className="relative w-full h-full aspect-square">
          {/* <Image
            fill
            src={user.image}
            alt="profile picture"
            referrerPolicy="no-referrer"
          /> */}
        </div>
      ) : (
        <AvatarFallback>
          <span className="sr-only ">{user?.name}</span>
        </AvatarFallback>
      )}
    </Avatar>
  );
};

export default UserAvatar;
