import checkToken from "@/lib/actions/auth/checkToken";
import { TOKEN_KEY } from "@/lib/constants";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function useProtected() {
  const router = useRouter();
  const [userId, setUserId] = useState<string>();

  useEffect(() => {
    const token = localStorage.getItem(TOKEN_KEY);
    if (!token) {
      router.replace("/login");
      return;
    }

    checkToken(token)
      .then((result) => {
        setUserId(result as string);
      })
      .catch(() => {
        localStorage.removeItem(TOKEN_KEY);
        router.replace("/login");
      });
  });

  return userId;
}
