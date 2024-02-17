import checkToken from "@/lib/actions/auth/checkToken";
import getUserById from "@/lib/actions/auth/getUserById";
import { TOKEN_KEY } from "@/lib/constants";
import { UserWithData } from "@/lib/definitions";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function useProtected() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>();
  const [user, setUser] = useState<UserWithData>();

  const onFail = (e: Error) => {
    localStorage.removeItem(TOKEN_KEY);
    router.replace("/login");
    setError(e.message);
    setLoading(false);
  };

  const refreshUser = () => {
    const token = localStorage.getItem(TOKEN_KEY);
    if (!token) return onFail(new Error("No hay un token"));

    checkToken(token)
      .then((result) => {
        getUserById(result as string)
          .then((user) => {
            const finalUser = user as UserWithData;
            delete finalUser.password;
            setUser(finalUser);
            setLoading(false);
            setError(undefined);
          })
          .catch(onFail);
      })
      .catch(onFail);
  };

  useEffect(refreshUser, []);

  return { user, refreshUser, loading, error };
}
