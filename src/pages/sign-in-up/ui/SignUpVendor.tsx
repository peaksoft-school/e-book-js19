import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { signUpVendorSchema, type SignUpVendorSchema } from '../../../shared/lib/validations/auth';
import { Input } from '../../../shared/ui/Input';
import { Button } from '../../../shared/ui/Button';
import { useSignUpVendorMutation } from '../../../features/auth/api/authApi';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router';
import { useAppDispatch } from '../../../shared/lib/hooks/hooks';
import { setCredentials } from '../../../features/auth/model/authSlice';

const SignUpVendor = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors }
  } = useForm<SignUpVendorSchema>({
    resolver: zodResolver(signUpVendorSchema),
    mode: 'onChange',
    defaultValues: {
      phone: ''
    }
  });

  const [signUp] = useSignUpVendorMutation();

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const onSubmit = async (data: SignUpVendorSchema) => {
    try {
      const { role, id, token } = await signUp({
        firstName: data.name,
        lastName: data.surname,
        email: data.email,
        password: data.password,
        phoneNumber: '+' + data.phone
      }).unwrap();

      dispatch(
        setCredentials({
          role,
          id,
          token
        })
      );

      toast.success('Аккаунт продавца создан!');

      navigate('/vendor');
    } catch (error) {
      const err = error as { data?: { message?: string } };

      toast.error(err?.data?.message ?? 'Ошибка при регистрации');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
      <div className="flex flex-col gap-0.5">
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

      <div className="flex flex-col gap-0.5">
        <Input
          noFocusBorder
          label="Ваша фамилия"
          required
          placeholder="Напишите вашу фамилию"
          {...register('surname')}
          error={!!errors.surname}
        />
        {errors.surname ? (
          <span className="text-danger text-body-small">{errors.surname.message}</span>
        ) : (
          <span className="text-white text-body-small">.</span>
        )}
      </div>

      <div className="flex flex-col gap-0.5">
        <label className="text-body text-primary">
          Номер вашего телефона
          <span className="text-danger ml-1">*</span>
        </label>
        <Controller
          name="phone"
          control={control}
          render={({ field }) => (
            <PhoneInput
              country="kg"
              value={field.value}
              onChange={field.onChange}
              inputStyle={{
                width: '100%',
                height: '42px',
                border: errors.phone ? '1px solid #F10000' : '1px solid #C4C4C4',
                borderRadius: '0',
                fontFamily: 'Open Sans',
                fontSize: '1rem',
                backgroundColor: errors.phone ? '#FFF5F5' : 'transparent'
              }}
              buttonStyle={{
                border: errors.phone ? '1px solid #F10000' : '1px solid #C4C4C4',
                borderRadius: '0',
                backgroundColor: 'white'
              }}
            />
          )}
        />
        {errors.phone ? (
          <span className="text-danger text-body-small">{errors.phone.message}</span>
        ) : (
          <span className="text-white text-body-small">.</span>
        )}
      </div>

      <div className="flex flex-col gap-0.5">
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

      <div className="flex flex-col gap-0.5">
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

      <Button variant="primary" size="full" type="submit" className="mt-2">
        Создать аккаунт
      </Button>
    </form>
  );
};

export default SignUpVendor;
