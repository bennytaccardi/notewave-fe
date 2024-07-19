/* eslint-disable import/extensions */
import { AppShell, Burger, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { NoteGrid } from '@/components/NoteGrid';

export function HomePage() {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: 'sm',
        collapsed: { mobile: !opened },
      }}
      padding="md"
    >
      <AppShell.Header>
        <Burger
          opened={opened}
          onClick={toggle}
          hiddenFrom="sm"
          size="sm"
        />
        <div>Logo</div>
      </AppShell.Header>

      <AppShell.Navbar p="md">Navbar</AppShell.Navbar>

      <AppShell.Main>
        <Text>+new note</Text>
        <NoteGrid />
      </AppShell.Main>
    </AppShell>
  );
}
