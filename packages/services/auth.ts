// This is just a dummy auth implementation

export const CORRECT_EMAIL = "repoinfo@repoinfo.com";
export const CORRECT_PASSWORD = "Fassword123";

const isClient = typeof window !== "undefined";

export const login = ({
  email,
  password,
}: {
  email: string;
  password: string;
}): {
  success?: boolean;
  error?: string;
} => {
  if (!isClient) return;

  if (email === CORRECT_EMAIL && password === CORRECT_PASSWORD) {
    localStorage.setItem("auth", "true");
    return {
      success: true,
    };
  }

  if (email !== CORRECT_EMAIL) {
    return {
      error: "There is no user found with this email",
    };
  }

  if (password !== CORRECT_PASSWORD) {
    return {
      error: "Ooops, wrong password!",
    };
  }
};

export const isLogin = () => {
  if (!isClient) return;
  return localStorage.getItem("auth") === "true";
};

export const logout = () => {
  if (!isClient) return;
  localStorage.removeItem("auth");
};
