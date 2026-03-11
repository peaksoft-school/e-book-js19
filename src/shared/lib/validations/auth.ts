import { z } from 'zod';

export const signInSchema = z.object({
  email: z.string().email('Неверный формат email'),
  password: z.string().min(6, 'Минимум 6 символов')
});

export const signUpClientSchema = z
  .object({
    name: z.string().min(2, 'Минимум 2 символа'),
    email: z.string().email('Неверный формат email'),
    password: z.string().min(6, 'Минимум 6 символов'),
    confirmPassword: z.string().min(6, 'Минимум 6 символов'),
    subscribe: z.boolean().optional()
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Пароли не совпадают',
    path: ['confirmPassword']
  });

export const signUpVendorSchema = z
  .object({
    name: z.string({ error: 'Поле обязательно' }).min(2, 'Минимум 2 символа'),
    surname: z.string({ error: 'Поле обязательно' }).min(2, 'Минимум 2 символа'),
    phone: z.string({ error: 'Введите номер телефона' }).min(7, 'Введите корректный номер'),
    email: z.string({ error: 'Поле обязательно' }).email('Неверный формат email'),
    password: z.string({ error: 'Поле обязательно' }).min(6, 'Минимум 6 символов'),
    confirmPassword: z.string({ error: 'Поле обязательно' }).min(6, 'Минимум 6 символов')
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Пароли не совпадают',
    path: ['confirmPassword']
  });

export type SignInSchema = z.infer<typeof signInSchema>;
export type SignUpClientSchema = z.infer<typeof signUpClientSchema>;
export type SignUpVendorSchema = z.infer<typeof signUpVendorSchema>;
