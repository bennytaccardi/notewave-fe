import { SupabaseData } from '@/models/supabase-data';
import { signup } from '@/services/auth.service';
import { TextInput, Checkbox, Button, Group, Box, PasswordInput, Text } from '@mantine/core';
import { useForm } from '@mantine/form';
import { AuthError } from '@supabase/supabase-js';


export function AuthPage() {
  let genericError: string | undefined = '';

  const form = useForm({
    initialValues: {
      email: '',
      password: '',
      termsOfService: false,
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      password: (value) => (null),
    },
  });

  const onSubmit = async (values: User) => {
    const { data, error } = await signup(values.email, values.password);
    genericError = error?.message
  }

  return (
    <Box maw={340} mx="auto">
      <form onSubmit={form.onSubmit((values) => onSubmit(values))}>
        <TextInput
          withAsterisk
          label="Email"
          placeholder="your@email.com"
          {...form.getInputProps('email')}
        />

        <PasswordInput
          withAsterisk
          label="Password"
          placeholder='Insert you password'
          {...form.getInputProps('password')}
        />

        <Checkbox
          mt="md"
          label="I agree to sell my privacy"
          {...form.getInputProps('termsOfService', { type: 'checkbox' })}
        />

        <Text c="red" size="xs" mt={7}>{genericError}</Text>

        <Group justify="flex-end" mt="md">
          <Button type="submit">Submit</Button>
        </Group>
      </form>
    </Box>
  );
}