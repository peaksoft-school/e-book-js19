import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { signUpClientSchema, type SignUpClientSchema } from '../../../shared/lib/validations/auth';
import { Input } from '../../../shared/ui/Input';
import { Button } from '../../../shared/ui/Button';
import { Checkbox } from '../../../shared/ui/Checkbox';
import { useSignUpMutation } from '../../../features/auth/api/authApi';
import { Spinner } from '../../../shared/ui/Spinner';

interface SignUpClientProps {
  onSwitchToVendor: () => void;
}

const SignUpUser = ({ onSwitchToVendor }: SignUpClientProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<SignUpClientSchema>({
    resolver: zodResolver(signUpClientSchema),
    mode: 'onChange'
  });

  const [signUp, { isLoading }] = useSignUpMutation();

  const onSubmit = async (data: SignUpClientSchema) => {
    try {
      const result = await signUp(data);

      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-0.5">
      <div className="flex flex-col gap-1">
        <Input
          noFocusBorder
          label="Ваше имя"
          required
          placeholder="Напишите ваше имя"
          {...register('name')}
          error={!!errors.name}
        />

        {errors.name ? (
          <span className="text-danger text-body-small">{errors.name.message}</span>
        ) : (
          <span className="text-white text-body-small">.</span>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <Input
          noFocusBorder
          label="Email"
          required
          placeholder="Напишите ваш email"
          {...register('email')}
          error={!!errors.email}
        />
        {errors.email ? (
          <span className="text-danger text-body-small">{errors.email.message}</span>
        ) : (
          <span className="text-white text-body-small">.</span>
        )}
      </div>

      <div className="flex flex-col gap-1">
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

      <div className="flex flex-col gap-1">
        <Input
          noFocusBorder
          label="Подтвердите пароль"
          required
          variant="password"
          placeholder="Подтвердите пароль"
          {...register('confirmPassword')}
          error={!!errors.confirmPassword}
        />
        {errors.confirmPassword ? (
          <span className="text-danger text-body-small">{errors.confirmPassword.message}</span>
        ) : (
          <span className="text-white text-body-small">.</span>
        )}
      </div>

      <Checkbox
        {...register('subscribe')}
        label="Подпишитесь на рассылку, чтобы получать новости от eBook"
      />

      <Button variant="primary" size="full" type="submit" className="mt-2 mb-2">
        {isLoading ? <Spinner /> : 'Создать аккаунт'}
      </Button>

      <Button
        variant="outline"
        size="full"
        type="button"
        onClick={onSwitchToVendor}
        className="text-black! border-black"
      >
        Стать продавцом на eBook
      </Button>
    </form>
  );
};

export default SignUpUser;
