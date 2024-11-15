import AppLayout from '@/Layouts/AppLayout'

const Users = () => {
  return (
    <AppLayout
            title="Users"
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Users
                </h2>
            }
        >Users</AppLayout>
  )
}

export default Users