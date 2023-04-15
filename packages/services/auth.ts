// This is just a dummy auth implementation

export const CORRECT_EMAIL = "repoinfo@repoinfo.com";
export const CORRECT_PASSWORD = "Fassword123";
export const PASSWORD_ERROR_MESSAGE = "Ooops, wrong password!";
export const EMAIL_ERROR_MESSAGE = "There is no user found with this email";

const isClient = typeof window !== "undefined";

export const login = ({
  email,
  password,
}: {
  email: string;
  password: string;
}):
  | {
      success?: boolean;
      error?: string;
    }
  | undefined => {
  if (!isClient) return;

  if (email === CORRECT_EMAIL && password === CORRECT_PASSWORD) {
    localStorage.setItem("auth", "true");
    return {
      success: true,
    };
  }

  if (email !== CORRECT_EMAIL) {
    return {
      error: EMAIL_ERROR_MESSAGE,
    };
  }

  if (password !== CORRECT_PASSWORD) {
    return {
      error: PASSWORD_ERROR_MESSAGE,
    };
  }
};

export const isLogin = (): boolean | undefined => {
  if (!isClient) return;
  return localStorage.getItem("auth") === "true";
};

export const logout = (): boolean | undefined => {
  if (!isClient) return;
  localStorage.removeItem("auth");
};
