
import { signin } from '@/services/auth.service';
import { TextInput, Checkbox, Button, Group, Box, PasswordInput, Text, Anchor } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useNavigate } from 'react-router-dom';


export function SigninPage() {
    const navigate = useNavigate();
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
        const data = await signin(values.email, values.password);
        if (data.data.user?.aud === 'authenticated' && !data.error) {
            navigate('/home');
        }
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
            <Anchor href="/signup">
                Signup
            </Anchor>
        </Box>
    );
}