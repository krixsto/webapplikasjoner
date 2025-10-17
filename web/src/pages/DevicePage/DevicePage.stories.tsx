import type { Meta, StoryObj } from '@storybook/react'

import DevicePage from './DevicePage'

const meta: Meta<typeof DevicePage> = {
  component: DevicePage,
}

export default meta

type Story = StoryObj<typeof DevicePage>

export const Primary: Story = {}
