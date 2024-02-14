import checkToken from "@/lib/actions/auth/checkToken";
import getUserById from "@/lib/actions/getUserById";
import { TOKEN_KEY } from "@/lib/constants";
import { UserWithoutPassword } from "@/lib/definitions";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function useProtected() {
  const router = useRouter();
  const [user, setUser] = useState<UserWithoutPassword>();

  const onFail = () => {
    localStorage.removeItem(TOKEN_KEY);
    router.replace("/login");
  };

  useEffect(() => {
    const token = localStorage.getItem(TOKEN_KEY);
    if (!token) return onFail();

    checkToken(token)
      .then((result) => {
        getUserById(result as string)
          .then((user) => {
            const finalUser = user as UserWithoutPassword;
            delete finalUser.password;
            setUser(finalUser);
          })
          .catch(onFail);
      })
      .catch(onFail);
  }, []);

  return user;
}
