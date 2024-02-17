import checkToken from "@/lib/actions/auth/checkToken";
import getUserById from "@/lib/actions/auth/getUserById";
import { TOKEN_KEY } from "@/lib/constants";
import { UserWithData } from "@/lib/definitions";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function useProtected() {
  const router = useRouter();
  const [user, setUser] = useState<UserWithData>();

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
            const finalUser = user as UserWithData;
            delete finalUser.password;
            setUser(finalUser);
          })
          .catch(onFail);
      })
      .catch(onFail);
  }, []);

  return user;
}
