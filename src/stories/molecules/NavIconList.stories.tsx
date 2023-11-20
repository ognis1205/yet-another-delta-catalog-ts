/**
 * @fileoverview Defines @/molecules/NavIconList story.
 * @copyright Shingo OKAWA 2023
 */
import { FaHome, FaInfoCircle, FaQuestionCircle } from 'react-icons/fa';

import { Component as NavIconList } from '@/molecules/NavIconList';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'NavIconList',
  component: NavIconList,
} satisfies Meta<typeof NavIconList>;

type Story = StoryObj<typeof meta>;

const items = [
  {
    href: '/',
    popover: 'Home',
    'aria-label': 'Home',
    icon: <FaHome />,
  },
  {
    href: '/',
    popover: 'Info',
    'aria-label': 'Info',
    icon: <FaInfoCircle />,
  },
  {
    href: '/',
    popover: 'Question',
    'aria-label': 'Question',
    icon: <FaQuestionCircle />,
  },
];

const navItems = [
  {
    href: '/',
    popover: 'Home',
    'aria-label': 'Home',
    variant: 'nav',
    icon: <FaHome />,
  },
  {
    href: '/',
    popover: 'Info',
    'aria-label': 'Info',
    variant: 'nav',
    icon: <FaInfoCircle />,
  },
  {
    href: '/',
    popover: 'Question',
    'aria-label': 'Question',
    variant: 'nav',
    icon: <FaQuestionCircle />,
  },
];

export const Default: Story = {
  args: {
    items: items,
    direction: 'row',
    alignItems: 'center',
    flexGrow: 1,
  },
  render: (args) => <NavIconList {...args} />,
};

export const AsNavigation: Story = {
  args: {
    items: navItems,
    direction: 'row',
    alignItems: 'center',
    flexGrow: 1,
  },
  render: (args) => <NavIconList {...args} />,
};

export default meta;
