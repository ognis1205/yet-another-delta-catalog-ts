/**
 * @fileoverview Defines dashboard layout.
 * @copyright Shingo OKAWA 2023
 */
'use client';

import { FC, ReactNode } from 'react';
import { useSession } from 'next-auth/react';
import { Flex } from '@chakra-ui/react';

import { Navigation } from '@/components/Navigation';
import { Search } from '@/components/Search';
import { Profile } from '@/containers/Profile';
import { Left } from '@/layouts/Left';
import { Main } from '@/layouts/Main';
import { Right } from '@/layouts/Right';

const links = [
  {
    title: 'Home',
    icon: 'home' as const,
    href: '/dashboard',
  },
  {
    title: 'Catalog',
    icon: 'catalog' as const,
    href: '/dashboard/catalog',
  },
  {
    title: 'Share',
    icon: 'share' as const,
    href: '/dashboard/share',
  },
  {
    title: 'Tables',
    icon: 'table' as const,
    href: '/dashboard/table',
  },
  {
    title: 'Settings',
    icon: 'settings' as const,
    href: '/dashboard/settings',
  },
];

type Props = {
  children: ReactNode;
};

const Layout: FC<Props> = ({ children }: Props) => {
  const { data: session } = useSession();

  return (
    <Flex
      h={[null, null, '100vh']}
      maxW="2000px"
      flexDir={['column', 'column', 'row']}
      overflow="hidden"
    >
      <Left>
        <Navigation links={links} />
      </Left>
      <Main>{children}</Main>
      <Right>
        <Search notifies={2} />
        <Profile
          image={session && session.user ? session.user.image : 'N/A'}
          name={session && session.user ? session.user.name : 'N/A'}
          email={session && session.user ? session.user.email : 'N/A'}
          shares={343}
          recipients={13}
        />
      </Right>
    </Flex>
  );
};

Layout.displayName = 'DashboardLayout';

export default Layout;
