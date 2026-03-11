import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { signUpClientSchema, type SignUpClientSchema } from '../../../shared/lib/validations/auth';
import { Input } from '../../../shared/ui/Input';
import { Button } from '../../../shared/ui/Button';

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

  const onSubmit = (data: SignUpClientSchema) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-0.5">
      <div className="flex flex-col gap-1">
        <Input
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

      <label className="flex items-center gap-2 text-body-small text-neutral-300 cursor-pointer">
        <input type="checkbox" {...register('subscribe')} />
        Подпишитесь на рассылку, чтобы получать новости от eBook
      </label>

      <Button variant="primary" size="full" type="submit" className="mt-2 mb-2">
        Создать аккаунт
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
