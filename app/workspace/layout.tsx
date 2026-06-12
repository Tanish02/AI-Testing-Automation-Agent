import WorkspaceHeader from '@/components/custom/WorkspaceHeader'
import React from 'react'

const workspaceLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <WorkspaceHeader />
      {children}
    </div>
  )
}

export default workspaceLayout
