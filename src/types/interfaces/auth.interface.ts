// src/types/AuthTypes.ts
interface ILoginFormValues {
  email: string;
  password: string;
}

interface IRegisterFormValues {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export type { ILoginFormValues, IRegisterFormValues };
