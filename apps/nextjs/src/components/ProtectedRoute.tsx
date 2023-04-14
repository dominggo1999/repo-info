import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { isLogin } from "@acme/services";
import { LoadingWithMessage } from "@acme/ui-react";

export interface IProtectedRoute {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<IProtectedRoute> = ({ children }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!isLogin()) {
      router.push("/auth");
    }
  }, [router]);

  // Simulate fetching auth service
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingWithMessage />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
