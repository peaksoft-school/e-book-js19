import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { signInSchema, type SignInSchema } from '../../../shared/lib/validations/auth';
import { Input } from '../../../shared/ui/Input';
import { Button } from '../../../shared/ui/Button';
import { useSignInMutation } from '../../../features/auth/api/authApi';
import { Spinner } from '../../../shared/ui/Spinner';

const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<SignInSchema>({
    resolver: zodResolver(signInSchema),
    mode: 'onChange'
  });

  const [signIn, { isLoading }] = useSignInMutation();

  const onSubmit = async (data: SignInSchema) => {
    try {
      const result = await signIn(data);

      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-1">
      <div className="flex flex-col gap-0.5">
        <Input
          noFocusBorder
          label="Email"
          required
          placeholder="Напишите email"
          {...register('email')}
          error={!!errors.email}
        />

        {errors.email ? (
          <span className="text-danger text-body-small">{errors.email.message}</span>
        ) : (
          <span className="text-white text-body-small">.</span>
        )}
      </div>

      <div className="flex flex-col gap-0.5">
        <Input
          noFocusBorder
          label="Пароль"
          required
          variant="password"
          placeholder="Напишите пароль"
          {...register('password')}
          error={!!errors.password}
        />
        {errors.password ? (
          <span className="text-danger text-body-small">{errors.password.message}</span>
        ) : (
          <span className="text-white text-body-small">.</span>
        )}
      </div>

      {errors.root && (
        <span className="text-danger text-body-small text-center">{errors.root.message}</span>
      )}

      <Button variant="primary" size="full" type="submit" className="mt-2">
        {isLoading ? <Spinner /> : 'Войти'}
      </Button>
    </form>
  );
};

export default SignIn;
